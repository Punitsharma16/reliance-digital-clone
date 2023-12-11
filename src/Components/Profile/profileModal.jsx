import { useNavigate } from 'react-router-dom'
import style from './profileModal.module.css'
export const ProfileModal = ()=>{
    const navigate = useNavigate();
    return(
        <main className={style.container}>
                <section>
            <div onClick={()=>navigate('/myProfile')} className={style.box}>
                <p>My Profile</p>
            </div>
            <hr />
            <div onClick={()=>navigate('/cartItem')} className={style.box}>
                <p>My Cart</p>
            </div>
            <hr />
            <div onClick={()=>navigate('/wishlist')} className={style.box}>
                <p>My Wishlist</p>
            </div>
            <hr />
            <div onClick={()=>sessionStorage.clear()} className={style.box}>
                <p>Logout</p>
            </div>
            </section>
        </main>
    )
}