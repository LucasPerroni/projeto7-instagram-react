const suggestion = [
    {name: "fotosfofasdegatosfofos", image: "gato.png", status: "Follows you"},
    {name: "aguildadm", image: "guilda.png", status: "Follows you"},
    {name: "canalschwarza", image: "schwarza.png", status: "Follows you"},
    {name: "ascronicasdewesley", image: "wesley.png", status: "New in Instagram"},
    {name: "animaizinhosfofosofc", image: "animais.png", status: "New in Instagram"}
]

export default function Aside() {
    return (
        <aside>
            <Profile />

            <div class="vertudo">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>

            {suggestion.map(
                ({ name, image, status }) => <Suggestion name={name} image={image} status={status} />
            )}

            <div class="sobre">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma</p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>

        </aside>
    )
}

function Profile() {
    return (
        <div class="princ">
            <img src="images/catana.png" alt="profile" />
            <div class="texto">
                <h1>catanacomics</h1>
                <h2>Catana</h2>
            </div>
        </div>
    )
}

function Suggestion({name, image, status}) {
    return (
        <div class="sugestao">
            <div class="perfil">
                <img src={`images/${image}`} alt="profile" />
                <div class="texto">
                    <h1>{name}</h1>
                    <h2>{status}</h2>
                </div>
            </div>
            <p>Follow</p>
        </div>
    )
}
