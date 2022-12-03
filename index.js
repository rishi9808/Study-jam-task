var count=parseInt(document.getElementById('count').innerHTML);

function increment(){
    document.getElementById('count').innerHTML=count+1;
    count=count+1;
 }
function decrement(){
    document.getElementById('count').innerHTML=count-1;
    count=count-1;  
}

