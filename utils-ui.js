var JS-UI = {
	getQueryVariable:
        function(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] === variable) {
                    return decodeURIComponent(pair[1]);
                }
            }
            return null;
        },
	getDomain: function(url) {
		return url.substring(0, url.lastIndexOf("/") + 1);
	},
	getSelectedText: function() {
		var text = "";
		if (typeof window.getSelection !== "undefined") {
			text = window.getSelection().toString();
		} else if (typeof document.selection !== "undefined" && document.selection.type === "Text") {
			text = document.selection.createRange().text;
		}
		return text;
	}
};
