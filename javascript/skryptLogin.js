myStorage = localStorage;
if(window.localStorage.length == 0){
    localStorage.setItem("Login", "Klient"); //login
    localStorage.setItem("Password","abcd123"); //hasło

    localStorage.setItem("magazynS", 320); //stan magazynowy S
    localStorage.setItem("magazynM", 200); //stan magazynowy M
    localStorage.setItem("magazynL", 15); //stan magazynowy L
    localStorage.setItem("isLoggedIn", false); //czy użytkownik jest zalogowany
    localStorage.setItem("Cart",0); //ogólna ilość w koszyku
    localStorage.setItem("CartS",0); //ilość piłek S w koszyku
    localStorage.setItem("CartM",0); //ilość piłek M w koszyku
    localStorage.setItem("CartL",0); //ilość piłek L w koszyku
}
(function(){

     
    var logowanie = document.querySelector("#logowanie");
    var iloscKoszyk = document.querySelector("#iloscKoszyk");

    var button = document.querySelector("#buttonLogin");
    var badLogin = document.querySelector("#badLogin");

    button.addEventListener('click', function(){
        // if( (login.innerText).localeCompare(localStorage.getItem("Login")) && (haslo.innerText).localeCompare(localStorage.getItem("Password"))){
        //     localStorage.setItem("isLoggedIn", true);
        //     location.href = "Cart.html";
        // }
        //var login = document.querySelector("#exampleFormControlInput1").nodeValue;
        //var haslo = document.querySelector("#inputPassword").nodeValue;
        //var login = document.getElementById('exampleFormControlInput1');
        //var haslo = document.getElementById('inputPassword');

        var login = document.getElementsByClassName('form-control')[0].value;
        var haslo = document.getElementsByClassName('form-control')[1].value;
        if(login == localStorage.getItem("Login") && haslo == localStorage.getItem("Password")){
            localStorage.setItem("isLoggedIn", true);
             location.href = "Cart.html";
        }
        else{
            badLogin.innerText = "Zły login lub hasło!"

        }

    });

    

    window.addEventListener('DOMContentLoaded', function(){
        localStorage.setItem("isLoggedIn", false);
        //bycie na tej stronie automatycznie wylogowuje
        iloscKoszyk.innerText = "Koszyk: "+ localStorage.getItem("Cart");
        badLogin.innerText = "";

        if(localStorage.getItem("isLoggedIn") == "true"){
            logowanie.innerText = "Witaj, " + localStorage.getItem("Login")+". Kliknij, aby wylogować";
    
            logowanie.addEventListener('click', function(){
                //location.href = "Login.html"
                localStorage.setItem("isLoggedIn", false);
    
            });
        }
        else if(localStorage.getItem("isLoggedIn") == "false"){
            logowanie.innerText = "Logowanie";
        }
    });
})();