(function () {
    var script_name = '/track.js#id_token';
    var id_token = '';
    var scripts = document.getElementsByTagName("script");
    for (i = 0; i < scripts.length; i++) {
        var src = scripts[i].src;
        if (src.indexOf(script_name) != -1) {
            id_token = src.substring(src.indexOf("=") + 1)
        }
    }
    if (document.referrer.indexOf('google.') != -1 && id_token.length > 0) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        var ref = escape(encodeURI(document.referrer));
        var host_name = escape(location.hostname);
        var uri = 'http://metricskey.com/tracker/analytics?id_token=' + id_token + '&ref=' + ref + '&site_url=' + host_name;
        script.src = uri;
        document.body.appendChild(script);
    }
})();