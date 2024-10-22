import Brother from "../../Brother";
import Myself from "../../Myself";
import Sister from "../../Sister";
import '../Grandpa.css'

const Father = () => {
    return (
        <div className="">
            <h4>Father</h4>
            <div className="flex">
                <span className="grandpa">
                    <Myself></Myself>
                </span>
                <span className="grandpa">
                    <Brother></Brother>
                </span>
                <span className="grandpa">
                    <Sister></Sister>
                </span>
            </div>
        </div>
    );
};

export default Father;