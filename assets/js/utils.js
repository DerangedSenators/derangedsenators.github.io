export{getOS,baseurl}
/**
 * Function which returns a String of the running OS
 * @returns The name of the OS that the user is using
 */
function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        return 'mac-os';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        return 'ios';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        return 'windows';
    } else if (/android/i.test(userAgent)) {
        return 'android';
    } else if (!os && /Linux/.test(platform)) {
        return 'linux';
    }

    return 'undefined';
}

/**
 * Returns the baseurl of the website
 * @returns {string}
 */
function baseurl(){
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/";
    return baseUrl;
}

