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


    var dodajS = document.querySelector("#dodajS");

    dodajS.addEventListener('click', function(){
        
        if(parseInt(localStorage.getItem("CartS"),10) < parseInt(localStorage.getItem("magazynS"),10)){
            
            localStorage.setItem("CartS", parseInt(localStorage.getItem("CartS"),10)+1);
            
            localStorage.setItem("Cart", parseInt(parseInt(localStorage.getItem("CartS"),10)+parseInt(localStorage.getItem("CartM"),10)+parseInt(localStorage.getItem("CartL"),10), 10));
            
            iloscKoszyk.innerText = "Koszyk: "+ localStorage.getItem("Cart");

        }
    });

    
    var magazynS = document.querySelector("#magazynS");
    //magazynS.innerText = "Stan magazynowy: " + localStorage.getItem("magazynS");

    window.addEventListener('DOMContentLoaded', function(){
        magazynS.innerText = "Stan magazynowy: " + localStorage.getItem("magazynS");
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