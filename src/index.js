import ReactDOM from 'react-dom'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

const app = App()
const local = document.querySelector(".root")

ReactDOM.render(app, local)
