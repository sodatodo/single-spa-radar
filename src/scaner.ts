async function checkLoadFn(loadFn) {
    try {
        
        const result = await loadFn();
        console.log(`result`, result)
    } catch (error) {
        console.log(`error`, error)
    }
}

export {
    checkLoadFn,
}