import { Outlet } from "react-router-dom"
import { AppNavbar } from "./AppNavbar"
import { Footer } from "../Footer/footer"
import ImageSlider from "../HomePage/autoImageChange/imageSlider"

export const NavbarOutlet = ()=>{
    return(
        <main>
            <AppNavbar/>
            <ImageSlider/>
            <Outlet/>
            <Footer/>
        </main>
    )
}