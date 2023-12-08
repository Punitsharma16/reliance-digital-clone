import check from '../../svgs/check.svg'
import style from './paymentMode.module.css'
import { useNavigate } from 'react-router-dom'
export const Payment = ()=>{
    const navigate = useNavigate();
    return(
        <main className={style.model}>
            <section className={style.paymentBox}>
                <p>Transaction Completed</p>
                <img src={check} alt="check" />
                <button onClick={()=>navigate('/myOrders')}>Next</button>
            </section>
        </main>
    )
}