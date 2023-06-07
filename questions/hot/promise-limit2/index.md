# promise-limit2

## 描述
const request1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

const request2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 500);
  });

const request3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  });

const request4 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 400);
  });

function scheduler(max) {
  const queue = [];
  let running = 0;

  function runNextRequest() {
    if (running >= max || queue.length === 0) {
      return;
    }

    running++;
    const nextRequest = queue.shift();
    nextRequest()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        running--;
        runNextRequest();
      });
  }

  return function addRequest(request) {
    queue.push(request);
    runNextRequest();
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

> 控制并发

## 题解

```javascript

```
