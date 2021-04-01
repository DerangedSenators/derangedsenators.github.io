import{baseurl, getOS} from "./utils.js";
/**
 * @author Hanzalah Ravat
 */
/**
 * Attempts to download based on Platform
 */
function downloadDynamic(){
    download(getOS());
}

/**
 * Attempts to download based on a specifed platform
 * @param os Te OS to download for in lowercase
 */
function download(os){
    if(os ==='undefined'){
        unsupportedPlatform();
    }
    var osCfg = getConfig()
    var dlType = osCfg[os]; //Finds out if we need Launcher, Package Manager or Standalone Release
    switch (dlType){
        case "launcher":
            downloadLauncher();
            break;
        case "standalone":
            downloadStandalone();
            break;
        case "pkgman":
            downloadFromPackageManager();
            break;
        case "unsupported":
            unsupportedPlatform();
            break;
    }
}

function getConfig(){
    var dlinfRequest = new XMLHttpRequest();
    dlinfRequest.open("GET", baseurl()+"/assets/json/dlinf.json",false);
    dlinfRequest.send();
    return JSON.parse(dlinfRequest.responseText);
}

/**
 * Function to determine the best option to deliver the package to users of defined platform or returns "unsupported" if selected platform is unsupported
 * @param os The OS/platform of the user
 */
function getMainDLType(os){
    var config = getConfig();
    var dlType = config[os]; //Finds out if we need Launcher, Package Manager or Standalone Release
    switch (dlType){
        case "launcher":
            return "launcher";
        case "standalone":
            return "standalone";
        case "pkgman":
            return "standalone"
        default:
            return "unsupported";
    }
}
/**
 * Downloads the launcher for a specified OS
 * @param os The os to try and download the launcher for
 */
function downloadLauncher(os){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://api.github.com/repos/DerangedSenators/launcher/releases/latest", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            var osCfg = getConfig();
            var mAsset = osCfg.launcher[os];
            console.log(osCfg.launcher[os]);
            for (i = 0; i < myArr.assets.length; i++) {
                if (myArr.assets[i].name === mAsset) {
                    // This is myAsset. Download THIS FILE
                    downloadFile(myArr.assets[i].browser_download_url,myArr.assets[i].name)
                }
            }
        }
    };
}

/**
 * Downloads a standalone build for a specified os
 * @param os
 */
function downloadStandalone(os){

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://api.github.com/repos/DerangedSenators/copsandrobbers/releases/latest", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            var osCfg = getConfig();
            var mAsset = osCfg.standalone[os];
            console.log(osCfg.standalone[os]);
            let i;
            for (i = 0; i < myArr.assets.length; i++) {
                if (myArr.assets[i].name === mAsset) {
                    // This is myAsset. Download THIS FILE
                    console.log(myArr.assets[i].browser_download_url);
                    downloadFile(myArr.assets[i].browser_download_url,myArr.assets[i].name)
                    //document.getElementById("download_iFrame").src = myArr.assets.browser_download_url;
                }
            }
        }
    };
}


function downloadFile(downloadURL,name){
    var link = document.createElement("a");
    link.download = name;
    link.href = downloadURL;
    link.click();
}

function downloadFromPackageManager(){
    window.location.href = baseurl()+"/download/download-for-linux";
}
function unsupportedPlatform(){
    window.location.href = baseurl()+"/download/unsupported";
}


export{downloadDynamic,downloadStandalone,downloadLauncher,getConfig,getMainDLType}
