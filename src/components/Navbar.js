import React from 'react';
function myFunction() {
    console.log("djdg");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


function Navbar(){

    return(
    <section class="clearfix" >
        <div class="topnav" id="myTopnav" >
            <a href="javascript:void(0);" style={{fontSize: "15px"}} class="icon" onClick={myFunction}><button class="ham-btn"></button></a>
            
            <div class="nav-container">

                <a href="#">
                <div class="dropdown">
                    <button class="dropbtn">My Aadhaar<i class="ion-chevron-down icon-nav"></i></button>   
                    
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                </a>
                <a href="#">
                <div class="dropdown">
                    <button class="dropbtn">About UIDAI<i class="ion-chevron-down icon-nav"></i></button>   
                    
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                </a>
                <a href="#">
                <div class="dropdown">
                    <button class="dropbtn">Ecosystem<i class="ion-chevron-down icon-nav"></i></button>   
                    
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                </a>
                <a href="#">

                <div class="dropdown">
                    <button class="dropbtn">Media & Resources<i class="ion-chevron-down icon-nav"></i></button>   
                    
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                </a>
                <a href="#">
                <div class="dropdown">
                    <button class="dropbtn">Contact & Support<i class="ion-chevron-down icon-nav"></i></button>   
                    
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                </a>
                
               
              
                
            
            
                
            </div>
        </div>


    </section>
    );
}

export default Navbar;