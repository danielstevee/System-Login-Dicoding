/*Elemen DOM*/
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/*Kredensial Akun Admin*/
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/*Event Listener Form Login*/
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    /**Value untuk menangkap isian teks dari html nya 
     * InputEmailElement & inputPasswordElement adalah DOM nya
    */
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    //Validasi Login 
    if (email == expectedEmail && password == expectedPassword){
      goToHome() 
    }else{
      showPopUp() 
    }
});
