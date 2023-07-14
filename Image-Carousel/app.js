let index = 0;

function show_image(val){
    let images = document.getElementsByClassName('image');
    index += val;
    for(let i = 0; i < images.length; i++)
        images[i].style.display="none";
    
    if(index > images.length-1)
        index = 0;
    
    if(index < 0)
        index = images.length-1;

    images[index].style.display="block";
}
show_image(index);
