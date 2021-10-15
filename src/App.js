import React, { Component} from 'react';
import { BrowserRouter , Redirect,  Switch, Route} from 'react-router-dom';
import Home from './Pages/home' 
import LogIn from './Pages/logIn'
import SignUp from './Pages/SignUp';
import Logout from './Pages/LogOut' 
import Welcome from './Pages/welcome' 
import Services from './Pages/Services' 




const initialState = {
    route:'logIn',
    isSignedIn: false,
    user:{
      id:'',
      name: '',
      email:'' ,
      entries: 0,
      joined: '' 
    }
  }



class App extends Component{

  constructor() {
    super();
    this.state =initialState; 
  }


loadUser = (data) =>{
  this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email ,
        entries: data.entries,
        joined: data.joined
    
  }})
}

  

 onRouteChange = (route) =>{
   if(route === 'signout'){
     this.setState(initialState)
   } else if (route === 'home') {
     this.setState({isSignedIn: true})
   }
   this.setState({route: route})
 }


render(){
  return (
<div className="App"> 

<Logout isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/> 
<Welcome isSignedIn={this.state.isSignedIn} name={this.state.user.name}/>
{this.state.route === 'home' 
? <div>

  
<BrowserRouter >
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Services' exact component={Services}/>
      <Route path='/SignUp' exact component={SignUp}/>
      <Route path='/LogIn' exact component={LogIn}/>
      <Route path='/Welcome' exact component={Welcome} render={() => <Redirect to="/" />}/>
                
      </Switch>
</BrowserRouter>
</div>
: (
  this.state.route === 'logIn'
? <LogIn loadUser={this.loadUser}  onRouteChange={this.onRouteChange}/>
: <SignUp  loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
)
}
</div>

   )
}
}


export default App;
