import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState('MD ')
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handlePasswordChange = e => {
        const pass = e.target.value;
        setPassword(pass)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()

        if(password.length < 6){
            setError("Password must be or greater than 6 character");
        }else{
            setError('');
            console.log(name, " ", email, " ", password)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="name" name="name" placeholder="Name"/> <br />
                <input onChange={handleEmailChange} type="email" name="email" placeholder="Email"/> <br />
                <input onChange={handlePasswordChange} type="password" name="password" placeholder="Password"/> <br />
                <input type="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;