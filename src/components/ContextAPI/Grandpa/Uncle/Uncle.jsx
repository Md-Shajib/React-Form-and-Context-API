import { useContext } from "react";
import { moneyContext } from "../Grandpa";

const Uncle = () => {
    const [money, setMoney] = useContext(moneyContext)
    return (
        <div>
            <p>money: {money}</p>
            <h4>Uncle</h4>
            <button onClick={()=>{setMoney(money + 1000)}}>Add 1000</button>
        </div>
    );
};

export default Uncle;