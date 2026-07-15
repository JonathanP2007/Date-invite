const button = document.getElementById("startButton");
const hero = document.getElementById("hero");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const heart = document.getElementById("heart");


const text = `רציתי להזמין אותך
לערב רומנטי ביום שישי.

אני אגיע בצהריים לאסוף אותך.

את רק צריכה לוודא להיות יפה,
כל השאר עליי ❤️

תסכימי לצאת איתי?`;



button.onclick = function(){

    hero.style.display = "none";

    letter.classList.remove("hidden");


    let i = 0;


    const timer = setInterval(function(){

        typing.textContent += text[i];

        i++;


        if(i >= text.length){

            clearInterval(timer);

            heart.classList.remove("hidden");

        }


    },45);

};



heart.onclick = function(){


    heart.style.animation = "none";


    heart.style.transform = "scale(1.4)";


    setTimeout(function(){


        window.location.href =
        "https://wa.me/972532388902?text=אני%20מסכימה%20❤️";


    },1200);


};
