
const Form = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="name" name="name" placeholder="Name"/> <br />
                <input type="email" name="email" placeholder="Email"/> <br />
                <input type="phone" name="phone" placeholder="Phone"/> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Form;