const submit=document.querySelector(".submit");
let input=document.querySelector(".txt");
let feedback=document.querySelector(".feedback");
let msg=document.querySelector('.msg');

submit.addEventListener('click',()=>{
    if(input.value === ''){
        feedback.classList.add('show');
        setTimeout(()=>{
            feedback.classList.remove('show');
        },3000);
    }else{
        msg.innerHTML=input.value;
        input.value='';
    }
}
)