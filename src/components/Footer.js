import React from 'react';

function Footer(){

    return( 
        <footer class="footer-div">
            <div class="footer-container">
                <div class="col span-1-of-4 contact">
                    <h4>Contact Us</h4>
                    <button class="foot-btn">Toll free:1947</button>
                    <button class="foot-btn">help@uidai.gov.in</button>
                    <h4>Follow Us</h4>
                    <div class="social-icons">
                        <img src={process.env.PUBLIC_URL + '/images/social-icons/Facebook1.png'} alt="Lisbon" /> 
                        <img src={process.env.PUBLIC_URL + '/images/social-icons/Twitter1.png'} alt="Lisbon" /> 
                        <img src={process.env.PUBLIC_URL + '/images/social-icons/Instagram.png'} alt="Lisbon" /> 
                        <img src={process.env.PUBLIC_URL + '/images/social-icons/youtube1.png'} alt="Lisbon" /> 
                        <img src={process.env.PUBLIC_URL + '/images/social-icons/Linkedin.png'} alt="Lisbon" /> 
                    </div>
                    

                </div> 
                <div class="col span-1-of-4 ">
                    <h4>UIDAI Head Office</h4>
                    <h5>Unique Identification Authority of India</h5>
                    <h5>Government of India (GoI)</h5>
                    <p>Bangla Sahib Road, Behind Kali Mandir, Gole Market,</p>
                    <p>New Delhi - 110001</p>

                    <h4>UIDAI Regional Office, Delhi</h4>

                    <p>Ground Floor, Pragati Maidan Metro Station, Pragati Maidan,</p>
                    <p> New Delhi-110001</p>


                </div> 
                <div class="col span-1-of-4 docs">
                    <h5>Website Policy</h5>
                    <h5>Terms & Conditions</h5>
                    <h5>Privacy Policy</h5>
                    <h5>Hyperlinking Policy</h5>
                    <h5>Copyright Policy</h5>
                    <h5>Disclaimer</h5>
                </div> 
                <div class="col span-1-of-4 govlinks">

                    <h4>Government of india</h4>
                    <h5>My Gov</h5>
                    <h5>National Portal of India</h5>
                    <h5>Digital India</h5>
                    <h5>GST.gov.in</h5>
                    <h5>DBT Bharat</h5>
                </div> 
                
            </div>

        </footer>

);
}

export default Footer;