import { Link } from "react-router-dom";

const Page404 =()=>{
    return(
        <>
        <h2>404</h2>
        <Link to={"/"}>
            Volver a home
        </Link>
        </>
    )
}

export default Page404;