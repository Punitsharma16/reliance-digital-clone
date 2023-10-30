import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SendValToFilter } from "../../App";

export const FilteredData = ()=>{
    const [yourData,setYourData] = useState([]);
    const {navVal,navVal2} = useContext(SendValToFilter);
    const val = navVal;
    const val2 = navVal2;
    console.log(val);
    const fetchData = async (val) => {
        try {
          const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${val}","brand":"${val2}"}&limit=100`, {
            headers: {
              projectID: 'f2wxvt7cmknp',
            },
          });
      
          // Handle the response data here
          console.log(response.data.data);
          setYourData(response.data.data);
        } catch (error) {
          // Handle any errors here
          console.error(error);
          console.log(val);
        }
      };
      
          useEffect(()=>{
              fetchData(val,val2);
          },[val,val2])
    return(
        <main>hello</main>
    )
}