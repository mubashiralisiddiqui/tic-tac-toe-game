var turnx = "x";
var turno ="o";

function selectx (){
  var val=false;
  document.getElementById("x").style.backgroundColor="red";
  document.getElementById("o").style.backgroundColor="blue";
}

function selecto(){
  document.getElementById("o").style.backgroundColor="red";
  document.getElementById("x").style.backgroundColor="blue";
  
}
var value;
function change(index){
  
 var select= document.getElementsByTagName("h1");
 

  if(index){
  
     select[index].innerHTML="X"; 
     
   value ^= true;
   if(value===1){
      select[index].innerHTML="O"; 
   }
 
  if(select[1].innerText===select[2].innerText&&select[2].innerText===select[3].innerText){
     alert("player "+select[1].innerText+"  won");}
    
   if(select[4].innerText===select[5].innerText&&select[5].innerText===select[6].innerText){
     alert("player "+select[4].innerText+"  won")
  }
    if(select[7].innerText===select[8].innerText&&select[8].innerText===select[9].innerText){
    alert("player "+select[7].innerText+"  won")
  }
    if(select[1].innerText===select[4].innerText&&select[4].innerText===select[6].innerText){
    alert("player "+select[1].innerText+"  won")
  }
    if(select[2].innerText===select[5].innerText&&select[5].innerText===select[8].innerText){
    alert("player "+select[2].innerText+"  won");
  }
    if(select[3].innerText===select[6].innerText&&select[6].innerText===select[9].innerText){
    alert("player "+select[3].innerText+"  won");
  }
    if(select[1].innerText===select[5].innerText&&select[5].innerText===select[9].innerText){
     alert("player "+select[1].innerText+"  won")
  }
  if(select[3].innerText===select[5].innerText&&select[5].innerText===select[7].innerText){
    alert("player "+select[3].innerText+"  won")
  }  
    
     }
   
}

 function resetpage(){
  
   var elems = document.getElementsByTagName('h1');


    
        elems[1].innerText="1";
         elems[2].innerText="2";
          elems[3].innerText="3";
           elems[4].innerText="4";
            elems[5].innerText="5";
             elems[6].innerText="6";
              elems[7].innerText="7";
               elems[8].innerText="8";
                elems[9].innerText="9";
    }

   
  //  document.getElementById("old").innerHTML = "#";
 
 




