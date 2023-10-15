import Header from "../components/header/Header"
import { Outlet } from 'react-router-dom'

const Main = () => {

    return (
        <div className="main-wraper">
            <Header/>

            <main className="main">
                <Outlet/>
            </main>
        </div>
    )
}

export default Main