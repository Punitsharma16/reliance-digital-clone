import { Outlet } from "react-router-dom"
import { AppNavbar } from "./AppNavbar"

export const NavbarOutlet = ()=>{
    return(
        <main>
            <AppNavbar/>
            <Outlet/>
        </main>
    )
}