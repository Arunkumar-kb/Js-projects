let count = 0;
let counter = document.querySelector('.count');
if(count==0)
counter.style.color="black";
function decrement(){
    count--;
    if(count==0)
     counter.style.color="black";
    if(count < 0)
     counter.style.color="#e84118";
    counter.textContent=count;

}
function increment(){
    count++;
    if(count==0)
     counter.style.color="black";
    if(count > 0)
     counter.style.color="#4cd137";
    counter.textContent=count;

}