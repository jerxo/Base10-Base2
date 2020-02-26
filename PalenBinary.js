function converter(){
	var inp=parseInt(document.getElementById("decim").value);
	var mod, a=inp;
	var binary=[];
	
	if(inp<0){
		document.getElementById("bina").innerHTML=
		"You input a negative number. Click the refresh, or press F5 to try again.";
	}
	
	else{
		while(a>0){
			mod=a%2;
			binary.push(mod);
			a=Math.trunc(a/2);
		}
		
		document.getElementById("bina").innerHTML +=
		"You input the decimal number: ["+ inp +"]10<br>And it will become binary [";
		while(binary.length>0) document.getElementById("bina").innerHTML += binary.pop();
		document.getElementById("bina").innerHTML += "]2";
		
	}
}
