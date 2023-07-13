let txt='';
let screen=document.querySelector(".screen");
function clearScreen(){
	txt='';
	screen.innerHTML=txt;
}
function display(val){
	txt += val;
	screen.innerHTML=txt;
}
function Eval(){
	try{
		let val=eval(txt);
		if(Number.isInteger(val)){
			screen.innerHTML=val;
		}else{
			screen.innerHTML=val.toFixed(5);
		}	
		txt=val;
	}
	catch(e){
		alert('invalid input');
	}	
}