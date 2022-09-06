const btn = document.querySelector('.wraper_input_button');
const input = document.querySelector('.wraper_input_input');
const wrapperMessage = document.querySelector('.wraper_message');
const close = document.querySelector('.message::after');

btn.addEventListener('click', function() {
    const message = document.createElement('div');
    message.className = 'message';
    message.innerHTML = input.value;
    if (input.value !== '') {
        wrapperMessage.appendChild(message);
        input.value = '';
    } 
})
input.onkeypress = function (event) {
    if (event.keyCode === 13 && !event.shiftKey) {
        const message = document.createElement('div');
        message.className = 'message';
        message.innerHTML = input.value;
        if (input.value !== '') {
            wrapperMessage.appendChild(message);
            input.value = '';
        } 
    }
    if (event.keyCode === 13 && event.shiftKey) {
        
    }
   
}
