// Import our custom CSS
import './src/scss/styles.scss'; 
import { formDataObj } from "./src/nested/forms/formData";
const app = document.createElement("div");
const searchFormDiv = document.getElementById("appForm");
searchFormDiv.append(app);
var currentPage;

function getPageContent(page) {
    var contentToReturn;
    currentPage = page;
    switch (page) {
        case 'home':
            contentToReturn = formDataObj.home;
            break;
        case 'profile':
            contentToReturn = formDataObj.profile;
            break;
        case 'activity':
            contentToReturn = formDataObj.activity;
            break;
        default:
            contentToReturn = formDataObj.home;
            break;
    }
    app.innerHTML = contentToReturn;

    if (currentPage == "home") {
        try {
            var gotoprofile = document.getElementById("gotoprofile");
            gotoprofile.addEventListener("click", (e) => {
                e.preventDefault();
                getPageContent('profile');
            });
        } catch {
            console.log("gotoprofile not found ");
        }
    }

    if (currentPage == "profile") {
        try {
            var submitFirstCheck = document.getElementById("submitFirstCheck");
            submitFirstCheck.addEventListener("click", (e) => {
                e.preventDefault();
                getPageContent('activity');
            });
        } catch {
            console.log("activity not found ");
        }
    }

    if (currentPage == "activity") {
        try {
            var submitButton = document.getElementById("submitButton");
            submitButton.addEventListener("click", (e) => {
                e.preventDefault();
                getPageContent('home');
            });
        } catch {
            console.log("home not found ");
        }
    }
}

function initPage() {
    getPageContent('home');
}

initPage();


