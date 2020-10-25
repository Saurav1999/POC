import React, { useState, useEffect } from 'react';

var slideIndex = 1;

console.log("without dom")
function plusSlidesprev() {

    showSlides(slideIndex += -1);
}
function plusSlidesnext(n) {

    showSlides(slideIndex += 1);
}

function currentSlide() {
  showSlides(slideIndex = 1);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");


  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "block";  
 
}

console.log("after dom")




function Slides(){

    useEffect(() => {
        console.log("inside effect");

        showSlides(slideIndex);
     


      });
    

    return(
       
    
        <div  class= "myClass">
            
        
            <div class="slideshow-container">
            
            <div  class="mySlides fade" >
                
                    <img src={process.env.PUBLIC_URL + '/images/banner/Aadhaar-for-all.jpg'} alt="Lisbon" style={{"width" : "100%"}}/> 
               
             </div>
             
            <div class="mySlides fade">
                
                

                    <img src={process.env.PUBLIC_URL + '/images/banner/New-eAadhaar.jpg'} alt="Lisbon" style={{"width" : "100%"}}/> 
                
            </div>
            
            <div class="mySlides fade">
               
                    <img src={process.env.PUBLIC_URL + '/images/banner/Aadhaar_PVC_Card_banner1.jpg' } alt="Lisbon" style={{"width" : "100%"}}/> 
                
            </div>
     
            <a class="prev" onClick={plusSlidesprev}>&#10094;</a>
            <a class="next" onClick={plusSlidesnext}>&#10095;</a>

        </div>
       

       
    </div>
    );
}




export default Slides;