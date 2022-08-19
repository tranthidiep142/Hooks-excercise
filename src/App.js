// import logo from './logo.svg';
// import './App.css';
import {useState} from "react";
import {PreviewAvatar} from './useEffect';

function App() {
    const [toggle, setToggle] = useState()

    return (
        <div style={{padding: 40}}>
            <button
                onClick={() => setToggle(!toggle)}
            >
            Mounted/Unmounted
            </button>
            {toggle && <PreviewAvatar />}
        </div>
    )
}

export default App;
