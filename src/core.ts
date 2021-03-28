import { Application, ExtraProps } from 'single-spa/typings/single-spa'
import { promiseForEach } from './promiseLoop'

const singleSpaRadar = (applicationOrLoadingFns: Application<ExtraProps>[], releaseLoadingFn: Application<ExtraProps>, isRelease: boolean = false) => {
    if (isRelease) {
        return new Promise((resolve) => {
            releaseLoadingFn().then(application => {
                resolve(application);
            });
        })
    } else {
        if (releaseLoadingFn) {
            applicationOrLoadingFns.push(releaseLoadingFn);
        }
        return new Promise((resolve, reject) => {
            promiseForEach(applicationOrLoadingFns, (application) => {
             resolve(application);
            });
         });
    }
    
}

export {
    singleSpaRadar,
}