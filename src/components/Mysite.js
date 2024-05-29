import React from "react";
import { ReactDOM } from "react";

export default function LoginPage(){
    const [formData , setFormData] = React.useState({
        fullname :"",
        email:"",
        phonenumber:"",
        password:"",
        verifypassword:"",
        signupnewsletter: true
    })
    function handleChange(event){
        // console.log("changes made")
        const{name,type,value,checked}=event.target
        setFormData(prevFormData =>({
            ...prevFormData,
            [name]:type==="checkbox" ? checked : value
        }))
    }
    function handleSubmit(event){
        event.preventDefault()
        if(formData.password===formData.verifypassword){
            console.log("Congratulations you have signed up...")
        }else{
            console.log("Passwords do NOT match...")
            return
        }
        if(formData.signupnewsletter){
            console.log("You have signed up to the news letter...")
        }
    }
    return(
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1>Hello, Welcome to my site</h1>
                    <input 
                        className="form-data"
                        placeholder="Full Name"
                        name="fullname"
                        value={formData.fullname}
                        type="text"
                        onChange={handleChange}
                    />
                    <input
                        className="form-data"
                        placeholder="Email"
                        value={formData.email}
                        name="email"
                        type="email"
                        onChange={handleChange}
                    />
                    <input
                        className="form-data"
                        placeholder="Contact number"
                        value={formData.phonenumber}
                        name="phonenumber"
                        type="tel" pattern="^-?[0-9]\d*\.?\d*$"
                        onChange={handleChange}
                    />
                    <input
                        className="form-data"
                        placeholder="Password"
                        value={formData.password}
                        name="password"
                        type="password"
                        onChange={handleChange}
                    />
                    <input
                        className="form-data"
                        placeholder="Confirm Password"
                        value={formData.verifypassword}
                        name="verifypassword"
                        type="password"
                        onChange={handleChange}
                    />
                    <div className="newsletter-form">
                        <input
                            id="newsletter"
                            name="signupnewsletter"
                            type={"checkbox"}
                            onChange={handleChange}
                            checked={formData.signupnewsletter}
                        />
                        <label htmlFor="newsletter">Do you want to signup to newsletter</label>
                    </div>
                    <button className="form-submit">Sign Up</button>
                </form>
            </div>
    )
}