const btn = document.querySelector('.wraper_input_button');
const input = document.querySelector('.wraper_input_input');
const wrapperMessage = document.querySelector('.wraper_message');

function addMessage ( ) {
    const message = document.createElement('div');
    message.className = 'message';
    message.innerHTML = input.value;
    
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close';
    if (input.value !== '') {
        wrapperMessage.appendChild(message);
        message.appendChild(closeBtn);
        input.value = '';
    } 

    closeBtn.addEventListener('click', () => {
        message.remove();
    })
};


btn.addEventListener('click', () => {
   addMessage();
})

input.onkeypress = function (event) {
    if (event.keyCode === 13 && !event.shiftKey) {
       addMessage();
    }
    if (event.keyCode === 13 && event.shiftKey) {
        
    }
    

}

