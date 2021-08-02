import { Link } from "react-router-dom";

const Header = (props) => {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
        
    };

    return (
        <>
        
        <h1>Marialaina Preciado </h1>
        <h2>Software Engineer</h2>
        <nav style={navStyle}>
            <Link to="/">
                <div>HOME</div>
            </Link>
            {/* <Link to="/about">
                <div>ABOUT</div>
            </Link> */}
            <Link to="/projects">
                <div>PROJECTS</div>
            </Link>
            <Link to="/work">
                <div>WORK</div>
            </Link>
        </nav>
        </>
    );
}

export default Header;