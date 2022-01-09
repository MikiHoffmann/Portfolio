// NAVIGATION
function openSidePanel() {
    document.getElementById("overlayMenu").style.width = "100%";
}   
function closeSidePanel() {
    document.getElementById("overlayMenu").style.width = "0%";
}
// TO TOP BUTTON
var topButton = document.getElementById("toTopButton");
// SHOW BUTTON
window.onscroll = function() {scrollFunction()}; 
    function scrollFunction() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.width="3em";
    }
    else {
        topButton.style.width="0em";
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
    document.getElementById("school").style.height = "90%";
}   
function closeSchool() {
    document.getElementById("school").style.height = "0%";
}
// WORK
function openWork() {
    document.getElementById("work").style.height = "90%";
}   
function closeWork() {
    document.getElementById("work").style.height = "0%";
}
// LAPTOPSKILLS
function openLaptopSkills() {
    document.getElementById("laptopSkills").style.height = "90%";
}   
function closeLaptopSkills() {
    document.getElementById("laptopSkills").style.height = "0%";
}
// PERSONALITY
function openPersonality() {
    document.getElementById("personality").style.height = "90%";
}   
function closePersonality() {
    document.getElementById("personality").style.height = "0%";
}
// SKILLS
function openSkills() {
    document.getElementById("skills").style.height = "90%";
}   
function closeSkills() {
    document.getElementById("skills").style.height = "0%";
}
// LANGUAGES
function openLanguages() {
    document.getElementById("languages").style.height = "90%";
}   
function closeLanguages() {
    document.getElementById("languages").style.height = "0%";
}
// CONTACT
function showMailTo() {
    if(mailTo.style.display === "block") {
    document.getElementById("mailTo").style.display = "none";
    }
    else {document.getElementById("mailTo").style.display = "block";}
}
function showPhoneMe() {
    if(phoneMe.style.display === "block") {
    document.getElementById("phoneMe").style.display = "none";
    }
    else {document.getElementById("phoneMe").style.display = "block";}
}
// IFRAME
function openIFrame() {
    document.getElementById("iFramePage").style.width = "100%";
}
function closeIFrame() {
    document.getElementById("iFramePage").style.width = "0%";
}
