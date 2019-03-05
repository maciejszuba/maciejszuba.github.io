let dialogueCloud = document.getElementsByClassName("comic-cloud");
let backButton = document.getElementById("back-button");
let categoriesContent = document.querySelectorAll(" .profile>ul.skills, .profile>ul.interests, .profile>ul.experience, .profile>ul.contact");
let dialogueOptions = document.querySelectorAll(".profile>ul.skills>li, .profile>ul.experience>li, .profile>ul.interests>li, .profile>ul.contact>li");
let linkSvgs = document.querySelectorAll(".profile>ul.contact>li>svg");
//This variable will store identify the interval timeout
let lastDialogueBeingTyped;
const mobileMediaQuery = window.matchMedia("(max-width: 800px");
mobileMediaQuery.addListener(setInterfaceBasedOnWidth);
mobileMediaQuery.addListener(clearDialogueOptionsOnDesktop);

init();

function init() {
    setInterfaceBasedOnWidth(mobileMediaQuery);
    setSkillsDialogues();
    setExperienceDialogues();
    setInterestsDialogues();
    selectDialogueOption();
    setLinksVisible();
}

function displayIntro() {
    typeWritingAnimate("HELLO! LET ME TELL YOU SOMETHING ABOUT MYSELF...");
}

function setInterfaceBasedOnWidth(mql) {
    if (mql.matches) {
        removeDesktopListeners();
        clearWhenResized()
        document.getElementById("my-skills").addEventListener("click", setSkillsDialogueInterfaceWhenMobile);
        document.getElementById("my-experience").addEventListener("click", setExperienceDialogueInterfaceWhenMobile);
        document.getElementById("my-interests").addEventListener("click", setInterestsDialogueInterfaceWhenMobile);
        document.getElementById("my-links").addEventListener("click", setContactDialogueInterfaceWhenMobile);
    } else {
        removeMobileListeners();
        clearWhenResized();
        goBackInMobile();
        document.getElementById("my-skills").addEventListener("click", setSkillsDialogueInterfaceWhenDesktop);
        document.getElementById("my-experience").addEventListener("click", setExperienceDialogueInterfaceWhenDesktop);
        document.getElementById("my-interests").addEventListener("click", setInterestsDialogueInterfaceWhenDesktop);
        document.getElementById("my-links").addEventListener("click", setContactDialogueInterfaceWhenDesktop);
    }
}

function setDialogues(nodeList, idList, dialogueList) {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener("click", function () {
            if (nodeList[i].id === idList[i]) {
                typeWritingAnimate(dialogueList[i]);
            }
        })
    }
}

function selectDialogueOption(){
    for (let i = 0; i < dialogueOptions.length; i++) {
        dialogueOptions[i].addEventListener("click", function(e){
          for (let j = 0; j < dialogueOptions.length; j++) {
             if (!dialogueOptions[j].classList.contains("not-selected")){
                dialogueOptions[j].classList.add("not-selected");
             } 
          } dialogueOptions[i].classList.remove("not-selected");
        })
    }
}

function setSkillsDialogues() {
    setDialogues(document.querySelectorAll("ul.skills>li>svg"),
        ["html", "css", "js", "android", "ux"],
        ["UNDERSTANDING HTML STRUCTURE IS A VERY IMPORTANT BASIC SKILL THAT ALLOWS FOR EFFICIENT STYLING.",
            "CSS IS MY FAVOURITE PART OF FRONT-END DEVELOPMENT. WHEN CODING, I TRY TO MAXIMIZE ITS POTENTIAL.",
            "I FEEL COMFORTABLE WITH JAVASCRIPT AND I RECENTLY STARTED LEARNING REACT.",
            "ANDROID DEVELOPMENT IS HOW I STARTED MY PROGRAMMING CAREER.",
            "I LOVE UX DESIGN AND I LIKE TO THINK ABOUT PURPOSES OF TECHNOLOGY."]
    )
}

