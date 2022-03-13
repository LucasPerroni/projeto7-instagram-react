const icons = [
    "home",
    "search-outline",
    "add-circle-outline",
    "heart-outline",
    "person-outline"
]

export default function Footer() {
    return (
        <footer>
            {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
        </footer>
    )
}
