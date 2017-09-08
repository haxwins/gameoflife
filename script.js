window.onload = () =>{
var x=30;				//size of a game board
var y=60;				
var cells=[]			//array will be later filled with cells 
for(var i=0;i<x;i++){	//creating two dimensions array
	cells[i]=new Array(y);
}	
var el=document.createElement("table");		//creating table tag
el.id="tab";
for(var i=0;i<x;i++){						//adding rows based on y value and columns based on x value
	el = document.createElement("tr");
	el.id = "tr" + i;
	document.getElementById("tab").appendChild(el);
	for(var j=0;j<y;j++){
		el = document.createElement("th");

		document.getElementById("tr"+i).appendChild(el); 
		cells[i][j] = el; 					//adding every cell to cells array
	}
}
cells[2][3].classList.add('alive');
cells[10][34].classList.add('alive');
setTimeout(()=>{
	cells[10][34].classList.remove('alive');
},2000);




/*
for(let i=0; i<y;i++){
	var r=document.createElement("tr");
	document.body.appendChild(r);
	for(let j=0;j<x;j++){
		create[i][j]=document.createElement("th");
		document.body.appendChild(create[i][j]);
	}
}








for(var i=0;i<x;i++){
	cells[i]=new Array(y);
}
console.log(cells);
var temp=document.getElementsByTagName('th');
console.log(temp);
temp[0].style.backgroundColor= "red";
var counter=0;
for(var i=0;i<x;i++){
	for(var j=0;j<y;j++){
		cells[i][j] = temp[counter];
		counter++;
	}
	
}
console.log(cells);

cells[4][4].style.backgroundColor = "green";
cells[4][5].style.backgroundColor = "green";
cells[5][4].style.backgroundColor = "green";
cells[5][5].style.backgroundColor = "green";
*/








}