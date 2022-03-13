const stories = [
    {name: "9gag", image: "9gag_logo.png"},
    {name: "clannad_official_", image: "clannad.png"},
    {name: "meowed", image: "meowed.png"},
    {name: "barked", image: "barked.png"},
    {name: "respondeai", image: "respondeai.png"},
    {name: "ascronicasdewesley", image: "wesley.png"},
    {name: "canalschwarza", image: "schwarza.png"},
    {name: "aguildadm", image: "guilda.png"},
    {name: "animaizinhosfofosofc", image: "animais.png"}
]

export default function Stories() {
    return (
        <div class="stories">
                    
            <div class="stories-img">

                {stories.map(
                    ({name, image}) => <Storie name={name} image={image}/>
                )}

            </div>

            <div class="stories-seta">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>

        </div>
    )
}

function Storie({name, image}) {
    return (
        <div class="stories-img-total">
            <div class="stories-img-img">
                <img class="st-background" src="images/stories_background.jpg" alt="stories background"/>
                <img class="st-img" src={`images/${image}`} alt="stories" />
            </div>
            <p>{name}</p>
        </div>
    )
}
