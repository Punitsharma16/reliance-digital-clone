import { useContext } from 'react'
import style from './mixItmes.module.css'
import { ValContextNavbar } from '../../../App'
import { useNavigate } from 'react-router-dom';
export const MixItems = ()=>{
    const {setItemVal} = useContext(ValContextNavbar);
    const navigate = useNavigate();
    const handleAC = ()=>{
        setItemVal('ac');
        navigate('/products')
    }
    const handleApple = ()=>{
        setItemVal('mobile');
        navigate('/products')
    }
    const handleRefrigerator = ()=>{
        setItemVal('refrigerator');
        navigate('/products');
    }
    const handleWashingMachine = ()=>{
        setItemVal('washingMachine');
        navigate('/products')
    }
    const handleAudio = ()=>{
        setItemVal('audio');
        navigate('/products')
    }
    return(
        <main className={style.mainContainer}>
            <p>EXPLORE OUR RANGE OF PRODUCTS</p>
            <section className={style.imageBox}>
                <img onClick={handleApple} src="https://www.reliancedigital.in/medias/Apple-Logo.png?context=bWFzdGVyfGltYWdlc3w4MjQ4fGltYWdlL3BuZ3xpbWFnZXMvaGQ3L2hmOS8xMDAyMjUyNjcxMzg4Ni5wbmd8NzUwMzQzNmYwMjJhNGI3MWQ2Y2Y3YTlmNDMwNzRiMmE2MjIzZjRlODlkMjUzZGVjZjdlYjViZWQ3MWVlY2IxNw" alt="image" />
                <img className='hide' onClick={handleRefrigerator} src="https://www.reliancedigital.in/medias/Explore-Our-Range-of-Products-Ref.png?context=bWFzdGVyfGltYWdlc3wxNDQwMXxpbWFnZS9wbmd8aW1hZ2VzL2hlZC9oMjQvOTg5MjQwNzUwOTAyMi5wbmd8NTc5ZWE5ZGEzYTYzODYwNDNlNTRhNjExZjcyZGI4NzQ1YmE0NDVjYmUwY2M3MzRiZjFkMWZmNDY3NTMxYjNkMA" alt="image" />
                <img onClick={handleAC} src="https://www.reliancedigital.in/medias/Explore-Our-Range-of-Products-AC.png?context=bWFzdGVyfGltYWdlc3wxNzI3NnxpbWFnZS9wbmd8aW1hZ2VzL2hmMy9oNDMvOTg5MjQwNzQ0MzQ4Ni5wbmd8ODkxZDlkYTUxODhkM2RiOWUzMTU4ZDZhYmVkYTM3MzE2MDEyNDEzODMzNWZlZWQ5ZDQwMzNmMWM1OTliZGYwZA" alt="image" />
                <img onClick={handleWashingMachine} src="https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA" alt="image" />
                <img className='hide' onClick={handleAudio} src="https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA" alt="image" />
            </section>
        </main>
    )
}