window.onload=function(){
	// 删除
	var shanc=document.getElementsByClassName('shanc')
	var  oList=document.getElementsByClassName('item-list')
	for(let i=0;i<shanc.length;i++){
			shanc[i].onclick=function(){
				oList[i].style.display='none';
			}
		}
	// 价格
	var okz=document.querySelectorAll('.bian');
	var ojia=document.querySelectorAll('#plus');
	var ojian=document.querySelectorAll('.minu');
	var oin=document.querySelectorAll('.text');
	var ohuo=document.querySelectorAll('.price-cons');
	var obian=document.querySelectorAll('.huo');
	
	
	for (let i=0;i<ojia.length;i++) {
		ojia[i].index=i;
		ojia[i].onclick=function(){
			var quz=parseInt(oin[this.index].value);
			var oh= parseInt(ohuo[this.index].innerHTML);
			var ob=parseInt(obian[this.index].innerHTML );
			quz = quz+1;
			var a = oin[this.index].value=quz;
		  obian[this.index].innerHTML =ob.innerHTML=oh * a;
			var oz=0
		  for(let z=0;z<ojia.length;z++){
			 ojia[i].index=i;
			var ox=parseInt(obian[z].innerHTML );
			// console.log(ox);
			oz+=ox;
			console.log(oz);
			okz[this.index].innerHTML=okz.innerHTML=oz;
			}
		}
		
	}
	

	for (var i=0;i<ojian.length;i++) {
			ojian[i].index=i;
			ojian[i].onclick=function(){
				var quz1=parseInt(oin[this.index].value);
				var oh= parseInt(ohuo[this.index].innerHTML);
				var ob=parseInt(obian[this.index].innerHTML );
				quz1 = quz1-1;
				if (quz1 ==0) {
					return
				}
				var a= oin[this.index].value=quz1;
				var bb = obian[this.index].innerHTML;
				obian[this.index].innerHTML = bb-oh;
				
			}
		}













}