var collapsers = document.getElementsByClassName("collapsable");

for (var i = 0; i < collapsers.length; i++) {
    collapsers[i].childNodes[1].addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight)
          content.style.maxHeight = null;
        else
          content.style.maxHeight = content.scrollHeight + "px";
    });
}
