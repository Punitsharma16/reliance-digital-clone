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
import { CartItems } from './Components/Cart/cartItem';
import { Checkout } from './Components/Checkout/checkout';
import { ProfileModal } from './Components/Profile/profileModal';
import { MyOrder } from './Components/Orders/myOrder/myorder';

export const ItemValContext = createContext();
export const SendValToProduct = createContext();
export const ValContextNavbar = createContext();
export const SendValToFilter = createContext();
export const SendValToSearchData = createContext();
export const CartItemsData = createContext();
function App() {
  const [itemVal,setItemVal] = useState('');
  const [navVal,setNavVal] = useState('');
  const [search,setSearchVal] = useState('thev');
  const [productID,setProductID] = useState('');
  const [cartVal,setCartVal] = useState();
  console.log(navVal);
  console.log(itemVal);
  console.log(search);
  console.log(productID);
  console.log(cartVal);
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={
      <ValContextNavbar.Provider value={{setNavVal,setSearchVal,setProductID,setItemVal}}>
          <NavbarOutlet/>
      </ValContextNavbar.Provider>
        }>
        <Route path='/' element={
      <ItemValContext.Provider value={{setItemVal}}>
          <HomePage search={search} setProductID={setProductID}/>
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
        {/* <Route path='/searchItems' element={<SearchData searchVal={search} setProductID={setProductID} />}/> */}
        <Route path='/productDetails' element={<ProductDetails productID={productID}/>}/>
        <Route path='/wishlist' element={<WishList productID={productID}/>}/>
        <Route path='/cartItem' element={
          <CartItemsData.Provider value={{setCartVal}}>
              <CartItems/>
          </CartItemsData.Provider>
      }/>
      <Route path='/myOrders' element={<MyOrder/>}/>
        <Route path='/checkout' element={
              <Checkout cartVal={cartVal}/>
        }/>
        </Route>
        {/* <Route path='/profile' element={<ProfileModal/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
