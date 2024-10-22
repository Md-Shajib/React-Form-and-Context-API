
const ReusableForm = ({submitBtnText='Submit', getData, children}) => {

    const handleFormSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        }
        getData(data)
    }
    return (
        <div>
            <h2>{children}</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="name" name="name" placeholder="Name"/> <br />
                <input type="email" name="email" placeholder="Email"/> <br />
                <input type="phone" name="phone" placeholder="Phone"/> <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;