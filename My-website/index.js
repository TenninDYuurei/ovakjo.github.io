let otherBtn = document.getElementById("other-btn");

let extraLink = document.querySelector(".extra-links");

let drpdwnMenu = document.getElementById("drop-down")

let navArea = document.getElementById("nav")

let contactBtn = document.getElementById("contact")

let contactSect = document.querySelector(".contact-section")

let cover = document.querySelector(".cover2")

otherBtn.onclick = function() {
    if (extraLink.style.display == "block") {
        extraLink.style.display = "none"
    }
    else{
        extraLink.style.display = "block"
    }
}

contactBtn.onclick = function () {
    if (contactSect.style.display == "grid") {
        contactSect.style.display = "none";
        cover.style.visibility = "hidden";
        return
    }

    contactSect.style.display = "grid";
    cover.style.visibility = "visible";

}

drpdwnMenu.onclick = function () {
    if (navArea.style.display == "block") {
        navArea.style.display = "none";
        return
    }
    navArea.style.display = "block";
}