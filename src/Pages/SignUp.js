import React from 'react';
import '../Pages/SignUp.css';

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         email:'',
         password:'',
         name:''
        }
    }

    onNameChange = (event) =>{
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) =>{
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) =>{
       this.setState({password: event.target.value})
   }


   onSubmitSignIn = () => {
    fetch('http://localhost:8080/register',{

        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            email: this.state.email,
            password : this.state.password,
            name: this.state.name
        })
    })
    .then(response => response.json())
    .then(user => {
        if(user.id) {
            this.props.loadUser(user);
            this.props.onRouteChange('home');
        }
    })    
    }

    render() {
    const {onRouteChange} = this.props;        
    return(
    <div>
    <div class="navbars">

    <div class="menu">
    <h3 class="logo">الجزيرة<span>نت</span></h3>
    </div>
    </div>

    <div class="logIn-back">
    <div class="logIn-container">
    <div class="log-inBox">
    <div class="top-container">
    <h1> انشاء حساب</h1>
    <h2> الرجاء التسجيل للدخول  </h2>
    </div>
    <div class="Sign-input">

    <div class="log-content">  
    <input class="log-placeholder" type="text"  name="name" id="name" onChange={this.onNameChange} />  
    <input class="log-placeholder" type="email" name="email-address" id="email" onChange={this.onEmailChange}/>
    <input  class="log-placeholder" type="password" name="password" id="password"  onChange={this.onPasswordChange}/>
    </div>
    
    </div>


    <div class="log-submit">
    <input onClick={this.onSubmitSignIn} className='log-btn' type='submit' value='سجل'/>
    <a class="sign-btn1"> هل لديك حساب؟</a> 
    <p onClick={() => onRouteChange('logIn')} class="register-btn"> ادخل الى حسابك</p> 
    </div>
    
    </div>

    </div>
   

    </div>
    </div>

    );
}
}

export default SignUp;