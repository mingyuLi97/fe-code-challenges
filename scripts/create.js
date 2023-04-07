const prompts = require("prompts");
const path = require("path");
const fs = require("fs-extra");
const context = process.cwd();

const questionsPath = path.resolve(__dirname, "../questions");
const tplPath = path.resolve(__dirname, "../templates/js-tpl");

(async function () {
  const { dirPath } = await prompts({
    type: "select",
    choices: fs.readdirSync(questionsPath).map((dir) => ({
      value: path.resolve(questionsPath, dir),
      title: dir,
    })),
    message: "select dir",
    name: "dirPath",
  });

  const options = await prompts([
    {
      type: "text",
      message: "please input question name:",
      name: "name",
      validate: function (val) {
        if (!val) {
          return "❌ name is null.";
        }
        if (fs.readdirSync(dirPath).includes(val)) {
          return `❌ "${val}" already exists.`;
        }

        if (/\s/g.test(val)) {
          return `❌ "${val}" contains whitespace characters.`;
        }
        return true;
      },
    },
    {
      type: "text",
      message: "please input description:",
      name: "description",
      initial: "",
    },
  ]);
  const filenames = ["index.js", "index.md", "index.test.js"];
  const name = options.name;
  const outDir = path.resolve(dirPath, name);

  await Promise.all(filenames.map((name) => createFile(name, options, outDir)));
  await fs.rename(
    path.resolve(outDir, "index.test.js"),
    path.resolve(outDir, `${name}.test.js`)
  );
  console.log("Done.");
})();

/**
 * create file
 * @param {string} name
 * @param {Record<string, string>} options
 * @param {string} outDir
 * @return {Promise<boolean>}
 */
async function createFile(name, options, outDir) {
  const fileContent = (
    await fs.readFile(path.resolve(tplPath, name + ".tpl"))
  ).toString();
  const data = fileContent.replace(/\{\{(.+?)\}\}/g, (...args) => {
    const key = args[1].trim();
    return options[key] || "";
  });
  const outPath = path.resolve(outDir, name);
  await fs.ensureFile(outPath);
  await fs.writeFile(outPath, data);
  return true;
}
