import { Outlet } from "react-router-dom"
import { AppNavbar } from "./AppNavbar"
import { Footer } from "../Footer/footer"
import ImageSlider from "../HomePage/imageSlider"
// import { SearchData } from "../HomePage/searchData"

export const NavbarOutlet = ({search,setProductID})=>{
    return(
        <main>
            <AppNavbar/>
            <ImageSlider/>
            {/* <SearchData searchVal={search} setProductID={setProductID}/> */}
            <Outlet/>
            <Footer/>
        </main>
    )
}