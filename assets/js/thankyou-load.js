/**
 * @author Hanzalah Ravat
 */
//Script for loading the thanks for downloading script
import {downloadStandalone,downloadLauncher,downloadDynamic,getMainDLType} from './download.js'
window.onload = (event) => {
    const queryString = window.location.search;
    console.log(queryString);
    if (queryString === "") {
        console.log("Its Empty")
        downloadDynamic();
    }
    const urlParams = new URLSearchParams(queryString);
    const dlType = urlParams.get('type');
    const platform = urlParams.get('platform');
    switch (dlType) {
        case 'standalone':
            downloadStandalone(platform);
            break;
        case 'launcher':
            downloadLauncher(platform);
            break;
    }
}