const p2=document.getElementById('p2');
const p1=document.getElementById('p1');
const mail=document.getElementById('email-input')
const tmail=document.getElementById('tmail')
const form=document.getElementById('form')
const errr=document.getElementById('error')


document.getElementById('dismiss').addEventListener('click', ()=> {
    p2.classList.toggle('hidden')
    p1.classList.toggle('hidden')
})

form.addEventListener('submit', (e)=> {
    let test= validateEmail(mail.value)
    if(mail.value===''){
        
        e.preventDefault()
        mail.classList.add("invalid")
        errr.textContent="Valid email required"
        return
    }
    if(!test){
        e.preventDefault()
        mail.classList.add("invalid")
        errr.textContent="Valid email required"
        return
    }
    e.preventDefault()
    p2.classList.toggle('hidden')
    p1.classList.toggle('hidden')
    tmail.textContent=mail.value
    console.log(mail.value)
});

    function validateEmail(emailValue) {
        let value = /\S+@\S+\.\S+/;
        return value.test(emailValue);
      }


