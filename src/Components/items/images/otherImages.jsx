import { useContext } from 'react'
import style from './images.module.css'
import { ValContextNavbar } from '../../../App'
import { useNavigate } from 'react-router-dom'
export const ImagesData = ()=>{
    const {setItemVal} = useContext(ValContextNavbar);
    const navigate = useNavigate();

    const allImagesOrValue = [
        {
            img : 'https://www.reliancedigital.in/medias/Best-Selling-Laptops.jpg?context=bWFzdGVyfGltYWdlc3w0NzA4NnxpbWFnZS9qcGVnfGltYWdlcy9oNTgvaDFhLzEwMDg0OTI0MDYzNzc0LmpwZ3xkYzIyYWQwYjFhNjEwMTFhZTU3NTU4ZDZmYjVmMTE3MjRiOGNhOWJmMzU0ZTZmZmIwMmQzNDM1NjMzMWIxZjQy',
            value : 'laptop'
        },
        {
            img : 'https://www.reliancedigital.in/medias/Large-Appliances.jpg?context=bWFzdGVyfGltYWdlc3wzMzM1OXxpbWFnZS9qcGVnfGltYWdlcy9oZjIvaGQwLzEwMDc5NjE3MjUzNDA2LmpwZ3xhNjkwZTYzMTgwNjJmY2MxMjRiNjYwYjBlOWFkZGI2MDYzNGQyODEyMDUwNTFlMzliYjA3ZjEzMGMyZGEwMjNl',
            value : 'washingMachine'
        },
        {
            img : 'https://www.reliancedigital.in/medias/Soundbar-Speaker-GDOE-Banners-Red-Grey-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w0ODg1NHxpbWFnZS9qcGVnfGltYWdlcy9oYzgvaGEzLzEwMDgyODMxMzAyNjg2LmpwZ3xiMTUzZTI1YmU0ODU5ODExMjJhNTEwNWQ0MGI3ZTViMTJhMjg1NDhjMmY5MmNhZDNlMTRlMTQ4NWJhZDdlNGUz',
            value : 'audio'
        },
        {
            img : 'https://www.reliancedigital.in/medias/Big-Screen-TVs.jpg?context=bWFzdGVyfGltYWdlc3w4Mzc4OXxpbWFnZS9qcGVnfGltYWdlcy9oZWIvaGVjLzEwMDc5NjE3NDUwMDE0LmpwZ3xhNGU5MWY4MWNlOGQ4OTU3ODdmNDRhY2ExNGE1ZmMzMDZjODFlNjNiMDFhZjg2YWIwZTRlNGYxNDYzZGQxMDBm',
            value : 'tv'
        },
        {
            img : 'https://www.reliancedigital.in/medias/Personal-Care-GDOE-Banners-Red-Grey-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w0Mjg2NnxpbWFnZS9qcGVnfGltYWdlcy9oNjcvaDIzLzEwMDgyMjU3MTA5MDIyLmpwZ3w5ZmVkMDkzZmE3NzI5ZjNkMDhkYTZjZGQ2MTZjYjI1MDQ3OGViNjljMTgzNjIzYjA1NjBhZjgwYTYyYWQ0Zjhm',
            value : 'travel'
        },
        {
            img : 'https://www.reliancedigital.in/medias/OnePlus-Nord-CE2-GDOE-Banners-Red-Grey-Banners-.jpg?context=bWFzdGVyfGltYWdlc3w0MzU4N3xpbWFnZS9qcGVnfGltYWdlcy9oODIvaDA2LzEwMDgyODMxMTcxNjE0LmpwZ3w2N2NlODI4YjExZTVhOGEyZDM2MWRhZjNiY2E3YWJlM2I4N2E2YzU0MGRlNjAxMzBlMTg3ZmVjYmY4NTU3OWMz',
            value : 'mobile'
        }
    ]
    const handleProducts = (e)=>{
        setItemVal(e.currentTarget.id);
        navigate('/products')
    }
    return(
        <main className={style.mainContainer}>
          
            {
                allImagesOrValue.map((product,i)=>{
                    return(
                            <div id={product.value} onClick={handleProducts}>
                                <img src={product.img} alt={product.value} />
                            </div>
                    )
                })
            }
        </main>
    )
}