function setExperienceDialogues() {
    setDialogues(document.querySelectorAll("ul.experience>li>svg"),
        ["portfolio", "ux-intern", "android-jr-dev"],
        ["SINCE 07.2018 I'VE BEEN WORKING ON MY UX AND FRONT-END PORTFOLIO.",
            "I DID A BRIEF UX INTERNSHIP IN 11.2018 DURING WHICH I PREPARED UX GUIDANCE FOR A YOGA STARTUP.",
            "I WORKED AS A JUNIOR ANDROID DEVELOPER FROM 07.2017 TO 03.2018 ON A SHIPPING APP."]
    );
}


function setInterestsDialogues() {
    setDialogues(document.querySelectorAll("ul.interests>li>svg"),
        ["skateboard-icon", "web-icon", "music-icon", "dog-icon"],
        ["I LIKE FREESTYLE SKATEBOARDING! DO YOU KNOW RODNEY MULLEN?",
            "I LIKE WEB AND FRONT-END! SOMETIMES I FEEL LIKE A HACKER.",
            "I LISTEN TO LOTS OF MUSIC! WHAT'S YOUR FAVOURITE BAND?",
            "I LOVE DOGS, THEY ALWAYS MAKE ME SMILE! AND YOU?"]);
}

function setSkillsDialogueInterfaceWhenMobile() {
    clearElementsOnMobile();
    document.getElementsByClassName("main-menu")[0].style.display = "none";
    document.getElementById("cv").style.display = "none";
    document.getElementsByClassName("skills")[0].style.display = "flex";
    backButton.style.display = "block";
    typeWritingAnimate("HERE ARE MY SKILLS. WANT TO KNOW MORE?");
}

function setSkillsDialogueInterfaceWhenDesktop() {
    clearElementsOnDesktop();
    document.getElementsByClassName("skills")[0].style.display = "flex";
    typeWritingAnimate("HERE ARE MY SKILLS. WANT TO KNOW MORE?");
}

function setExperienceDialogueInterfaceWhenMobile() {
    clearElementsOnMobile();
    document.getElementsByClassName("main-menu")[0].style.display = "none";
    document.getElementById("cv").style.display = "none";
    document.getElementsByClassName("experience")[0].style.display = "grid";
    backButton.style.display = "block";
    typeWritingAnimate("HERE'S MY PROFESSIONAL EXPERIENCE. WANT TO KNOW MORE?");
}

function setExperienceDialogueInterfaceWhenDesktop() {
    clearElementsOnDesktop();
    document.getElementsByClassName("experience")[0].style.display = "flex";
    typeWritingAnimate("HERE'S MY PROFESSIONAL EXPERIENCE. WANT TO KNOW MORE?");
}

function setInterestsDialogueInterfaceWhenMobile() {
    clearElementsOnMobile();
    document.getElementsByClassName("main-menu")[0].style.display = "none";
    document.getElementById("cv").style.display = "none";
    document.getElementsByClassName("interests")[0].style.display = "flex";
    backButton.style.display = "block";
    typeWritingAnimate("HERE ARE MY HOBBIES. WANT TO KNOW MORE?");
}

function setInterestsDialogueInterfaceWhenDesktop() {
    clearElementsOnDesktop();
    document.getElementsByClassName("interests")[0].style.display = "flex";
    typeWritingAnimate("HERE ARE MY HOBBIES. WANT TO KNOW MORE?");
}

function setContactDialogueInterfaceWhenMobile() {
    clearElementsOnMobile();
    document.getElementsByClassName("main-menu")[0].style.display = "none";
    document.getElementById("cv").style.display = "none";
    document.getElementsByClassName("contact")[0].style.display = "flex";
    backButton.style.display = "block";
    typeWritingAnimate("HEY! SEND ME A MESSAGE AND LET'S CONNECT!");
}

function setContactDialogueInterfaceWhenDesktop() {
    clearElementsOnDesktop();
    document.getElementsByClassName("contact")[0].style.display = "flex";
    typeWritingAnimate("HEY! SEND ME A MESSAGE AND LET'S CONNECT!");
}

