import style from './loader.module.css'
export const Loader = ()=>{
    return(
        <main className={style.container}>
            <div className={style.loader}></div>
        </main>
    )
}