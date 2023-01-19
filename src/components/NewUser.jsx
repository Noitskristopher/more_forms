import React, {useState} from "react";
import './NewUser.css'

const NewUser = (props) => {

    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleUser = (e) => {
        e.preventDefault()
        console.log(`New User: ${JSON.stringify(user)}`)
        setHasBeenSubmitted(true)
    }

    const submitted = (e) => {
        if ( hasBeenSubmitted ) {
            return "Thank You For Submitting the Form!";
        } else {
            return "Welcome, Please Submit Form";
        }
    };

    return (
        <>
        <div className='d-flex'>
            <form onSubmit={ handleUser }>
                <h4>{ submitted() }</h4>
                <div className="child">
                    <label>First Name: </label>
                    <input type="text" name="firstName" onChange={ onChangeHandler }/>

                    {
                        user.firstName.length < 1 ?
                        <p>First name must be 2 or more characters</p>:
                        null
                    }

                </div>
                <div className="child">
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={ onChangeHandler}/>
                </div>

                    {
                        user.lastName.length < 1 ?
                        <p>Last name must be 2 or more characters</p>:
                        null
                    }

                <div className="child">
                    <label>Email: </label>
                    <input type="text" name="email" onChange={ onChangeHandler }/>
                </div>

                    {
                        user.email.length < 4 ?
                        <p>Email must be 5 or more characters</p>:
                        null
                    }

                <div className="child">
                    <label>Password: </label>
                    <input type="password" name="password" onChange={ onChangeHandler }/>
                </div>

                    {
                        user.password.length < 7 ?
                        <p>Password must be 8 or more characters</p>:
                        null
                    }

                <div className="child">
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={ onChangeHandler }/>
                </div>

                    {
                        user.password !== user.confirmPassword ?
                        <p>Password must match</p>:
                        null
                    }

                    <button>Add User</button>
            </form>
        </div>
        </>
    )
}

export default NewUser;