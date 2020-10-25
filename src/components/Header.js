import React from 'react';

function Header(){

    return(
    <header class="clearfix" >
             <div class="col span-1-of-4 logobox1">
                    
                
           </div>
             <div class="col span-1-of-4 logobox1">
                    <img src={process.env.PUBLIC_URL + '/images/logo/uidai_english_logo.svg'} alt="Lisbon"/>
                
           </div>
           <div class="col span-1-of-4 logobox2">
                    <img src={process.env.PUBLIC_URL + '/images/logo/aadhaar_english_logo.svg'} alt="Lisbon"/>
                
           </div>
           <div class="col span-1-of-4 logobox2">
                    
                
           </div>
          

       
    </header>);
}

export default Header;