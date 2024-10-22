import Father from "./Father/Father";
import "../Grandpa/Grandpa.css";
import Uncle from "./Uncle/Uncle";
import Aunti from "./Aunti/Aunti";
import { createContext, useState } from "react";

export const assetContext = createContext('Gold')
export const moneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000)
  return (
    <div className="grandpa ">
      <h3>Grandpa</h3>
      <p>Money: {money}</p>
        <moneyContext.Provider value={[money, setMoney]}>
            <assetContext.Provider value="Gold">
                <div className="flex">
                    <span className="grandpa">
                    <Father></Father>
                    </span>
                    <span className="grandpa">
                    <Uncle></Uncle>
                    </span>
                    <span className="grandpa">
                    <Aunti></Aunti>
                    </span>
                </div>
            </assetContext.Provider>
        </moneyContext.Provider>
    </div>
  );
};

export default Grandpa;
