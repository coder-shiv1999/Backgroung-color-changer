function bbg(){
    const checkbbg = document.body.getAttribute("class");
    if(checkbbg == "body-clicked"){
      document.body.classList.remove("body-clicked");
    }else{
      document.body.classList.add("body-clicked");
    }
  }
  
 
  function cbg(){
    const checkcbg = document.getElementById("cont").getAttribute("class").split(' ');
    if(checkcbg[1] == "container-clicked"){
      document.getElementById("cont").classList.remove("container-clicked");
    }else{
      document.getElementById("cont").classList.add("container-clicked");
    }
  }
  
  function btbg(){
    const checkbtbg = document.getElementById("btn3").getAttribute("class").split(' ');
    if(checkbtbg[1] == "button-clicked"){
      document.getElementById("btn1").classList.remove("button-clicked");
      document.getElementById("btn2").classList.remove("button-clicked");
      document.getElementById("btn3").classList.remove("button-clicked");
     
   }else{
     document.getElementById("btn1").classList.add("button-clicked");
     document.getElementById("btn2").classList.add("button-clicked");
     document.getElementById("btn3").classList.add("button-clicked");
   }   
  }