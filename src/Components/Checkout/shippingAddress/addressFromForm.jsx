import style from '../checkout.module.css'
export const Address = ({address,setShowOrder,setAddressModal})=>{
    return(
                        <main className={style.addressContainer}>
                            <p style={{fontSize:'15px',fontWeight:'600',marginBottom:'0.4rem'}}>{address.firstname} {address.lastname}</p>
                            <span>{address.address}</span>
                            <span>, {address.colony}</span>
                            <span>, {address.landmark}</span>
                            <br />
                            <span>{address.city} - </span>
                            <span>{address.pincode} </span>
                            <span> ,{address.state}</span>
                            <br />
                            <br />
                            <span style={{fontWeight:'600'}}>Mobile : </span>
                            <span>{address.phone}</span>
                            <div className={style.addressButton}>
                                <button onClick={()=>setAddressModal(true)} style={{backgroundColor:'red'}}>Change</button>
                                <button onClick={()=>setShowOrder(true)}>Delivery Here</button>
                            </div>
                            </main>
    )
}