// add js here

const form = document.querySelector("form");

const termsInput = document.querySelector("#terms");

const passwordInput = document.querySelector("#password");

const passwordConfirm = document.querySelector("#confirm");

const errorMessage = document.querySelector(".pink-error-message");

const confirmOutline = document.querySelector("#confirm");

function clearErrors() {
    errorMessage.classList.remove("error-visible");
    passwordInput.classList.remove("red-outline");
    confirmOutline.classList.remove("red-outline");
}

function getPasswordSuggestion() {
    const passwordWordSuggestion = 4;

    let nouns = [
        'cat',
        'dog',
        'rabbit',
        'bear',
        'lion',
        'tiger'
    ]

    let passwordFull = []
    for (let i = 0; i < passwordWordSuggestion; i++) {
        let noun = nouns[Math.round(Math.random() * (nouns.length-1))];
        passwordFull.push(noun);
    }

    return passwordFull.join('-');
}

form.addEventListener('submit', function(event) {
    clearErrors();
    
    event.preventDefault() // prevents default action of an element
    if (!termsInput.checked) {
        alert("You must agree to the terms of service.");
        return;
    }

    if (passwordInput.value.length < 10) {
        errorMessage.classList.add("error-visible");
        let passwordSuggestion = getPasswordSuggestion();
        errorMessage.innerText = (`Your password is too short! Please provide a password that is at least 10 characters long. How about "${passwordSuggestion}"?`)
        passwordInput.classList.add("red-outline");
        return;

    } else if (passwordInput.value !== passwordConfirm.value) {
        errorMessage.classList.add("error-visible");
        errorMessage.innerText = ("Your passwords don't match.")
        confirmOutline.classList.add("red-outline");
        return;
    }

    alert("Success!");
});




