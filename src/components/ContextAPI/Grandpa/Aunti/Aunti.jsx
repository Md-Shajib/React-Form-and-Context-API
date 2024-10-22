import { useContext } from "react";
import { moneyContext } from "../Grandpa";

const Aunti = () => {
    const [money, setMoney] = useContext(moneyContext)
    return (
        <div>
            <p>Money: {money}</p>
            <h4>Aunti</h4>
            <button onClick={()=>{setMoney(money + 1000)}}>Add 1000</button>
        </div>
    );
};

export default Aunti;