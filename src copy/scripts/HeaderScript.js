import headerStyles from '../components/Header.module.css';
import navStyles from '../components/Navbar.module.css';

let logo;  // logo to hide
let bgColor, textColor, hoverTextColor;

export function headerChangeOnScroll() {
    // get the scroll position
    let scrollPos = window.scrollY;
    if (scrollPos > 5) {
        logo = "black";
        bgColor = "#784390";
        textColor = "#fffcf7";
        hoverTextColor = "#ede6da";
    } else {
        logo = "white";
        bgColor = "#fffcf7";
        textColor = "#784390";
        hoverTextColor = "#29104e";
    }
    transitionHeader();
    navBtnChangeOnHover();

    window.addEventListener("scroll", (e) => {
        let scrollPos = window.scrollY;
        if (scrollPos > 5) {
            logo = "black";
            bgColor = "#784390";
            textColor = "#fffcf7";
            hoverTextColor = "#ede6da";
        } else {
            logo = "white";
            bgColor = "#fffcf7";
            textColor = "#784390";
            hoverTextColor = "#29104e";
        }
        transitionHeader();
        navBtnChangeOnHover();
    })

}

export function navBtnChangeOnHover() {
    let interval;
    const navBtns = document.querySelectorAll("nav a");

    navBtns.forEach((element) => {
        element.style.color = textColor;
        element.style.textShadow = "-0.5px -0.1px 0.8px " + hoverTextColor;

        element.addEventListener("mouseover", (e) => {
            interval = setInterval(() => {
                element.style.color = hoverTextColor;
                element.style.textShadow = "-0.5px -0.1px 0.8px " + hoverTextColor;
            }, 100)
        });

        element.addEventListener("mouseleave", (e) => {
            element.style.color = textColor;
            element.style.textShadow = "-0.5px -0.1px 0.8px " + hoverTextColor;
            clearInterval(interval);
        });
    });
}

/**
 * pathname will be either:
 * /home /events /about /connect
 * default to home
 */
export function selectNavBtn(pathname) {
    const navBtns = document.querySelectorAll("nav a");

    // remove current selected
    navBtns.forEach((element) => {
        element.classList.remove(`${navStyles.selected}`);
    });

    let el;
    switch (pathname) {
        case "/events":
            el = document.getElementById('events');
            break;
        case "/about":
            el = document.getElementById('about');
            break;
        case "/connect":
            el = document.getElementById('connect');
            break;
        default:
            el = document.getElementById('home');

    }

    el.classList.add(`${navStyles.selected}`);
}

// helper functions
function transitionHeader() {
    // change header background
    const headerEl = document.querySelector("header");
    headerEl.style.backgroundColor = bgColor;

    // change logo
    const logos = document.querySelectorAll(".logo");
    logos.forEach((element) => {  // remove the none class
        element.classList.remove(`${headerStyles.none}`);
    })

    // hide opposite logo
    const hiddenLogo = document.getElementById(`${logo}Logo`);
    hiddenLogo.classList.add(`${headerStyles.none}`);


    // change nav btns
    const navBtns = document.querySelectorAll("nav a");
    navBtns.forEach((element) => {
        element.style.color = textColor;
    });
}