const promiseForEach = (promiseArr, cb) => {
    let index = 0;
    const nextPromise = () => {
        const currentPromise = promiseArr[index];
        currentPromise().then((result) => {
            cb(result);
        }).catch((err) => {
            index ++;
            if (index >= promiseArr.length) {
                throw new Error('no module can resolve');
            }
            nextPromise();
        });
    }

   return nextPromise();
}

export {
    promiseForEach
}