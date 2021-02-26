// external link icon
var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") != null && links[i].getAttribute("href").indexOf("http") == 0 && !links[i].className.includes("noexternal")) {
        links[i].className += " external";
        links[i].setAttribute("title", "External link: " + links[i].href);
    };
};
