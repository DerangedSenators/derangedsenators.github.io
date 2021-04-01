//Script for loading the thanks for downloading script
/**
 * @author Hanzalah Ravat
 */
import {downloadDynamic,getMainDLType} from './download.js'
import {baseurl,getOS} from "./utils.js";

const os = getOS();
const dltype = getMainDLType(os);
if(os === 'linux'){
    window.location.href = baseurl()+"download/download-for-linux";
} else if(dltype === "unsupported"){
    window.location.href = baseurl()+"download/unsupported";
} else {
    window.location.href = baseurl() + "download/thankyou-for-downloading/?type=" + dltype + "&platform=" + os;
}
