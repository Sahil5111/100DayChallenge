import SelfImage from "../assets/SelfImage.jpg"

function Header() {
    return (
        <header>
            <img src={SelfImage} alt="selfimage"  className="container  Header__image"/>
            <h1>Sahil Singh</h1>
        </header>
    )
}

export default Header