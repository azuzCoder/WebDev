searchform = document.querySelector9('.search-form');

document.querySelector('#search-btn').onclick =() =>{
    searchform.classlist.toggle('active');
}
let loginform = document.querySelector('login-form-container')
document.querySelector('#login-btn').onclick = ()=>{
    loginform.classList.toggle('active');
}
window.onscroll = () =>{
if(window.scrollY >80){
    document.querySelector('.main .body-1').classList.add(active);
}else{
    document.querySelector('.main .body-1').classList.remove(active);
    }
}
window .onload = () =>{
if(window.scrollY > 80){
        document.querySelector('.main .body-1').classList.add(active);
}else{
    document.querySelector('.main .body-1').classList.remove(active);
    }
}
document.querySelector('#btn').addEventListener('click', function(){
    myText();
    myPass();
});

function myText(){
    let message, text;
    let errElement = document.getElementById('text');
    message = document.getElementById('err');
    text = document.getElementById('text').value;

    try{
        if(text == "") {
            errElement.classList.remove('valid');
            errElement.classList.add('err');
            throw "empty"
        }
        if(text.length >3) {
            errElement.classList.remove(err2);
            errElement.classList.add(valid);
            throw 'enter more than 3';
        }
        if(text.length >0){
            errElement.classList.remove(err);
            errElement.classList.add(valid);
            message.innerHTML = "";
        }
    } catch(e) {
        message.innerHTML = 'Result'+ e;
    }   
}

    function myPass(){
        let message, pass;
        let errElement = document.getElementById('password');
    
        message = document.getElementById('err2');
        pass = document.getElementById('password').value;
    
        try{
            if(pass == "") {
                errElement.classList.remove('valid');
                errElement.classList.add('err');
                throw "empty"
            }
            if(pass.length >3) {
                errElement.classList.remove(err2);
                errElement.classList.add(valid);
                message.innerHTML = "";
            }
        } catch(e) {
            message.innerHTML = 'Result'+ e;
        }
    }
