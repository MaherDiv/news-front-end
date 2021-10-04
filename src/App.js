import React from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from './Pages/home' 
import Services from './Pages/Services' 
import './Pages/home.css';



function App() {
  return (
    <div className="App">


<BrowserRouter >
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Services' exact component={Services}/>
    
                
      </Switch>
</BrowserRouter>


     
      
    </div>
  );
}

export default App;
