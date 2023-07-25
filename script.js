const button = document.querySelector(".btn");
const passwordField = document.querySelector("#password-area");
const buttonTwo = document.querySelector(".btn-2");

button.addEventListener("click", ()=>{
    const allowed = {
        uppers: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowers: "abcdefghijklmnopqrstuvwxyz",
        numbers: "1234567890",
        symbols: "!@#$%^&*"
    };

    const randomPassword = (str) => str.charAt(Math.floor(Math.random() * str.length));

    const generatePassword = (length = 10) =>{
        let password = "";

        password += randomPassword(allowed.uppers);
        password += randomPassword(allowed.lowers);
        password += randomPassword(allowed.numbers);
        password += randomPassword(allowed.symbols);

        for(let i = password.length; i<length; i++){
            password += randomPassword(Object.values(allowed).join(" "));
        }
        return password;
    }
    var password = generatePassword();

    passwordField.value = password;

});

buttonTwo.addEventListener("click", ()=>{
    passwordField.value= "";
})