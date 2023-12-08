import { useState } from "react";
import { AddHolder } from "./AddHome/addHolder"
import ImageSlider from "./imageSlider"
import { SearchData } from "./searchData"
import { Images } from "./imageBar";
import { Laptop } from "../items/laptops";
import { Mobile } from "../items/mobile";
import { Refrigerator } from "../items/Refrigerators";
import { SountdItems } from "../items/soundItems";
import { ImagesData } from "../items/images/otherImages";
import { Kitchenappliances } from "../items/kitchenAppliances";
import { Tablet } from "../items/tablet";
import { MixItems } from "../items/MixItems/mixImages";

export const HomePage = ({search,setProductID})=>{
    console.log(search);
    // const [state,setState] = useState(true);
    // if(search === 'val' || search === ''){
    //     setState(true);
    // }else{
    //     setState(false);
    // }
    return(
        <main>
            <ImageSlider/>
            <Images/>
            <Mobile/>
            <Laptop/>
            <SearchData searchVal={search} setProductID={setProductID}/>
            <AddHolder/>
            <Refrigerator/>
            <SountdItems/>
            <ImagesData/>
            <Kitchenappliances/>
            <Tablet/>
            <MixItems/>
        </main>
    )
}