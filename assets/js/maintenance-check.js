

window.onload = function (){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://derangedsenators.github.io/static_api/server/maintenance.json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(xmlhttp.responseText)
            var myArr = JSON.parse(xmlhttp.responseText);
            if(myArr.scheduled === true){
                var element = document.getElementById("maintenance-info");
                var msg = "The Server may be down for routine updates/maintenance from " + myArr.information.start_from + "UTC On " +   myArr.information.start_date + "to " + + myArr.information.end_at + "UTC On " +   myArr.information.end_date + ". You may not be able to connect to the server to play during this period"
                element.innerText = myArr.message

            } else{
                var element = document.getElementById("maintenance-div");
                element.parentNode.removeChild(element);
            }
        }
    }
}