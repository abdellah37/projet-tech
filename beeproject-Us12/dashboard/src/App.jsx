import React from 'react'
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import Ruchers from './pages/Ruchers';
import Visites from './pages/VisitesPage'
import AddRucherPage from './pages/AddRucherPage'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import FaireVisiteTest from './pages/FaireVisiteTest';
import RedirectedPage from './pages/RedirectedPage';
import CadrePage from './pages/CadrePage';
import ReinePage from './pages/ReinePage';


const App = () => {
    return (
        <Router>
            
            <Route exact path="/" component={SignInPage} />
                
            <Route exact path="/Ruchers" component={Ruchers} />

             <Route exact path="/HomePage" component={HomePage}/>

            <Route exact path='/Visites' component={Visites}/>

            <Route exact path='/Fv' component={FaireVisiteTest}/>

            <Route exact path='/AddRucher' component={AddRucherPage}/>

            <Route exact path='/Redirected' component={RedirectedPage}/>

            <Route exact path='/Cadre' component={CadrePage}/>

            <Route exact path='/Reine' component={ReinePage}/>
            
               
        </Router>
    )
}

export default App;


//<Route exact path="/test" component={TestPage} />
            //<Route exact path="/" component={HomePage} />
// function
//function fun(){

//}
// arrow function anonymous
//() => {

//}
// const fun1 = () => {

// }
// class test {
//     constructor() {
//         this.get = this.get.bind(this)
//     }

//     get(){ // we need to bind 
//         this 
//     }
//     set = () => {// by default binded
//         this
//     }

// }