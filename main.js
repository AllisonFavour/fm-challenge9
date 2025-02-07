const mainElement = document.querySelector('main');
const form = document.getElementById('js-form');
const popUpMenu = document.getElementById('js-pop-up');
const closePopUp = document.getElementById('js-dismiss-popup');
const footer = document.querySelector('footer');
const input = document.querySelector('form input');
const errorText = document.getElementById('js-error-message');

// Email regex pattern for validation
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|io|co|uk)$/;

// Show validation error in real-time while typing
input.addEventListener('input', () => {
    validateEmail();
});

form.addEventListener('submit', handleForm);

function handleForm(e) {
    e.preventDefault();

    if (!validateEmail()) {
        return; // Stop form submission if email is invalid
    }

    // Hide the main page and show the pop-up
    mainElement.style.display = 'none';
    footer.style.display = 'none';
    popUpMenu.classList.add('show');

    // Clear the input field
    input.value = '';
}

// Function to validate email format
function validateEmail() {
    const email = input.value.trim();

    if (!emailPattern.test(email)) {
        errorText.innerText = 'Valid email required';
        errorText.style.display = 'block';
        input.style.border = '2px solid hsl(4, 100%, 67%)'; // Highlight error
        return false;
    }

    // If valid, remove error message
    errorText.style.display = 'none';
    input.style.border = '1px solid hsl(231, 7%, 60%)';
    document.getElementById('js-user-email').textContent = email;
    return true;
}

// Close the pop-up and restore the form
closePopUp.addEventListener('click', () => {
    popUpMenu.classList.remove('show');
    mainElement.style.display = 'block';
    footer.style.display = 'block';
});

// Dynamically update footer year
document.getElementById('js-footer-year').innerText = new Date().getFullYear();



// const mainElement = document.querySelector('main');
// const form = document.getElementById('js-form');
// const popUpMenu = document.getElementById('js-pop-up');
// const closePopUp = document.getElementById('js-dismiss-popup');
// const footer = document.querySelector('footer');
// let input = document.querySelector('form input');
// const errorText = document.getElementById('js-error-message');


// form.addEventListener('submit', handleForm);


// function handleForm(e) {
//     e.preventDefault();
//     const email = input.value.trim();
//     // console.log(email);

//     if (!email || email.length < 3 || !email.includes('@')) {
//         errorText.innerText = 'Valid email required';
//         errorText.style.display = 'block';
//         input.style.border = '1px solid red';
//         return;
//     }



//     errorText.style.display = 'none';
//     input.style.border = '1px solid grey';



//     mainElement.style.display = 'none';
//     footer.style.display = 'none';
//     popUpMenu.classList.add('show');
//     document.getElementById('js-user-email').textContent = email;


//     input.value = '';

// }

// closePopUp.addEventListener('click', () => {
//     popUpMenu.classList.remove('show');

//     mainElement.style.display = 'block';
//     footer.style.display = 'block';


// })

// // dynamically render and update footer year
// document.getElementById('js-footer-year').innerText = new Date().getFullYear();