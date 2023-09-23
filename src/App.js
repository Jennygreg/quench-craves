import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Animatedimg from "./components/Animatedimg.js"

function App() {
 
  return (
    <div className="App">
     
       <div>
       <nav class="navbar navbar-expand-lg sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="" className='logoimg'alt="logo"/></a>
    <button class="navbar-toggler shrinkbtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse d-flex justify-content-end d-none d-sm-none"  id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a class="nav-link" aria-current="page" href="#">Create Account</a>
        <a class="nav-link" href="#">Sign in</a>
        <a class="nav-link" href="#">Contact</a>
        
      </div>
    </div>
   
  </div>
</nav>
</div >


<div className='orderWrapper'>
<div id="overlayer">
  <div className='textWrapper'><h1>Make an Order</h1>
   <p>Not Sign up Yet? click to create account</p> 
<button className='homebtn create'>
  Create Account
</button>
<p>Already have an account? click to login/signin</p>
<button className='homebtn signin'>Login/Sign in</button>
<p> or log in with Google account, click below</p>
<button className='homebtn google'>Google account</button></div>
<p className="ani" >The Spot for Satisfaction...!</p>
  </div> 

<div className='row'>

  <div className="col-6 logins">
   
  </div>


  <div className="col-6 ">
<Animatedimg className="aniImg"/>
  </div>
</div>
</div>
</div>
  );
}

export default App;
