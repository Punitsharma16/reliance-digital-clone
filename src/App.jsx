import { createContext, useState } from 'react';
import './App.css';
import { HomePage } from './Components/HomePage/home';
import { AppNavbar } from './Components/Navbar/AppNavbar';
import { Products } from './Components/ProductsData/products';
import { Contact } from './Components/Contact/contact';
import { FilteredData } from './Components/Navbar/filtersData';

export const ItemValContext = createContext();
export const SendValToProduct = createContext();
export const ValContextNavbar = createContext();
export const SendValToFilter = createContext();
function App() {
  const [itemVal,setItemVal] = useState('');
  const [navVal,setNavVal] = useState('');
  const [navVal2,setNavVal2] = useState('');
  console.log(navVal);
  console.log(itemVal);
  return (
    <div className="App">
      <ValContextNavbar.Provider value={{setNavVal,setNavVal2}}>
          <AppNavbar/>
      </ValContextNavbar.Provider>

      <ItemValContext.Provider value={{setItemVal}}>
          <HomePage/>
      </ItemValContext.Provider>
      <SendValToFilter.Provider value={{navVal,navVal2}}>
         <FilteredData/> 
      </SendValToFilter.Provider>
               
      <SendValToProduct.Provider value={{itemVal}}>
          <Products/>
      </SendValToProduct.Provider>
      <Contact/>
    </div>
  );
}

export default App;
