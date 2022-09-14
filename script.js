const btn = document.querySelector('.wraper_input_button');
const input = document.querySelector('.wraper_input_input');
const wrapperMessage = document.querySelector('.wraper_message');


btn.addEventListener('click', () => {
    const message = document.createElement('div');

    message.className = 'message';
    message.innerHTML = input.value;
    const close = document.createElement('div');
    close.className = 'close';
    if (input.value !== '') {
        wrapperMessage.appendChild(message);
        message.appendChild(close);
        input.value = '';
    } 
    console.log(message);
    console.log(wrapperMessage);
})
input.onkeypress = function (event) {
    if (event.keyCode === 13 && !event.shiftKey) {
        const message = document.createElement('div');
        message.className = 'message';
        message.innerHTML = input.value;
        const close = document.createElement('div');
        close.className = 'close';
        if (input.value !== '') {
            wrapperMessage.appendChild(message);
            message.appendChild(close);
            input.value = '';
        } 
    }
    if (event.keyCode === 13 && event.shiftKey) {
        
    }
   
}
