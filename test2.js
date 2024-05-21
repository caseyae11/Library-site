// Add this to your existing JavaScript file (script.js)

document.addEventListener("DOMContentLoaded", function() {
    // Show the intro box after the page has loaded
    showIntroBox();
    showContent();
   
});

function showIntroBox() {
    var introBox = document.querySelector('.intro-box');
    introBox.classList.add('show');
}

function showContent(){
    var content = document.querySelector(body)
    content.classList.add('show')
}


//slider code
let currentSlide = 1;

function nextSlide() {
    hideSlide(currentSlide);
    currentSlide++;
    showSlide(currentSlide);

    if (currentSlide === 2) {
        showChatContainer();
    }
}

function prevSlide() {
    hideSlide(currentSlide);
    currentSlide--;
    showSlide(currentSlide);
}

function showSlide(slideNumber) {
    const slide = document.getElementById(`slide${slideNumber}`);
    slide.style.display = 'block';

}

function hideSlide(slideNumber) {
    const slide = document.getElementById(`slide${slideNumber}`);
    slide.style.display = 'none';
}



// professor transition

function showContent() {
    var backgroundContainer = document.querySelector('.P-background-container');
    backgroundContainer.classList.add('show');
}

//menu2
const menuToggle2 = document.querySelector('.fas');
const menu2 = document.querySelector('.Nmenu')

menuToggle2.addEventListener('click', ()=>{
    menuToggle2.classList.toggle('active')
    menu2.classList.toggle('active')
})

// //menu button that slides
// const menuToggle = document.querySelector('.navbar')
// const container = document.querySelector('.container')

// menuToggle.addEventListener('click', ()=> {
//     menuToggle.classList.toggle('active')
//     container.classList.toggle('active')
// })

function showChatContainer() {
    const chatContainer = document.querySelector('.chat-container');
    const messages = document.querySelectorAll('.message, .message2');

    // Display messages with delay
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.classList.add('show');
        }, index * 1000); // Adjust delay as needed
    });

    // You can add any other code related to the chat container display here
}
