import './signup.css'
import { Link } from 'react-router-dom';
function signup(){
    return(
    
        <div class="login-page-container row" >
        <div class="login-form-container col-6" >
            <div class="login-page-logo-container" ><img className="login-page-logo-img-container" src="https://res.cloudinary.com/muni/image/upload/fl_preserve_transparency/v1725352870/SNM/Circle_Monogram_Logo_2_msqjiq.jpg?_s=public-apps"></img></div>
            <div class="login-form-heading-container"><h2>Signup</h2></div><div   class="login-form-discription-container"><h3>Every journey beginning chart.</h3></div>
            <form onsubmit="userLogin(event)">
                <label class="login-label-container">Name</label><br></br>
                <input class="login-input-item" name="name" type="text" placeholder="Enter Your Name"></input><br></br>
                <label class="login-label-container">Email Id</label><br></br>
                <input class="login-input-item" name="emailId" type="text" placeholder="Enter Email Id"></input><br></br>
                <label class="login-label-container">Password</label><br></br>
                <input class="login-input-item" name="password" type="password" placeholder="Enter password"></input><br></br>
                <button class="login-submit-button-container" type="submit">Signup</button>
            </form>
            <div class="login-page-redirect-container">You  have an account? <Link to='/login'>Login</Link></div>
        </div>

        <div class="login-page-details-container col-6 ">
            <div class="login-page-details-heading-container">
                <h2>Want to become a professional software developer?<br></br> Then join this community</h2>
            </div>
            <div class="login-details-items-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg> 
                <div  class="login-details-text-container">Learn from the best coders in India</div>
            </div>
            <div class="login-details-items-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg> 
                <div class="login-details-text-container">Get referred to top product companies</div>
            </div>
            <div class="login-details-items-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg> 
                <div  class="login-details-text-container">Gamified learning god community.</div>
            </div>
            <div class="login-details-items-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg> 
                <div  class="login-details-text-container">Learn with ease: Live sessions + recorded theories</div>
            </div>
            <div class="login-details-items-container">        <img className="sekharlogo" src="https://res.cloudinary.com/muni/image/upload/fl_preserve_transparency/v1725352870/SNM/Circle_Monogram_Logo_2_msqjiq.jpg?_s=public-apps"></img>
            <div class="login-details-name-container">Munisekhar Udavalapati<div>developer Aleain</div></div></div>
            <br></br>
        </div>
       </div>

    )
}
export default signup;