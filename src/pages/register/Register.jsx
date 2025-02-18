import "./Register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
               <h3 className="loginLogo">ClassyConnect</h3>
               <span className="loginoDesc">
                Connect with friends and the world around on classyconnect
               </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
                 <input placeholder="Username" className="loginInput" />
                 <input placeholder="Email" className="loginInput" />
                 <input placeholder="Password" className="loginInput" />
                 <input placeholder="Password Again" className="loginInput" />
                 <button className="loginButton">Sign Up</button>
                 <button className="loginRegisterButton">
                  log into Account
                 </button>
              </div>  
            </div>
        </div>
    </div>
  )
}
