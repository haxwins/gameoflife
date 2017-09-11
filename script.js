window.onload = () =>{
var x=50;				//size of a game board
var y=50;				
var cells=[]			//array will be later filled with cells 
for(var i=0;i<x;i++){	//creating two dimensions array
	cells[i]=new Array(y);
}
var newCells=cells;
var el=document.createElement("table");		//creating table tag
	el.id="tab";
	document.body.appendChild(el);
	for(var i=0;i<x;i++){					
		for(var j=0;j<y;j++){
			if(Math.random()<0.9||true)
				cells[i][j]=0;
			else	
				cells[i][j]=1;
		}
	}
	cells[16][16]=1;
	cells[16][17]=1;
	cells[16][18]=1;
	buildBoard(cells);
	
	
function buildBoard(currentCells){
	var myNode = document.getElementById("tab");	//removing old board
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	for(var i=1;i<x-1;i++){						
		el = document.createElement("tr");
		el.id = "tr" + i;
		document.getElementById("tab").appendChild(el);
		for(var j=1;j<y-1;j++){
			el = document.createElement("th");
			document.getElementById("tr"+i).appendChild(el);
			if(currentCells[i][j]===1)el.classList.add('alive');
			else el.classList.remove('alive');
		}
	}
}
function lifeCycle(){
	cells=newCells;
	for(var i=1;i<x-1;i++){						
		for(var j=1;j<y-1;j++){
			var neighbors=0;
			for(var q=-1;q<=1;q++){
				for(var r=-1;r<=1;r++){
					neighbors+=cells[i+q][j+r];
				}
			}
			//if(cells[16][16]==1)neighbors-=1;
			if(cells[i][j]===1 && neighbors<2)			
				newCells[i][j]=0;
			else if(cells[i][j]===1 && neighbors>3)		
				newCells[i][j]=0;
			else if(cells[i][j]===0 && neighbors===3)	
				newCells[i][j]=1;
			else 										
				newCells[i][j]=cells[i][j];
			
		}
	}
	
	buildBoard(newCells)
	
}
setInterval(lifeCycle,2000);

}