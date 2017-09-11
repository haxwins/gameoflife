window.onload = () =>{
	var rows = 100;
	var columns = 100;
	var cells=[];				//array will be later filled with cells 
	for(var i=0;i<rows;i++){	//creating two dimensions array
		cells[i]=new Array(columns);
	}
	
	for(var i=0;i<rows;i++){					
			for(var j=0;j<columns;j++){
				if(Math.random()<0.9)
					cells[i][j]=0;
				else	
					cells[i][j]=1;
			}
		}
		cells[1][1]=1;
		cells[2][2]=1;
		cells[3][3]=1;
		cells[4][4]=1;
		cells[5][5]=1;
		cells[6][6]=1;
	var el=document.createElement("table");		//creating table tag
	el.id="tab";
	document.body.appendChild(el);
	//===============================
	drow(cells);
	function drow(current){
		var myNode = document.getElementById("tab");	//removing old board
		while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		}
		for(var i=1;i<rows-1;i++){						
			el = document.createElement("tr");
			el.id = "tr" + i;
			document.getElementById("tab").appendChild(el);
			for(var j=1;j<columns-1;j++){
				el = document.createElement("th");
				document.getElementById("tr"+i).appendChild(el);
				if(current[i][j]===1)el.classList.add('alive');
				else el.classList.remove('alive');
			}
		}
	}	
	function change(){
		var newCells=[];
		for(var i=0;i<rows;i++){	//creating two dimensions array
			newCells[i]=new Array(columns);
		}
		
		newCells=cells;
		newCells[4][3]=1;
		newCells[15][15]=1;
		newCells[14][15]=1;
		newCells[16][15]=1;
		
		for(var i=1;i<rows-1;i++){						
			for(var j=1;j<columns-1;j++){
				var neighbors=0;
				for(var q=-1;q<=1;q++){
					for(var r=-1;r<=1;r++){
						neighbors+=cells[i+q][j+r];
					}
				}
			if(cells[i][j]==1)neighbors-=1;
			if(i==1&&j==1)console.log(neighbors);
			if(neighbors>2)newCells[i][j]=1;
			if(neighbors>6)newCells[i][j]=0
			
			/*if(cells[16][16]==1)neighbors-=1;
			if(cells[i][j]===1 && neighbors<2)			
				newCells[i][j]=0;
			else if(cells[i][j]===1 && neighbors>3)		
				newCells[i][j]=0;
			else if(cells[i][j]===0 && neighbors===3)	
				newCells[i][j]=1;
			else 										
				newCells[i][j]=cells[i][j];*/
		}
	}
		cells=newCells;
		drow(cells);
	}
	setInterval(change,300);
	
	
	
	
	
	
	
	
	
	
	
	
}