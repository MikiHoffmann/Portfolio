// MOBILE MENU
function openMobileMenu() {
    document.getElementById("menuOverlay").style.height = "100%";
}

function closeMobileMenu() {
    document.getElementById("menuOverlay").style.height = "0%";
}

// TO TOP BUTTON
var topButton = document.getElementById("toTopButton");
// SHOW BUTTON
window.onscroll = function() {scrollFunction()}; 
    function scrollFunction() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.width = "50px";
        topButton.style.height = "50px";
    }
    else {
        topButton.style.width = "0px";
        topButton.style.height = "0px";
    }
}
// TO TOP
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// NAVIGATION RESUME
// SCHOOL
function openSchool() {
    document.getElementById("school").style.height = "100%";
}   
function closeSchool() {
    document.getElementById("school").style.height = "0%";
}
// WORK
function openWork() {
    document.getElementById("work").style.height = "100%";
}   
function closeWork() {
    document.getElementById("work").style.height = "0%";
}
// LAPTOPSKILLS
function openLaptopSkills() {
    document.getElementById("laptopSkills").style.height = "100%";
}   
function closeLaptopSkills() {
    document.getElementById("laptopSkills").style.height = "0%";
}
// PERSONALITY
function openPersonality() {
    document.getElementById("personality").style.height = "100%";
}   
function closePersonality() {
    document.getElementById("personality").style.height = "0%";
}
// SKILLS
function openSkills() {
    document.getElementById("skills").style.height = "100%";
}   
function closeSkills() {
    document.getElementById("skills").style.height = "0%";
}
// LANGUAGES
function openLanguages() {
    document.getElementById("languages").style.height = "100%";
}   
function closeLanguages() {
    document.getElementById("languages").style.height = "0%";
}
// IFRAME
function openIFrame() {
    document.getElementById("iFramePage").style.height = "100%";
}
function closeIFrame() {
    document.getElementById("iFramePage").style.height = "0%";
}