import { Link } from "react-router-dom";

const NaVBar = () => {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/list">Table</Link></li>
                <li><Link to="/form">Form</Link></li>
            </ul>
        </header>
    );
  }
  
  export default NaVBar;
  