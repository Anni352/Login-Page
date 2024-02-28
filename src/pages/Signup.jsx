import {useState} from 'react';
import {Link} from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../firebase";

export default function Signup() {
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);
  
  function handleSubmit(event){
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    if(data.password !== data['confirm-password']){
      setPasswordsAreNotEqual(true);
      return;
    }
    else{
      setPasswordsAreNotEqual(false);
    }

    const modifiedData = {
      name: `${data['first-name']} ${data['last-name']}`,
      email: data.email,
      password: data.password,
    };

     console.log(modifiedData);
    /*
     createUserWithEmailAndPassword(auth, modifiedData.email, modifiedData.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
      */
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div id="auth-inputs">
        <div className="controls">
          <h2>Welcome on board!</h2>
          <p>We just need a little bit of data from you to get you started 🚀</p>

          <div>
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" />
          </div>

          <div>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
          
          <hr />
          
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" required minLength={6}/>
          </div>

          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input id="confirm-password" type="password" name="confirm-password" />
            <div className="control-error">{passwordsAreNotEqual && <p>Passwords Must Match..</p>}</div>
          </div>
          
        </div>
        
        <div className="actions">
          <button type="button" className="text-button">
            <Link to="/">Go back to Login</Link>
          </button>
            <button type="submit" className="button">Sign up</button>
        </div>
      </div>
    </form>
  );
}