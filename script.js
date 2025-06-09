 let end = null;
 function start(){
if (end !== null) return;
    function interval(){

   const realtime=new Date().getSeconds()
   const time=realtime+1
   const total= document.getElementById("output").innerText=realtime
    }
     end=setInterval(interval,1000)

};
function stop(){
     if (end !== null) {
          clearInterval(end)
          end==null;
          document.getElementById("output").innerText= total.value 

     }
     
}
function restart(){
     location.reload()
}




    