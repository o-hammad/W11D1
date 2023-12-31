import {useEffect, useState} from "react";

function UserRegistration() {
    const [state, setState] = useState({
        name: "Please enter name",
        email: "email@domain.com",
        phoneNum: "Please enter phone number",
        phoneType: "Please select phone type",
        staff: "Please select",
        bio: "Please enter bio",
        emailNotifications: false
    })
    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        const errors = {};
        if(!state.name.length) errors['name'] = "Please enter your name";
        if(!state.email.includes('@')) errors['email']="Please enter a valid email";
        setValidationErrors(errors);
    }, [state])
    
    useEffect(() => {
        const errorDiv = document.getElementById("errors");
        // console.log(validationErrors);
        // const errors = Object.values(validationErrors);
        // errors.forEach((error) => {
        //     const errorMessage = document.createElement("p");
        //     errorMessage.innerText = error;
        //     errorDiv.appendChild(errorMessage);
        // })
        
        // errorDiv.appendChild
        // for(const key in Object.keys(validationErrors)) {
        //     // const newError = document.createElement("div")
        //     // newError.innerHTML = validationErrors[key];
        //     // errorDiv.appendChild(newError);
        // }    
        // errorDiv.appendChild(validationErrors);

        const errorMessage = JSON.stringify(validationErrors);
        errorDiv.innerHTML = errorMessage;
    })

    function resetState() {
        setState({
            name: "Please enter name",
            email: "Please enter email",
            phoneNum: "Please enter phone number",
            phoneType: "Please select phone type",
            staff: "Please select",
            bio: "Please enter bio",
            emailNotifications: false
        });
    }

    const handleChange = (incomingKey) => {
        return (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const newObj = Object.assign({}, state, {[incomingKey]: value })
        setState(newObj);
        };
    }
    
    const onSubmit = e => {
        // Prevent the default form behavior so the page doesn't reload.
        e.preventDefault();
      
        // Create a new object for the contact us information.
        const userRegInformation = {
          name: state.name,
          email: state.email,
          phoneNum: state.phoneNum,
          phoneType: state.phoneType,
          staff: state.staff,
          bio: state.bio,
          emailNotifications: state.emailNotifications,
          submittedOn: new Date()
        };
      
        // Ideally, we'd persist this information to a database using a RESTful API.
        // For now, though, just log the contact us information to the console.
        console.log(userRegInformation);

        resetState();
        setValidationErrors({});
      };

    return (
        <div>
            <h2>User Registration</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        name="name" 
                        type="text"
                        value={state.name}
                        onChange={handleChange("name")}
                    />

                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input name="email" 
                    type="text"
                    value={state.email}
                    onChange={handleChange("email")}
                    />
                </div>
                <div>
                    <label htmlFor="phoneNum">Phone Number:</label>
                    <input 
                        name="phoneNum" 
                        type="text"
                        value={state.phoneNum}
                        onChange={handleChange("phoneNum")}
                    />
                </div>
                <label htmlFor="phoneType">Phone Type:
                    <select 
                        name="phoneType" 
                        onChange={handleChange("phoneType")}
                        value={state.phoneType}>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </label>
                <div>
                    <label htmlFor="instructor">Instructor
                        <input 
                            type="radio"
                            name="staff"
                            value="instructor"
                            checked={state.staff === "instructor"}
                            onChange={handleChange("staff")}
                        />
                    </label>
                    <label htmlFor="student">Student
                        <input
                            type="radio"
                            name="staff"
                            value="student"
                            checked={state.staff === "student"}
                            onChange={handleChange("staff")} 
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" value={state.bio} onChange={handleChange("bio")}/>
                </div>
                <div>
                    <label htmlFor="emailNotifications">Sign Up For Email Notifications</label>
                    <input 
                        type="checkbox"
                        name="emailNotifications"  
                        checked={state.emailNotifications}
                        onChange={handleChange("emailNotifications")}
                    />
                </div>
                <button>Submit</button>
            </form>
            <div id="errors">

            </div>
        </div>
    );
}

export default UserRegistration;