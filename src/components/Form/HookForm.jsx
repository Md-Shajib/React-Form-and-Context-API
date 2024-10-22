import useInputState from "../Hooks/useInputState";

const HookForm = () => {
    const [name, handleNameChange] = useInputState('Md')
    const [email, handleEmailChange] = useInputState('')
    const [password, handlePasswordChange] = useInputState('')
    const [text, handleChangeText] = useInputState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, ' ', email, ' ', password, ' ', text)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="name" name="name" placeholder="Name"/> <br />
                <input onChange={handleEmailChange} type="email" name="email" placeholder="Email"/> <br />
                <input onChange={handlePasswordChange} type="password" name="password" placeholder="password"/> <br />
                <input onChange={handleChangeText} type="text" name="text" placeholder="Comment"/> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default HookForm;