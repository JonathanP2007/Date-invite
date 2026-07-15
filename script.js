const button = document.getElementById("startButton");
const hero = document.getElementById("hero");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const heart = document.getElementById("heart");

alert("js works");


const text = 
`רציתי להזמין אותך
לערב רומנטי ביום שישי.

אני אגיע בצהריים לאסוף אותך.

את רק צריכה לוודא להיות יפה,
כל השאר עליי ❤️

תסכימי לצאת איתי?`;



button.addEventListener("click", () => {


    // Hide opening screen
    hero.style.display = "none";


    // Show letter
    letter.classList.remove("hidden");


    // Type the letter
    let i = 0;


    const timer = setInterval(() => {


        typing.textContent += text[i];

        i++;


        if (i >= text.length) {


            clearInterval(timer);


            // Show heart after typing finishes
            heart.classList.remove("hidden");


        }


    }, 45);


});




heart.addEventListener("click", () => {


    // Stop beating
    heart.style.animation = "none";


    // Grow effect
    heart.style.transform = "scale(1.4)";


    setTimeout(() => {


        window.location.href =
        "https://wa.me/972532388902?text=אני%20מסכימה%20❤️";


    }, 1200);


});