function removeDesktopListeners() {
    document.getElementById("my-skills").removeEventListener("click", setSkillsDialogueInterfaceWhenDesktop);
    document.getElementById("my-experience").removeEventListener("click", setExperienceDialogueInterfaceWhenDesktop);
    document.getElementById("my-interests").removeEventListener("click", setInterestsDialogueInterfaceWhenDesktop);
    document.getElementById("my-links").removeEventListener("click", setContactDialogueInterfaceWhenDesktop);
}

function removeMobileListeners() {
    document.getElementById("my-skills").removeEventListener("click", setSkillsDialogueInterfaceWhenMobile);
    document.getElementById("my-experience").removeEventListener("click", setExperienceDialogueInterfaceWhenMobile);
    document.getElementById("my-interests").removeEventListener("click", setInterestsDialogueInterfaceWhenMobile);
    document.getElementById("my-links").removeEventListener("click", setContactDialogueInterfaceWhenMobile);
}

function clearWhenResized(){
    for (let i = 0; i < categoriesContent.length; i++) {
            if (typeof categoriesContent[i] !== "undefined") {
                categoriesContent[i].style.display = "none";
            }
    }
}

function setLinksVisible() {   
    for (let i = 0; i < linkSvgs.length; i++) {
        linkSvgs[i].addEventListener("click", function (e) {
            for (let index = 0; index < linkSvgs.length; index++) {
                if (linkSvgs[index].classList.contains("display-it-as-block")) {
                    if (e.currentTarget !== linkSvgs[index]) {
                        linkSvgs[index].classList.remove("display-it-as-block");
                    }
                }
            }
            e.currentTarget.classList.toggle("display-it-as-block");
        })
    }
}

function copyEmail() {
    document.querySelector("#mail-link>textarea").select();
    document.execCommand('copy');
    document.getElementById("checkmark").style.display = "block";
}

function goBackInMobile(){
    document.getElementsByClassName("main-menu")[0].style.display = "flex";
    document.getElementById("cv").style.display = "block";
    document.getElementsByClassName("interests")[0].style.display = "none";
    document.getElementsByClassName("experience")[0].style.display = "none";
    document.getElementsByClassName("skills")[0].style.display = "none";
    document.getElementsByClassName("contact")[0].style.display = "none";
    clearContactTooltips();
    backButton.style.display = "none";
    typeWritingAnimate("HELLO! LET ME TELL YOU SOMETHING ABOUT MYSELF...");
}

function clearElementsOnMobile(){
    clearDialogueOptionSelection()
    clearEmailCheckmark();
}

function clearElementsOnDesktop(){
    clearDialogueOptionSelection()
    clearDialogueOptionsOnDesktop();
    clearContactTooltips();
    clearEmailCheckmark();
}

function clearDialogueOptionSelection(){
    for (let i = 0; i < dialogueOptions.length; i++) {
        dialogueOptions[i].classList.remove("not-selected");
    }
}

function clearDialogueOptionsOnDesktop() {
    for (let i = 0; i < categoriesContent.length; i++) {
        if (typeof categoriesContent[i] !== "undefined" && categoriesContent[i].style.display == "flex"){
            categoriesContent[i].style.display = "none";
        }
    }
}

function clearContactTooltips(){
    for (let i = 0; i < linkSvgs.length; i++) {
        if (typeof linkSvgs[i] !== "undefined" && linkSvgs[i].classList.contains("display-it-as-block")){
            linkSvgs[i].classList.remove("display-it-as-block");
        }
    }
}

function clearEmailCheckmark(){
    document.getElementById("checkmark").style.display = "none";
}


function typeWritingAnimate(dialogue) {
    // amazing, thanks Juan forever
    clearTimeout(lastDialogueBeingTyped);
    StartTextAnimation(0)

    function StartTextAnimation(i) {
    
        typeWriter(dialogue, 0, function () {
            StartTextAnimation(i + 1);
        });
       
    }
    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            dialogueCloud[0].innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            lastDialogueBeingTyped = setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 40);
        }
    }
}

