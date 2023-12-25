import { AddHolder } from "./AddHome/addHolder"
import { Images } from "./imageBar/imageBar";
import { ItemsRaw} from "../items/rawItems";
import { ImagesData } from "../items/images/otherImages";
import { MixItems } from "../items/MixItems/mixImages";

export const HomePage = ()=>{
    
    return(
        <main>
            <div className="hide">
            <Images/>
            </div>
            <ItemsRaw value={'mobile'}/>
            <ItemsRaw value={'laptop'}/>
            <AddHolder/>
            <ItemsRaw value={'refrigerator'}/>
            <ItemsRaw value={'audio'}/>
            <ImagesData/>
            <ItemsRaw value={'kitchenappliances'}/>
            <ItemsRaw value={'tablet'}/>
            <MixItems/>
        </main>
    )
}