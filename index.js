document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    clearErrors();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");
    let gender = document.querySelector("input[name='gender']:checked");
    let profession = document.getElementById("profession");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let agreement = document.getElementById("agreement");

    if (!name.validity.valid) {
        name.classList.add("error");
        document.getElementById("name-error").textContent = name.validationMessage;
    }

    if (!email.validity.valid) {
        email.classList.add("error");
        document.getElementById("email-error").textContent = email.validationMessage;
    }

    if (!age.validity.valid) {
        age.classList.add("error");
        document.getElementById("age-error").textContent = age.validationMessage;
    }

    if (!gender) {
        document.getElementById("gender-error").textContent = "Пожалуйста, выберите пол.";
    }

    if (profession.value === "") {
        profession.classList.add("error");
        document.getElementById("profession-error").textContent = "Пожалуйста, выберите профессию.";
    }

    if (!password.validity.valid) {
        password.classList.add("error");
        document.getElementById("password-error").textContent = password.validationMessage;
    }

    if (!confirmPassword.validity.valid) {
        confirmPassword.classList.add("error");
        document.getElementById("confirmPassword-error").textContent = confirmPassword.validationMessage;
    }

    if (!agreement.checked) {
        document.getElementById("agreement-error").textContent = "Вы должны согласиться на обработку данных.";
    }

    if (name.validity.valid && email.validity.valid && age.validity.valid && gender && profession.value !== "" && password.validity.valid && confirmPassword.validity.valid && agreement.checked) {
        console.log("Имя:", name.value);
        console.log("Email:", email.value);
        console.log("Возраст:", age.value);
        console.log("Пол:", gender.value);
        console.log("Профессия:", profession.value);
        console.log("Пароль:", password.value);
        console.log("Повтор пароля:", confirmPassword.value);

        clearForm();
    }
}

function clearErrors() {
    let inputs = document.querySelectorAll("input");
    let errorMessages = document.querySelectorAll(".error-message");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error");
    }

    for (let j = 0; j < errorMessages.length; j++) {
        errorMessages[j].textContent = "";
    }
}

function clearForm() {
    document.getElementById("registrationForm").reset();
}

let inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function (event) {
        let input = event.target;

        if (input.validity.valid) {
            input.classList.remove("error");
            document.getElementById(input.id + "-error").textContent = "";
        } else {
            input.classList.add("error");
            document.getElementById(input.id + "-error").textContent = input.validationMessage;
        }
    });
}