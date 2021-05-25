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
    var dodajM = document.querySelector("#dodajM");
    var dodajL = document.querySelector("#dodajL");

    var wartoscS = 24.99;
    var wartoscM = 32.99;
    var wartoscL = 45.99;

    var buttonZamow = document.querySelector("#buttonZamow");

    var usunS = document.querySelector("#usunS");
    var usunM = document.querySelector("#usunM");
    var usunL = document.querySelector("#usunL");

    var cenaS = document.querySelector("#cenaS");
    var cenaM = document.querySelector("#cenaM");
    var cenaL = document.querySelector("#cenaL");

    var cenaRazem = document.querySelector("#cenaRazem");

    var iloscS = document.querySelector("#iloscS");
    var iloscM = document.querySelector("#iloscM");
    var iloscL = document.querySelector("#iloscL");

    function zmienCeny(){
        cenaS.innerText = (localStorage.getItem("CartS")*wartoscS).toFixed(2) + "zł";
        cenaM.innerText = (localStorage.getItem("CartM")*wartoscM).toFixed(2) + "zł";
        cenaL.innerText = (localStorage.getItem("CartL")*wartoscL).toFixed(2) + "zł";
        var cenaa = (localStorage.getItem("CartS")*wartoscS) + (localStorage.getItem("CartM")*wartoscM) + (localStorage.getItem("CartL")*wartoscL);
        
        cenaRazem.innerText = "Razem: " + cenaa.toFixed(2)+"zł";
    }

    function wyswietlanie(){
        iloscS.innerText = localStorage.getItem("CartS");
        iloscM.innerText = localStorage.getItem("CartM");
        iloscL.innerText = localStorage.getItem("CartL");
        iloscKoszyk.innerText = "Koszyk: "+ localStorage.getItem("Cart");
        zmienCeny();

    }

    dodajS.addEventListener('click', function(){
        if(parseInt(localStorage.getItem("CartS"),10) < parseInt(localStorage.getItem("magazynS"),10)){

            localStorage.setItem("CartS", parseInt(localStorage.getItem("CartS"),10)+1);
           
            localStorage.setItem("Cart", parseInt(parseInt(localStorage.getItem("CartS"),10)+parseInt(localStorage.getItem("CartM"),10)+parseInt(localStorage.getItem("CartL"),10), 10));
            
            wyswietlanie();
        }
    });

    dodajM.addEventListener('click', function(){
        if(parseInt(localStorage.getItem("CartM"),10) < parseInt(localStorage.getItem("magazynM"),10)){
           
            localStorage.setItem("CartM", parseInt(localStorage.getItem("CartM"),10)+1);
            
            localStorage.setItem("Cart", parseInt(parseInt(localStorage.getItem("CartS"),10)+parseInt(localStorage.getItem("CartM"),10)+parseInt(localStorage.getItem("CartL"),10), 10));
           
            wyswietlanie();
        }
    });

    dodajL.addEventListener('click', function(){
        if(parseInt(localStorage.getItem("CartL"),10) < parseInt(localStorage.getItem("magazynL"),10)){
        
            localStorage.setItem("CartL", parseInt(localStorage.getItem("CartL"),10)+1);
            
            localStorage.setItem("Cart", parseInt(parseInt(localStorage.getItem("CartS"),10)+parseInt(localStorage.getItem("CartM"),10)+parseInt(localStorage.getItem("CartL"),10), 10));
           
            wyswietlanie();
        }
    });


    usunS.addEventListener('click', function(){
        if(parseInt(localStorage.getItem("CartS"),10) > 0){
            localStorage.setItem("CartS",parseInt(localStorage.getItem("CartS"),10)-1);
            localStorage.setItem("Cart", parseInt(parseInt(localStorage.getItem("CartS"),10)+parseInt(localStorage.getItem("CartM"),10)+parseInt(localStorage.getItem("CartL"),10), 10));
 
            wyswietlanie();
        }
    });

    usunM.addEventListener('click', function(){
        if(parseInt(localStorage.getItem("CartM"),10) > 0){
 
            localStorage.setItem("CartM",parseInt(localStorage.getItem("CartM"),10)-1);
            localStorage.setItem("Cart", parseInt(parseInt(localStorage.getItem("CartS"),10)+parseInt(localStorage.getItem("CartM"),10)+parseInt(localStorage.getItem("CartL"),10), 10));


            wyswietlanie();
        }
    });

    usunL.addEventListener('click', function(){
        if(parseInt(localStorage.getItem("CartL"),10) > 0){
 
            localStorage.setItem("CartL",parseInt(localStorage.getItem("CartL"),10)-1);
            localStorage.setItem("Cart", parseInt(parseInt(localStorage.getItem("CartS"),10)+parseInt(localStorage.getItem("CartM"),10)+parseInt(localStorage.getItem("CartL"),10), 10));
 
            wyswietlanie();
        }
    });

    buttonZamow.addEventListener('click', function(){
        localStorage.setItem("magazynS", parseInt( parseInt(localStorage.getItem("magazynS"),10)-parseInt(localStorage.getItem("CartS"),10) , 10));
        localStorage.setItem("CartS",0);

        localStorage.setItem("magazynM", parseInt( parseInt(localStorage.getItem("magazynM"),10)-parseInt(localStorage.getItem("CartM"),10) , 10));
        localStorage.setItem("CartM",0);

        localStorage.setItem("magazynL", parseInt( parseInt(localStorage.getItem("magazynL"),10)-parseInt(localStorage.getItem("CartL"),10) , 10));
        localStorage.setItem("CartL",0);

        localStorage.setItem("Cart", 0);

        wyswietlanie();

    });



    window.addEventListener('DOMContentLoaded', function(){
        wyswietlanie();
        if(localStorage.getItem("isLoggedIn") == "true"){
            logowanie.innerText = "Witaj, " + localStorage.getItem("Login")+". Kliknij, aby wylogować";
    
            logowanie.addEventListener('click', function(){
                
                localStorage.setItem("isLoggedIn", false);
    
            });
        }
        else if(localStorage.getItem("isLoggedIn") == "false"){
            logowanie.innerText = "Logowanie";
        }
    });
})();