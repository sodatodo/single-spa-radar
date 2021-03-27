import { Application, ExtraProps } from 'single-spa/typings/single-spa'
import { promiseForEach } from './promiseLoop'

const singleSpaRadar = (applicationOrLoadingFns: Application<ExtraProps>[]) => {
    return new Promise((resolve, reject) => {
       promiseForEach(applicationOrLoadingFns, (application) => {
        resolve(application);
       });
    });
}

export {
    singleSpaRadar,
}