import React, {useState} from 'react';
import { auth } from './firebase';
import "./Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const register = () => {
        if (!name) {
            return alert("Please enter full name");
        }
    };
    const loginToApp = (e) => {
        e.preventDefault();
    };
    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
            <form action="">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name (required if registering)" type="text" />
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile Pic Url (optional)" type="text" />
                <input value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Email" type="email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Password" type="password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className="login__register" onClick={register} >Register Now</span>
            </p>
        </div>
    );
}

export default Login
