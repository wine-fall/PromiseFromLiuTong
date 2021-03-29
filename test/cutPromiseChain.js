Promise.resolve()
    .then(() => {
        console.log('1');
    })
    .then(() => new Promise(() => { })) // Promise保持问PENDDING状态
    .then(() => {
        console.log('2');
    })