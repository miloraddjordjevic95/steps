import styles from "./App.module.css";
import {Steps} from "./components";
import {useState} from "react";

function App(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <>
            <div className={styles.close} onClick={() => setIsOpen((curr) => !curr)}>&#9747;</div>
            {isOpen && <Steps />}
        </>
    );
}

export default App;