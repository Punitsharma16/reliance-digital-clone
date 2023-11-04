import { useState } from "react";
import { AddHolder } from "./AddHome/addHolder"
import ImageSlider from "./imageSlider"
import { SearchData } from "./searchData"

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
            <SearchData searchVal={search} setProductID={setProductID}/>
            <AddHolder/>
        </main>
    )
}