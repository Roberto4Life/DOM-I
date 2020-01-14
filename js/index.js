const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let bigLogo = document.getElementById("cta-img");
bigLogo.setAttribute('src', siteContent["cta"]["img-src"]);

let navi = document.querySelectorAll("a");
navi.forEach((element, index) => element.textContent = siteContent["nav"][`nav-item-${index+1}`]);

let middlePic = document.getElementById("middle-img");
middlePic.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let headerText = document.querySelector("h1");
headerText.textContent = (siteContent["cta"]["h1"]);

let headerButton = document.querySelector("button");
headerButton.textContent = (siteContent["cta"]["button"]);

// let mainFour = document.getElementsByTagName("h4");
// console.log(mainFour);
// mainFour.forEach((element, index) => element.textContent = siteContent["main-content"][`${index+1}-h4`]);

// let xon = document.querySelectorAll("h4");
// xon.forEach(element => element.textContent = siteContent["main-content"]["features-h4"]);

// let links = document.querySelectorAll('a')

// links.textContent[0] = siteContent["nav"]["nav-item-1"];

let featuresHead = document.querySelector(".top-content .text-content h4");
featuresHead.textContent = (siteContent["main-content"]["features-h4"]);

let featuresp = document.querySelector(".top-content .text-content p");
featuresp.textContent = (siteContent["main-content"]["features-content"]);

let featuresHeadDos = document.querySelector(".top-content .text-content:nth-child(2) h4");
featuresHeadDos.textContent = (siteContent["main-content"]["about-h4"]);

let featurespDos = document.querySelector(".top-content .text-content:nth-child(2) p");
featurespDos.textContent = (siteContent["main-content"]["about-content"]);
//bottom
let bottomServices = document.querySelector(".bottom-content .text-content h4");
bottomServices.textContent = (siteContent["main-content"]["services-h4"]);

let bottomp = document.querySelector(".bottom-content .text-content p");
bottomp.textContent = (siteContent["main-content"]["services-content"]);

let bottomProduct = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
bottomProduct.textContent = (siteContent["main-content"]["product-h4"]);

let bottomVision = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
bottomVision.textContent = (siteContent["main-content"]["vision-h4"]);

let bottomPp= document.querySelector(".bottom-content .text-content:nth-child(2) p");
bottomPp.textContent = (siteContent["main-content"]["product-content"]);

let bottomVp = document.querySelector(".bottom-content .text-content:nth-child(3) p");
bottomVp.textContent = (siteContent["main-content"]["vision-content"]);
//final
let bottomContact = document.querySelector(".contact h4");
bottomContact.textContent = (siteContent["contact"]["contact-h4"]);

let bottomAd = document.querySelector('.contact p');
bottomAd.textContent = siteContent.contact["address"];

let bottomPhone = document.querySelector('.contact p:nth-child(3)');
bottomPhone.textContent = siteContent.contact["phone"];

let bottomMail = document.querySelector('.contact p:nth-child(4)');
bottomMail.textContent = siteContent.contact["email"];

//footer
let footerText = document.querySelector("footer");
footerText.textContent = (siteContent["footer"]["copyright"])

Array.from(navi).forEach((navi) => {
  navi.style.color = "lightgreen"
})

const newContent = document.createElement("textBox");
newContent.textContent = "Leave";
const parentElement = document.querySelector('nav');
parentElement.append(newContent);

const newContenty = document.createElement("textCrate");
newContenty.textContent = "Stay";
const parentElementy = document.querySelector('nav');
parentElementy.prepend(newContenty)