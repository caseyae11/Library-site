document.addEventListener("DOMContentLoaded", function() {
    // Select all message elements
    const messages = document.querySelectorAll('.message, .message2');

    // Display messages with delay
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.classList.add('show');
        }, index * 1000); // Adjust delay as needed
    });
});
