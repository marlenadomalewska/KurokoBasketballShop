myStorage = localStorage;
//localStorage.clear();
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
    // if(localStorage.getItem("isLoggedIn") == true){
    //     logowanie.innerText = "Witaj, " + localStorage.getItem("Login");

    //     logowanie.addEventListener('click', function(){
    //         //location.href = "Login.html"
    //         localStorage.setItem("isLoggedIn", false);

    //     });
    // }

    // iloscKoszyk.innerText = "Koszyk: "+ localStorage.getItem(Cart);

    window.addEventListener('DOMContentLoaded', function(){
        
        iloscKoszyk.innerText = "Koszyk: "+ localStorage.getItem("Cart");

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