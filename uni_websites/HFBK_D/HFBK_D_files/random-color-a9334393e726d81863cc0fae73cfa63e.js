window.data_color = "";

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*3*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

;(function(window, document) {
        
    //console.info("~~~~~ initializing color theme");
    var all_colors = ["green", "orange", "violet", "pink", "blue"]; //, "yellow"
    var tstamp = new Date().getTime();
    //var lastStored = window.localStorage.getItem("hfbk") || window.sessionStorage.getItem("hfbk") || getCookie('hfbk');
    var lastStored = getCookie('hfbk');

    if(lastStored) {
        lastStored = JSON.parse(lastStored);
    }
    var customColorObj = null;


    if(lastStored && (tstamp - lastStored.time) / (1000 * 3600 * 24) < 1) {
        customColorObj = lastStored;
        
    } else {
        customColorObj = {
            time: tstamp,
            colr: all_colors[Math.floor(Math.random() * all_colors.length)],
            contrast: 0            
        }
        

        try {
            window.localStorage.setItem("hfbk", JSON.stringify(customColorObj));
        } catch(e) {
            //alert(e);
        }

        try {
            window.sessionStorage.setItem("hfbk", JSON.stringify(customColorObj));
        } catch(e) {
            //alert(e);
        }

        try {
            setCookie("hfbk", JSON.stringify(customColorObj), 1);
        } catch(e) {
            //alert(e);
        }

    }

    //console.info("      colr=", customColorObj.colr, ", time=", customColorObj.time);
    //console.info("      timediff=", (tstamp - lastStored.time) / (1000 * 3600 * 24));


    //var style = document.createElement("link");
    //
    //var style_rel = document.createAttribute("rel");
    //    style_rel.value = "stylesheet";
    //var style_type = document.createAttribute("type");
    //    style_type.value = "text/css";
    //var style_media = document.createAttribute("media");
    //    style_media.value = "all";
    //var style_href = document.createAttribute("href");
    //    style_href.value = "/fileadmin/templates/css/main_" + customColorObj.colr + ".css?" + customColorObj.time;
    //
    //style.setAttributeNode(style_rel);
    //style.setAttributeNode(style_type);
    //style.setAttributeNode(style_media);
    //style.setAttributeNode(style_href);
    //
    //var head = document.getElementsByTagName("head")[0];
    //head.appendChild(style);


    var body = document.getElementsByTagName("body")[0];
    //console.log(body);
    var attr_color_theme = "data-colortheme";
    if(!!lastStored && !!lastStored.contrast && lastStored.contrast === 1) {
        attr_color_theme = "data-colortheme";
    }
    var data_color = document.createAttribute(attr_color_theme);
        data_color.value = customColorObj.colr;

    if(data_color.value=="undefined") data_color.value = "pink";
    body.setAttributeNode(data_color);

    window.data_color = data_color;

}(window, document));