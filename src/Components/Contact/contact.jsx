import style from './contact.module.css'
import call from '../svgs/call.svg'
import whatsapp from '../svgs/whatsapp.svg'
import email from '../svgs/email.svg'
export const Contact =  ()=>{
    return(
        <main className={style.contactContainer}>
            <section>
                <img className={style.contactImage} src="https://www.teahub.io/photos/full/48-486428_about-contact-us-wallpaper-hd.jpg" alt="contact us" />
            </section>
            <section className={style.contactBody}>
                <div className={style.cards}>
                    <p className={style.cardHeading}><img src={call} alt="contact" /> Call Us</p>
                    <br />
                    <span>For E-Commerce Related Queries</span>
                    <br />
                    <span style={{color:'darkBlue'}}>1800 889 1055</span>
                    <span style={{fontSize:'15px'}}>( 9:30 AM to 7:30 PM, 365 days )</span>
                    <br />
                    <p>For Store Related Queries</p>
                    <br />
                    <span style={{color:'darkBlue'}}>1800 889 1044</span>
                    <span style={{fontSize:'15px'}}>( 9:00 AM to 9:00 PM, 365 days )</span>
                </div>
                <div className={style.cards}>
                    <p className={style.cardHeading}><img src={whatsapp} alt="whataApp" /> WhatsApp</p>
                    <br />
                    <p>We are now on WhatsApp</p>
                    <br />
                    <br />
                    <p style={{fontSize:"26px",fontWeight:'600'}}>Send Hi! to <br /> <span>+91 7977912345</span></p>
                </div>
                <div className={style.cards}>
                    <p className={style.cardHeading}><img src={email} alt="email" /> Email Us</p>
                    <br />
                    <p>reliancedigital@ril.com</p>
                    <br />
                    <p style={{fontSize:'18px',fontWeight:'600'}}>DOWNLOAD RESQ APP ON MOBILE</p>
                    <br />
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                        <img style={{height:'3rem'}} src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0" alt="playStore" />
                        <img style={{height:'3rem'}} src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo-500x173.jpg" alt="appleStore" />
                    </div>
                </div>
            </section>
            <section className={style.contactFooter}>
                <p style={{fontSize:'30px',fontWeight:'600',color:'green'}}>Concerns not Addressed?</p>
                <br />
                <span>It is our priority to positively respond and address any concerns you
                     may have at the earliest. To ensure this, our team is continuously <br /> working to provide you
                     the best of support though a few concern/issues that are complex in nature may require
                      additional time to resolve.</span><br /><br />
                     <span>In the unlikely event that your concerns are not addressed satisfactorily, you could
                         communicate directly to higher authorities. <br /> To facilitate
                         and better manage this we have aligned a structure to aid communication.</span>
            </section>
        </main>
    )
}