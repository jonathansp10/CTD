const inputNameRef = document.querySelector('#inputName');
const inputSurnameRef = document.querySelector('#inputSurname');
const inputEmailRef = document.querySelector('#inputEmail');
const inputPasswordRef = document.querySelector('#inputPassword');
const buttomCreateRef = document.querySelector('#buttonCreate');


var formErrors = {
    inputEmail: true,
    inputPassword: true,
    
    
}

function checkFormValidity() {

    const formErrorsArray = Object.values(formErrors)

    const formValidity = formErrorsArray.every(item => item === false)

    buttomCreateRef.disabled = !formValidity

    

}

function validateInput(inputRef) {

    const inputValid = inputRef.checkValidity()

    const elementFatherRef = inputRef.parentElement

    if(inputValid) {

        elementFatherRef.classList.remove('error')

    } else {

        elementFatherRef.classList.add('error')

    }

    formErrors[inputRef.id] = !inputValid

    checkFormValidity()

    console.log()

}

function cadastro(event) {

    event.preventDefault()

    console.log()   

}

inputNameRef.addEventListener('keyup', () => validateInput(inputNameRef));
inputSurnameRef.addEventListener('keyup', () => validateInput(inputSurnameRef));
inputEmailRef.addEventListener('keyup', () => validateInput(inputEmailRef));
inputPasswordRef.addEventListener('keyup', () => validateInput(inputPasswordRef));
buttomCreateRef.addEventListener('click', (event) => cadastro(event))
