function valideEmail() {
    const email = document.getElementById('email').value;
    const validEmail = document.querySelector('.validEmail');
    const unvalidEmail = document.querySelector('.emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        validEmail.textContent = "Valid Email!"
    } else{
        unvalidEmail.textContent ="Check Your Email Please !"
    }
}