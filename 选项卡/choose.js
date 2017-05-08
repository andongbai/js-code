// JavaScript Document
window.onload=function(){
	var oDiv=document.getElementById("div1");
	var oBtn=oDiv.getElementsByTagName("input");
	var aDiv=oDiv.getElementsByTagName("div");
	
	for(var i=0;i<oBtn.length;i++){
		oBtn[i].index=i;
		oBtn[i].onclick=function(){
			//alert(this.value);
			for(var j=0;j<oBtn.length;j++){
				oBtn[j].className="";
				aDiv[j].style.display="none";
			}
			this.className="active";
			aDiv[this.index].style.display="block";
		}
	}
	}