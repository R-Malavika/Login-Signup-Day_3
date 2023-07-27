import React from "react";
import { Link } from 'react-router-dom';

import './footer.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  color:white;  
  cursor: pointer;
  text-decoration:none;
`;
class Footer extends React.Component {
  render() {
    return (
      <div class="contact-area" id="contact">
        <div class="container-foot">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">
                    <StyledDiv>
                    <a href="/tasks" style={{"text-decoration":"none"}} className="custom-link">Stellar</a>
                  </StyledDiv>
                        <p className="pfoot">Want to save time? Our task management has got your back! Get on top of your tasks with Stellar. Stellar app, Stellar performances! </p>
                        <div class="hr"></div>
                        <h6>11 th cross street coimbatore , TamilNadu.</h6>
                        <h6>+91 9654123785<span>|</span>+91 9356124877</h6>
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
