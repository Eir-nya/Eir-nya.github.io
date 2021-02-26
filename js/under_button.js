function switchbtn(btn, toggle) { btn.setAttribute("src", btn.getAttribute("src").replace(/_\d/, (toggle ? "_1" : "_0"))); };
