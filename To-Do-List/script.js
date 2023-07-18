document.querySelector('#add').onclick = function (){
    const txt = document.getElementById('input');
    if(txt.value == ''){
        alert('Enter task in the text box.');
    }
    else{
        document.querySelector('.tasks').innerHTML += 
        `<div class=task>
            <span>${txt.value}</span>
            <button class='delete'><i class="fa-sharp fa-solid fa-trash"></i></delete>
        </div>` ; 
        var current_tasks=document.querySelectorAll('.delete');
        for(var i=0;i<current_tasks.length;i++){
            current_tasks[i].onclick=function (){
                this.parentNode.remove();
            }
        }
        var task=document.querySelectorAll('.task');
        for(var i=0;i<task.length;i++){
            task[i].onclick=function (){
                this.classList.toggle('completed');          
            }
        }
        txt.value='';
    }
}
