function compute(){
    var h= document.getElementById('height').value;
    var w=document.getElementById('weight').value;
    
    console.log(w);
    console.log(h);
    var x=w/(h*h);
    console.log(x); 

    document.getElementById('bmi').innerText= x;

 }
 function showImage() {
    document.getElementById("first").style.display ='block';
}