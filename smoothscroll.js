window.onhashchange = scroll;

document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", scroll);
});

function scroll(e) {
    if (typeof Element.prototype.scrollIntoView == "function") {
        if (typeof e !== "undefined") {
            e.preventDefault();
        }
        document.getElementById(location.hash.replace("#", "")).scrollIntoView({
            behavior: "smooth",
        });
    }
}

scroll();
