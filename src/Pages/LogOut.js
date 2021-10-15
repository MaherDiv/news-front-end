import React from 'react';
import './LogOut.css';


 const Logout =({onRouteChange, isSignedIn}) => {

    if(isSignedIn){
        return(
            <nav class="logout-design">
            <p onClick={() => onRouteChange('signout')}  type="submit" class="button-logout" > تسجيل خروج</p>
            </nav>
        );
    } else {
        return (
            <nav class="logout-design">
            <p onClick={() => onRouteChange('logIn')}  type="submit" class="button-logIn" > تسجيل دخول</p>
            <p onClick={() => onRouteChange('SignUp')}  type="submit" class="button-register" >   تسجيل جديد</p>
            </nav>
        );
    }
 }
     

 export default Logout;

