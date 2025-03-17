import '../header/Header.css';

function Header() {
    return (
        <header>
            <div className="left">BVELOSO&CO</div>
            <div className="center">2025</div>
            <ul className="right">
                <li><a href="#home">HOME</a></li>
                <li><a href="#align-inf">HISTÓRIA</a></li>
                <li><a href="#faixa-cards">PAPÉIS</a></li>
                <li className="separator">|</li>
                <li>6</li>
            </ul>
            <div className="pink-line"></div>
        </header>
    );
}

export default Header;
