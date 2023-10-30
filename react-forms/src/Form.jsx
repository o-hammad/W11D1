import {useState} from "react";

function userRegistration() {
    const [state, setState] = useState({
        Name: "Please enter name",
        Email: "Please enter email",
        PhoneNum: "Please enter phone number",
        PhoneType: "Please select phone type",
        Staff: "Please select",
        Bio: "Please enter bio",
        EmailNotifications: false
    })

    const handleChange = (event) => {
        const value =
            event.target.type === "checkbox" ? event.target.checked : event.target.value;
            setState({
                ...state,
                [event.target.name]: value
            });
    };
    
    return (
        <div>
            <h2>User Registration</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        name="name" 
                        type="text"
                        value={state.Name}
                        onChange={handleChange}/>

                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input name="email" 
                    type="text"
                    value={state.Email}
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="phoneNum">Phone Num:</label>
                    <input 
                        name="phoneNum" 
                        type="text"
                        value={state.PhoneNum}
                        onChange={handleChange}/>
                </div>
                <label htmlFor="phoneType">Phone Type:
                    <select 
                        name="phoneType" 
                        onChange={handleChange}
                        value={state.PhoneType}>
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
                            checked={state.Staff === "instructor"}
                            onChange={handleChange}/>
                    </label>
                    <label htmlFor="student">Student
                        <input
                            type="radio"
                            name="staff"
                            value="student"
                            checked={state.Staff === "student"}
                            onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" value={state.Bio} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="emailNotifications">Sign Up For Email Notifications</label>
                    <input 
                        type="checkbox"
                        name="emailNotifications"  
                        checked={state.EmailNotifications}
                        onChange={handleChange}/>
                </div>
            </form>

        </div>
    );
}

export default userRegistration;