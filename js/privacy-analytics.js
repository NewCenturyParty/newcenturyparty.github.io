
(function () {
    var GOATCOUNTER_ENDPOINT = "https://newcenturyparty.goatcounter.com/count";

    if (!GOATCOUNTER_ENDPOINT) {
        return;
    }

    var endpoint = GOATCOUNTER_ENDPOINT.trim().replace(/\/+$/, "");
    var countUrl = endpoint.endsWith("/count") ? endpoint : endpoint + "/count";
    var script = document.createElement("script");

    script.async = true;
    script.src = "https://gc.zgo.at/count.js";
    script.setAttribute("data-goatcounter", countUrl);

    document.head.appendChild(script);
})();
