import { Outlet } from "react-router-dom"
import { AppNavbar } from "./AppNavbar"
import { Footer } from "../Footer/footer"

export const NavbarOutlet = ()=>{
    return(
        <main>
            <AppNavbar/>
            <Outlet/>
            <Footer/>
        </main>
    )
}