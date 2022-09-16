// DARK MODE SCRIPT
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
};
// DARK MODE SCRIPT

// NAV BAR SCRIPT
let openNav = document.querySelector('#hidden-nav');

function opnNav(){
    if (openNav.style.display == 'none'){
        openNav.style.display = 'flex'
    } else{
        openNav.style.display = 'none'
    }
}
// NAV BAR SCRIPT


// ABOUT HEAD TAGS

let tabLinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function openTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}
// ABOUT HEAD TAGS