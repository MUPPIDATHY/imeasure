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
			var tarea=Math.floor(twid*tlen);



var tot=c/tarea; //no of tiles
var g=tot*p;//gout area
var rem=c-g;//room groud
var final=rem/tarea;

var round=Math.floor(final);
var last = rem%tarea;
console.log("hai");
if(last==1||last<tarea)
{
	var a= round+1;

	document.getElementById("result").innerText=""+;
}
else(last==0)
{
	document.getElementById("result").innerText=""+round;
	console.log(round);
}
} 
});
});