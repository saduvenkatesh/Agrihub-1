import "./Header.css"

export default function Header (){
    return(
        <header className="header">
            <img src="../src/assets/farm_land.png" alt="farm-land" width="150px" className="farm-landimg" />
            <h1>Agrihub</h1>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item"><a href="/Home">Home</a></li>
                    <li className="nav-list-item"><a href="/Login">Login</a></li>
                    <li className="nav-list-item"><a href="/Signup">Signup</a></li>
                </ul>
            </nav>
        </header>
    )
}
