window.onload = () =>{
	var rows=50;
	var columns=50;
	var board=[];
	for(var i=0;i<rows;i++){
		board[i]=new Array(columns)
	}
	for(var i=0;i<rows;i++){	//filling random cells
		for(var j=0;j<columns;j++){
			if(Math.random()<0.9)
				board[i][j]=0;
			else	
				board[i][j]=1;
		}
	}
	var el=document.createElement("table");		//creating table tag
	el.id="tab";
	document.getElementById("life").appendChild(el);
	/*		glider:
	board[15][15]=1;
	board[14][15]=1;
	board[16][15]=1;
	board[16][14]=1;
	board[15][13]=1;
	*/
	function life(){
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
					if(board[i][j]===1)el.classList.add('alive');
					else el.classList.remove('alive');
				}
			}
		//==========================================================
		var newBoard=[];
		for(var i=0;i<rows;i++){	//creating two dimensions array
			newBoard[i]=new Array(columns);
		}
		for(var i=1;i<rows-1;i++){
			for(var j=1;j<columns-1;j++){
				var neighbors=0;
				if(board[i-1][j-1]==1)neighbors+=1;
				if(board[i-1][j]==1)neighbors+=1;
				if(board[i-1][j+1]==1)neighbors+=1;
				if(board[i][j-1]==1)neighbors+=1;
				if(board[i][j+1]==1)neighbors+=1;
				if(board[i+1][j-1]==1)neighbors+=1;
				if(board[i+1][j]==1)neighbors+=1;
				if(board[i+1][j+1]==1)neighbors+=1;
				if(neighbors<2){
					newBoard[i][j]=0;
				}
				else if(neighbors>3){
					newBoard[i][j]=0;
				}
				else if(neighbors==3){
					newBoard[i][j]=1;
				}
				else{
					newBoard[i][j]=board[i][j];
				}
			}
		}
		board=newBoard;
	}
	setInterval(life,500);
}