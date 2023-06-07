/**
 * promise-limit2
 * @description 控制并发
 */

// export default function main() {
//   // do something
// }

const request1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

const request2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 500);
  });

const request3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 300);
  });

const request4 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 400);
  });

function scheduler(max) {
  const queue = [];
  let running = 0;

  async function runTask() {
    if (running >= max || queue.length === 0) {
      return;
    }
    running++;
    const { task, resolve } = queue.shift();
    task()
      .then((res) => resolve(res))
      .finally((r) => {
        running--;
        runTask();
      });
  }

  return function (task) {
    return new Promise((resolve) => {
      queue.push({ task, resolve });
      runTask();
    });
  };
}

const addRequest = scheduler(2);
addRequest(request1).then((res) => {
  console.log(res);
});
addRequest(request2).then((res) => {
  console.log(res);
});
addRequest(request3).then((res) => {
  console.log(res);
});
addRequest(request4).then((res) => {
  console.log(res);
});
