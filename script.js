function toggleMenu() {

    let menu = document.getElementById("sideMenu");

    if (menu.style.width === "280px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "280px";
    }

}

window.onscroll = function () {

    let btn = document.getElementById("topBtn");

    if (!btn) return;

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        btn.style.display = "block";

    } else {

        btn.style.display = "none";

    }

};

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}