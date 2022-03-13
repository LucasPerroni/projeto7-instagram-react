const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

export default function Header() {
    return (
        <header>
            <div class="topo">
                <Logo />

                <div class="pesquisar">
                    <p>Pesquisar</p>
                </div>
        
                <div class="icones">
                    {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
                </div>

                <CellHeader />
            </div>
        </header>
    )
}

function Logo() {
    return (            
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <span></span>
            <img src="images/logo.png" alt="logo"/>
        </div>
    )
}

function CellHeader() {
    return (
        <div class="topo-celular">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="images/logo.png" alt="logo"/>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    )
}
