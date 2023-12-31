import { createContext, useState } from 'react';
import './App.css';
import { HomePage } from './Components/HomePage/home';
import { Products } from './Components/ProductsData/products';
import { Contact } from './Components/Contact/contact';
import { Route, Routes } from 'react-router-dom';
import { NavbarOutlet } from './Components/Navbar/outlet';
import { SearchData } from './Components/HomePage/searchData';
import { ProductDetails } from './Components/ProductsData/ProductDetails';
import { SignUp } from './Components/signup/signup';
import { Login } from './Components/login/login';
import { WishList } from './Components/WishList/wishlist';
import { CartItems } from './Components/Cart/cartItem';
import { Checkout } from './Components/Checkout/checkout';
import { MyOrder } from './Components/Orders/myOrder/myorder';
import { MyProfile } from './Components/My Profile/myProfile';

export const ItemValContext = createContext();
export const SendValToProduct = createContext();
export const ValContextNavbar = createContext();
export const SendValToFilter = createContext();
export const SendValToSearchData = createContext();
export const CartItemsData = createContext();
export const SendCheckoutToMyOrders = createContext();

function App() {
  const [itemVal,setItemVal] = useState('');
  const [navVal,setNavVal] = useState('');
  const [searchVal,setSearchVal] = useState('');
  const [productID,setProductID] = useState('');
  const [cartVal,setCartVal] = useState();
  const [buyNow,setBuyNow] = useState(false);
  const [valFromCheckout,setValFromCheckout] = useState(false);
  const token = sessionStorage.getItem('authToken')
  console.log(navVal);
  console.log(itemVal);
  console.log(searchVal);
  console.log(cartVal);
  console.log(valFromCheckout);
  console.log(productID);
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={token ? <SignUp/>:<NavbarOutlet/>}/>
        <Route path='/' element={
      <ValContextNavbar.Provider value={{setNavVal,setSearchVal,setProductID,setItemVal}}>
          <NavbarOutlet/>
      </ValContextNavbar.Provider>
        }>
        <Route path='/' element={
      <ItemValContext.Provider value={{setItemVal}}>
          <HomePage setProductID={setProductID}/>
      </ItemValContext.Provider>
        }/>
        <Route path='/products' element={
      <SendValToProduct.Provider value={{itemVal,setProductID}}>
          <Products/>
      </SendValToProduct.Provider>
        }/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/searchItems' element={<SearchData searchVal={search} setProductID={setProductID} />}/> */}
        <Route path='/productDetails' element={<ProductDetails setBuyNow={setBuyNow} setCartVal={setCartVal} productID={productID}/>}/>
        <Route path='/wishlist' element={token ? <WishList productID={productID}/> : <Login/>}/>
        <Route path='/myProfile' element={token ? <MyProfile/>:<Login/>}/>
        <Route path='/cartItem' element={token ? 
          <CartItemsData.Provider value={{setCartVal}}>
              <CartItems/>
          </CartItemsData.Provider>
          :
          <Login/>
      }/>
      <Route path='/searchItem' element={<SearchData setProductID={setProductID} searchVal={searchVal}/>}/>
      <Route path='/myOrders' element={
             <MyOrder buyNow={buyNow} valFromCheckout={valFromCheckout}/>
      }/>
        <Route path='/checkout' element={token ?
              <Checkout buyNow={buyNow} setValFromCheckout={setValFromCheckout} cartVal={cartVal}/>
              :
              <Login/>
        }/>
        </Route>
        {/* <Route path='/profile' element={<ProfileModal/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
