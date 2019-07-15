$(document).ready(function()
		
{ 
	
	$("#btnSubmit").click(function()
	{
     
	if($(".room-section").html()==0)
       
        
		{
			alert('click anyone');
		}
		else if( document.getElementById("productTypeSelect").value=="Tile" && (document.querySelectorAll(".room-section .rectRoomItem").length))
			{

			
			var a=$(".room-section    .imperialDiv").find("input,select")[0].value;
			var a1=$(".room-section   .imperialDiv").find("input,select")[1].value;
			var b=$(".room-section   .imperialDiv").find("input,select")[2].value;
			var b1=$(".room-section   .imperialDiv").find("input,select")[3].value;
			var aa=$(".room-section    .item-content").find("input,select")[0].value;


			var total1=parseInt(a)+parseFloat(a1/12);
			var total2=parseInt(b)+parseFloat(b1/12);
			var c=Math.ceil(total1*total2);

			var d=$(".product-info.hidden.active  .imperialDiv").find("input")[0].value; 
			var d1=$(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;           
			var e=$(".product-info.hidden.active .imperialDiv").find("input")[1].value; 
			var e1=$(".product-info.hidden.active .imperialDiv").find("input,select")[1].value; 
			var p=$(".product-info.hidden.active .imperialDiv").find("input")[2].value;
			var ra =$('.product-info.hidden.active .item-content').find("input")[0].value;

			var twid=parseInt(d)+parseFloat(d1/12);
			var tlen=parseInt(e)+parseFloat(e1/12);
			var tarea=Math.floor((twid*tlen));



var tot=c/tarea; //no of tiles
console.log(tot);
var rw=(((tot*(ra/100))+tot));
var rwas=Math.ceil(rw);
$("#btnSubmit").dblclick(function()
{
	total =rwas+rwas;
	alert("Addition"+total);
	
});
document.getElementById("result").innerText=""+rwas;


//var g=tot*p;//grout area
//var rem=c-g;//room groud
//var final=rem/tarea;
//var round=Math.floor(final);
//var last = rem%tarea;
//if(last==1||last<tarea)
//{
//	round++;
//	document.getElementById("result").innerText=""+round;
//}
//else
//{
//	document.getElementById("result").innerText=""+round;
//	console.log(round);
//}
} 
else if( document.getElementById("productTypeSelect").value=="Tile"&& (document.querySelectorAll(".room-section .LShapeRoomItem ").length)|| (document.querySelectorAll('.room-section .convexRoomItem').length))
			
	

{
	var lsw1=$(".room-section .imperialDiv").find("input,select")[0].value;
	var ilsw1=$(".room-section .imperialDiv").find("input,select")[1].value;
	var lsl1=$(".room-section  .imperialDiv").find("input,select")[2].value;
	var ilsl1=$(".room-section .imperialDiv").find("input,select")[3].value;

	var lsw2=$(".room-section  .imperialDiv").find("input,select")[4].value;
	var ilsw2=$(".room-section .imperialDiv").find("input,select")[5].value;

	var lsl2=$(".room-section .imperialDiv").find("input,select")[6].value;
	var ilsl2=$(".room-section .imperialDiv").find("input,select")[7].value;
	var l1=parseInt(lsw1)+parseFloat(ilsw1/12);
	var l2=parseInt(lsl1)+parseFloat(ilsl1/12);
	var l3=parseInt(lsw2)+parseFloat(ilsw2/12);
	var l4=parseInt(lsl2)+parseFloat(ilsl2/12); 
	var tl=Math.ceil((l1*l2)+(l3*l4));


	var dl=$(".product-info.hidden.active  .imperialDiv").find("input,select")[0].value; 
	var dl1=$(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;           
	var el=$(".product-info.hidden.active .imperialDiv").find("input,select")[2].value; 
	var el1=$(".product-info.hidden.active .imperialDiv").find("input,select")[3].value; 
	var pl=$(".product-info.hidden.active .imperialDiv").find("input,select")[4].value;
	var ra =$(".product-info.hidden.active .item-content").find("input")[0].value;

	var twidh=parseInt(dl)+parseFloat(dl1/12);
	var tlent=parseInt(el)+parseFloat(el1/12);
	var ta=Math.floor(twidh*tlent);


var tott=tl/ta; //no of tiles
console.log(tott);
var xw=((tott*(ra/100))+tott);
var xwas=Math.ceil(xw);
console.log(xw);
document.getElementById("result").innerText=""+xwas;
//var gl=tott*pl;//gout area
//var reml=tl-gl;
//var finl=reml/ta;
//var roundd=Math.floor(finl);

//var lastt = reml%ta;
//if(lastt==1||lastt<ta)
//{
//	roundd++;
//	document.getElementById("result").innerText=""+roundd;
//}
//else
//{
//	document.getElementById("result").innerText=""+roundd;
//	console.log(roundd);


//	alert("select next room");
//}
}
else if(document.getElementById("productTypeSelect").value=="Tile"&&(document.querySelectorAll(" .room-section .concaveRoomItem").length))

{

    var lsw1=$(" .room-section .imperialDiv").find("input,select")[0].value;
	var ilsw1=$(" .room-section .imperialDiv").find("input,select")[1].value;

	var lsl1=$(" .room-section .imperialDiv").find("input,select")[2].value;
	var ilsl1=$(" .room-section .imperialDiv").find("input,select")[3].value;

	var lsw2=$(" .room-section .imperialDiv").find("input,select")[4].value;
	var ilsw2=$(" .room-section .imperialDiv").find("input,select")[5].value;

	var lsl2=$(" .room-section .imperialDiv").find("input,select")[6].value;
	var ilsl2=$(".room-section .imperialDiv").find("input,select")[7].value;
	var l1=parseInt(lsw1)+parseFloat(ilsw1/12);
	var l2=parseInt(lsl1)+parseFloat(ilsl1/12);
	var l3=parseInt(lsw2)+parseFloat(ilsw2/12);
	var l4=parseInt(lsl2)+parseFloat(ilsl2/12); 
	var tl=Math.ceil((l1*l2) - (l3*l4));


	var dl=$(".product-info.hidden.active  .imperialDiv").find("input,select")[0].value; 
	var dl1=$(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;           
	var el=$(".product-info.hidden.active .imperialDiv").find("input,select")[2].value; 
	var el1=$(".product-info.hidden.active .imperialDiv").find("input,select")[3].value; 
	var pl=$(".product-info.hidden.active .imperialDiv").find("input,select")[4].value;
	var ra =$('.product-info.hidden.active .item-content').find("input")[0].value;

	var twidh=parseInt(dl)+parseFloat(dl1/12);
	var tlent=parseInt(el)+parseFloat(el1/12);
	var ta=Math.floor(twidh*tlent);


var toott=tl/ta; //no of tiles
console.log(toott);
var cwaste=((toott*(ra/100))+toott);
var cw=Math.ceil(cwaste);
console.log(cw);
//var gl=tott*pl;//gout area
//var reml=tl-gl;
//var finl=reml/ta;
//var roundd=Math.floor(finl);

//var lastt = reml%ta;
//if(lastt==1||lastt<ta)
//{
//	roundd++;
//	document.getElementById("result").innerText=""+roundd;
//}
//else
//{
	//document.getElementById("result").innerText=""+roundd;
//	console.log(roundd);


//}}
}
else if(document.getElementById("productTypeSelect").value=="Tile"&& (document.querySelectorAll(".room-section .stairItem").length))
{
	var sw=$(".room-section .imperialDiv").find("input,select")[0].value;
		var isw=$(".room-section .imperialDiv").find("input,select")[1].value;

	var st=$(".room-section .imperialDiv").find("input,select")[2].value;
		var ist=$(".room-section .imperialDiv").find("input,select")[3].value;

	var sr=$(".room-section .imperialDiv").find("input,select")[4].value;
		var isr=$(".room-section .imperialDiv").find("input,select")[5].value;

	var sps=$(".room-section .item-content").find("input,select")[4].value;
	var s1=parseInt(sw)+parseFloat(isw/12);
	var s2=parseInt(st)+parseFloat(ist/12);
	var s3=parseInt(sr)+parseFloat(isr/12);
	var stot=Math.ceil(((s2+s3)*s1)*sps);
	

    var dl=$(".product-info.hidden.active  .imperialDiv").find("input,select")[0].value; 
	var dl1=$(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;           
	var el=$(".product-info.hidden.active .imperialDiv").find("input,select")[2].value; 
	var el1=$(".product-info.hidden.active .imperialDiv").find("input,select")[3].value; 
	var pl=$(".product-info.hidden.active .imperialDiv").find("input,select")[4].value;
	var ra =$('.product-info.hidden.active .item-content').find("input")[0].value;

	var twidh=parseInt(dl)+parseFloat(dl1/12);
	var tlent=parseInt(el)+parseFloat(el1/12);
	var ta=Math.floor(twidh*tlent);


var tott=stot/ta;

var swaste=((tott*(ra/100))+tott);

var sw=Math.ceil(swaste);
document.getElementById("result").innerText=""+sw;

//var gl=tott*pl;//gout area
//var reml=stot-gl;
//console.log(reml);
//var finl=reml/ta;
//var roundd=Math.floor(finl);



//var lastt = reml%ta;
//console.log(lastt);
//if((lastt==0)&&(ra>0))
//{       
    //   var waste=((roundd*(ra/100))+roundd);
  //   var x1=  Math.ceil(waste); 
//		document.getElementById("result").innerText=""+x1;
	

	
//}
//else if((ra>0) && (lastt>0))

     //{
    // var u= roundd+1;
  //    var was=((u*(ra/100)+u));
//x2=Math.ceil(was);
//	document.getElementById("result").innerText=""+x2;
//}

}
});
});

//$(document).ready(function{
//	$(#btnSubmit).click(functi

	
