import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Player from "./video"


function App() {
  return (
    <div className="App">
     
       <div>
       <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="images/quenchcravelogo.png" className='logoimg'alt="logo"/></a>
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
</div>
<div className='row'>
  <div className="col-6 logins">
   <p>Not Sign up Yet? click to create account</p> 
<button>
  Create account
</button>
<p>Already have an account? click to login/signin</p>
<button>Sign in</button>
<p> or log in with Google acct, click below</p>
<button>Google account</button>
  </div>
  <div className="col-6">
  <Player/>
  </div>
</div>
</div>
  );
}

export default App;
