import { useContext } from "react";
import { assetContext } from "./Grandpa/Grandpa";

const Sister = () => {
    const gift = useContext(assetContext);
    return (
        <div>
            <h4>Sister</h4>
            {
                gift && <p>Asset: {gift}</p>
            }
        </div>
    );
};

export default Sister;