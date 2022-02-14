window.addEventListener("pageshow", () => {
    var inputName = document.querySelector('#inputName');
    var inputPhone = document.querySelector('#inputPhone');
    var inputPassword = document.querySelector('#inputPassword');
    var inputEmail = document.querySelector('#inputEmail');
    var inputBirthday = document.querySelector("#inputBirthday");
    var inputCheckTerms = document.querySelector("#checkTerms");

    inputName.value = ""
    inputPhone.value = ""
    inputPassword.value = ""
    inputEmail.value = ""
    inputBirthday.value = ""
    inputCheckTerms.checked = false;
});

var botaoAdicionar = document.querySelector("#register");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var inputName = document.querySelector('#inputName').value;
    var inputPhone = document.querySelector('#inputPhone').value;
    var inputPassword = document.querySelector('#inputPassword').value;
    var inputEmail = document.querySelector('#inputEmail').value;
    var inputBirthday = document.querySelector("#inputBirthday").value;
    var inputCheckTerms = document.querySelector("#checkTerms").checked;

    if (
        validName(inputName)
        & validPhone(inputPhone)
        & validPassword(inputPassword)
        & validEmail(inputEmail)
        & validBirthday(inputBirthday)
        & validTerms(inputCheckTerms)
    ) location.href = 'sucess.html';

});

function validName(name) {
    var pattern = /^((([a-z]|[à-ü])+)[\s])+([a-z]|[à-ü])+$/i;
    var labelFeedbackValidation = document.querySelector("#feedbackName");

    if (name.match(pattern)) {
        labelFeedbackValidation.classList.add("invisible");
        return true;
    }

    labelFeedbackValidation.classList.remove("invisible");
    return false;
}

function validPhone(phone) {
    var pattern = /^[0-9]{11}$/;
    var labelFeedbackValidation = document.querySelector("#feedbackPhone");

    if (phone.match(pattern)) {
        labelFeedbackValidation.classList.add("invisible");
        return true;
    }

    labelFeedbackValidation.classList.remove("invisible");
    return false;
}

function validPassword(password) {
    var pattern = /^[0-9]{6,8}$/;
    var labelFeedbackValidation = document.querySelector("#feedbackPassword");

    if (password.match(pattern)) {
        labelFeedbackValidation.classList.add("invisible");
        return true;
    }

    labelFeedbackValidation.classList.remove("invisible");
    return false
}

function validEmail(email) {
    var pattern = /^(([a-z]|[0-9])+[.]?)+([a-z]|[0-9])+[@]([a-z]|[0-9])+[.]com$/i;
    var labelFeedbackValidation = document.querySelector("#feedbackEmail");

    if (email.match(pattern)) {
        labelFeedbackValidation.classList.add("invisible");
        return true;
    }

    labelFeedbackValidation.classList.remove("invisible");
    return false;
}

function validBirthday(birthday) {
    var labelFeedbackValidation = document.querySelector("#feedbackBirthday");

    if (birthday) {
        labelFeedbackValidation.classList.add("invisible");
        return true;
    }

    labelFeedbackValidation.classList.remove("invisible");
    return false;
}

function validTerms(checked) {
    var labelFeedbackValidation = document.querySelector("#feedbackTerms");

    if (checked) {
        labelFeedbackValidation.classList.add("invisible");
        return true;
    }

    labelFeedbackValidation.classList.remove("invisible");
    return false;
}