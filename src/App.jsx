import { createContext, useState } from 'react';
import './App.css';
import { HomePage } from './Components/HomePage/home';
import { AppNavbar } from './Components/Navbar/AppNavbar';
import { Products } from './Components/ProductsData/products';
import { Contact } from './Components/Contact/contact';
import { FilteredData } from './Components/Navbar/filtersData';
import { Route, Routes } from 'react-router-dom';
import { NavbarOutlet } from './Components/Navbar/outlet';
import { SearchData } from './Components/HomePage/searchData';
import { ProductDetails } from './Components/ProductsData/ProductDetails';
import { SignUp } from './Components/signup/signup';
import { Login } from './Components/login/login';
import { WishList } from './Components/WishList/wishlist';

export const ItemValContext = createContext();
export const SendValToProduct = createContext();
export const ValContextNavbar = createContext();
export const SendValToFilter = createContext();
export const SendValToSearchData = createContext();
function App() {
  const [itemVal,setItemVal] = useState('');
  const [navVal,setNavVal] = useState('');
  const [search,setSearchVal] = useState('val');
  const [productID,setProductID] = useState('');
  console.log(navVal);
  console.log(itemVal);
  console.log(search);
  console.log(productID);

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={
      <ValContextNavbar.Provider value={{setNavVal,setSearchVal}}>
          <NavbarOutlet/>
      </ValContextNavbar.Provider>
        }>
        <Route path='/home' element={
      <ItemValContext.Provider value={{setItemVal}}>
          <HomePage/>
      </ItemValContext.Provider>
        }/>
        <Route path='/filterData' element={
      <SendValToFilter.Provider value={{navVal,setProductID}}>
         <FilteredData/> 
      </SendValToFilter.Provider>
        }/>
        <Route path='/products' element={
      <SendValToProduct.Provider value={{itemVal,setProductID}}>
          <Products/>
      </SendValToProduct.Provider>
        }/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/searchItems' element={<SearchData searchVal={search} setProductID={setProductID} />}/>
        <Route path='/productDetails' element={<ProductDetails productID={productID}/>}/>
        <Route path='/wishlist' element={<WishList productID={productID}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
