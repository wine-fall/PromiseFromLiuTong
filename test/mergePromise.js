const timeout = ms => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, ms)
});

const ajax1 = () => timeout(1000).then(() => {
    console.log('1')
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2')
    return 2
});

const ajax3 = () => timeout(1000).then(() => {
    console.log('3')
    return 3
});

const mergePromise = ajaxArray => {
    const result = [];
    let promise = Promise.resolve();
    ajaxArray.forEach(item => {
        promise = promise.then(item);
        result.push(promise);
    })
    return Promise.all(result);
};

// mergePromise([ajax1, ajax2, ajax3]).then(data => {
//     console.log('done')
//     console.log(data) //[1,2,3]
// });

// taskQueue 1
// result 

Promise.resolve()
    .then(() => timeout(1000).then(() => {
        console.log('ajax1')
        return 1;
    }))
    .then(val => { console.log(val) })
