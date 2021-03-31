/**
 * @author Hanzalah Ravat
 */
import {downloadDynamic,getMainDLType} from './download.js'
import {baseurl,getOS} from "./utils.js";

window.onload = function () {
    var field = document.getElementById("dynamicLine");
    var os = getOS();
    const dltype = getMainDLType(os);
    os = capitalize(os)
    var link = baseurl() + "download/thankyou-for-downloading/?type="+dltype + "&platform=" + os
    field.innerHTML = "Detected OS as: " + os +". <a href=" + link + "> Click Here to Download </a>"
    console.log(link)
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}