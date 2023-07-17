import React from "react";

import './footer.css'
class Footer extends React.Component {
  render() {
    return (
      <div class="contact-area" id="contact">
        <div class="container-foot">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">
                       
                        <p className="pfoot">Why waste time creating project plans and new tasks or task lists every time you start a new project?  you can save any task list as a Template to instantly add it to future projects. </p>
                        <div class="hr"></div>
                        <h6>11 th cross street coimbatore , TamilNadu.</h6>
                        <h6>+91 9654123785   | <span></span> +91 9356124877</h6>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-github"></i></a></li>
                              
                                <li><a class="hover-target" href=""><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
  
    <footer>
        <p>Copyright &copy; 2023 All Rights Reserved.</p>
    </footer>
    </div>
    );
  }
}
export default Footer;
