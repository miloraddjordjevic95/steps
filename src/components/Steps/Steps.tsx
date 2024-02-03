import stylesSteps from "./Steps.module.css";
import stylesNumber from "../Number/Number.module.css"
import {Button, Number} from "../index.ts";
import {useState} from "react";

type TMessages = [string, string, string];

const messages: TMessages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function Steps(): JSX.Element {
    const [currentNum, setCurrentNum] = useState<number>(1);

    function decreaseNumHandler(): void {
        if (currentNum > 1) setCurrentNum((curr) => curr - 1);
    }

    function increaseNumHandler(): void {
        if (currentNum < 3) setCurrentNum((curr) => curr + 1);
    }

    return (
        <div className={stylesSteps.container}>
            <div className={stylesSteps.numbersContainer}>
                <Number num={1} className={`${stylesNumber.number} ${currentNum >= 1 ? stylesNumber.active : ""}`} />
                <Number num={2} className={`${stylesNumber.number} ${currentNum >= 2 ? stylesNumber.active : ""}`} />
                <Number num={3} className={`${stylesNumber.number} ${currentNum >= 3 ? stylesNumber.active : ""}`} />
            </div>
            <div className={stylesSteps.message}>
                <h3>STEP {currentNum}</h3>
                <h4 style={{marginTop: 10}}>{messages[currentNum - 1]}</h4>
            </div>
            <div className={stylesSteps.buttons}>
                <Button onClick={decreaseNumHandler}>
                    <span>👈</span>
                    Previous
                </Button>
                <Button onClick={increaseNumHandler}>
                    Next
                    <span>👉</span>
                </Button>
            </div>
        </div>
    );
}

export default Steps;