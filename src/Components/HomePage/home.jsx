import { AddHolder } from "./AddHome/addHolder"
import { Images } from "./imageBar";
import { Laptop } from "../items/laptops";
import { Mobile } from "../items/mobile";
import { Refrigerator } from "../items/Refrigerators";
import { SountdItems } from "../items/soundItems";
import { ImagesData } from "../items/images/otherImages";
import { Kitchenappliances } from "../items/kitchenAppliances";
import { Tablet } from "../items/tablet";
import { MixItems } from "../items/MixItems/mixImages";

export const HomePage = ({search})=>{
    // console.log(search);
    // const [state,setState] = useState(true);
    // if(search === 'val' || search === ''){
    //     setState(true);
    // }else{
    //     setState(false);
    // }
    return(
        <main>
            {/* <ImageSlider/> */}
            <div className="hide">
            <Images/>
            </div>
            <Mobile/>
            <Laptop/>
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