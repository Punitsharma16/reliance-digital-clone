import style from '../checkout.module.css'
export const ShippingAddressForm = ({setAddress,address,setAddressModal,setShowAddress})=>{

    const handleAddress = (e)=>{
        const{name,value} = e.target;
        setAddress({...address,[name]:value})
    }
    const submitform = ()=>{
        setAddressModal(false);
        setShowAddress(true);
    }

    return(
            <main className={style.modal}>
            <aside className={style.addressBox}>
                <div className={style.addressHeading}>
                    <p>Enter new address</p>
                    <p onClick={()=>setAddressModal(false)} style={{cursor:'pointer'}}>x</p>
                </div>
                <form onSubmit={submitform} className={style.form}>
                    <input style={{width:'19rem'}} type="number" name="pincode" value={address.pincode} id="pincode" placeholder='Enter Pincode*' onInput={handleAddress} required/><br />
                    <input style={{width:'19rem'}} type="text" name="firstname" id="firstname" value={address.firstname} placeholder='Enter First Name*' onInput={handleAddress} required/>
                    <input style={{width:'19rem'}} type="text" name="lastname" id="lastname" value={address.lastname} placeholder='Enter Last Name*' onInput={handleAddress} required/><br />
                    <input type="text" name="address" id="address" value={address.address} placeholder='Enter Flat / Houes No. / Floor*' onInput={handleAddress} required/><br />
                    <input type="text" name="colony" id="colony" value={address.colony} placeholder='Enter Colony / Street*' onInput={handleAddress} required/><br />
                    <input type="text" name="landmark" id="landmark" value={address.landmark} placeholder='Enter landmark' onInput={handleAddress}/><br />
                    <input type="text" style={{width:'19rem'}} name="city" id="city" value={address.city}  placeholder='Enter City' onInput={handleAddress}/>
                    <input type="text" style={{width:'19rem'}} name="state" id="state" value={address.state} placeholder='Enter State' onInput={handleAddress}/>
                    <input type="number" name="phone" id="phone" placeholder='Enter Mobile Number*' value={address.phone} onInput={handleAddress} required/>
                    <input style={{width:'10rem'}} className={style.submitButton} type="submit" value="Submit" />
                </form>
            </aside>
         </main>
    )
}