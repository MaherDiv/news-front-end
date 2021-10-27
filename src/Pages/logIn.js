import React  from 'react'
import '../Pages/logIn.css';


 class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signInEmail:'',
            signInPassword:''
        }
    }

    

    onEmailChange = (event) =>{
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) =>{
       this.setState({signInPassword: event.target.value})
   }

   

   onSubmitSignIn = () => {
    fetch('https://damp-hollows-27928.herokuapp.com/signin',{
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            email: this.state.signInEmail,
            password : this.state.signInPassword
        })
    })
    .then(response => response.json())
    .then(user => {
        if (user.id) {
            this.props.loadUser(user);
            this.props.onRouteChange('home');
        } 
          
      })  
    }

     render() {
         
         const {onRouteChange} = this.props;
        return(
            <main>
            <div class="navbars">

            <div class="menu">
            <h3 class="logo">الجزيرة<span>نت</span></h3>
            </div>
            </div>

            <div class="logIn-back">
            <div class="logIn-container">
            <div class="log-inBox">
            <div class="top-container">
            <h1> أهلا بك من جديد </h1>
            <h2> الرجاء الدخول </h2>
            </div>
            
            
            <div class="log-input">
            
            <div class="log-content">    
            
            <input class="log-placeholder" type="email" id="email"  onChange={this.onEmailChange}/>
            <input  class="log-placeholder" type="password" id="password" onChange={this.onPasswordChange}/>
            </div>
           
            </div>
        
        
            <div class="log-submit">
            <input onClick={this.onSubmitSignIn} class="log-btn" type="submit" value="دخول" />

            <a class="sign-btn1"> ليس لديك حساب ؟</a> 
            <p onClick={() => onRouteChange('SignUp')} class="register-btn"> سجل الأن</p> 
            
          
            </div>
           
            </div>
        
            </div>
            
           
        
            </div>
            
                
            </main>
            );
       }
     }

 export default LogIn;

