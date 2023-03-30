import { Link } from "react-router-dom";


const Navbar =()=>{
    return(
        <div className="p-2 flex text-gray-500 justify-around w-screen fixed bg-slate-100 inset-x-0 bottom-0">
            <Link to={"/"}>
                <div>
                    <svg 
                    width="32" 
                    height="32" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.25 19.499v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75v-8.672a.778.778 0 0 1 .244-.553l7.5-6.816a.75.75 0 0 1 1.012 0l7.5 6.816a.777.777 0 0 1 .244.553V19.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75Z"></path>
                    </svg>
                </div>
            </Link>
            

            <Link to={"/search"}>
                <div >
                <svg 
                    width="32" 
                    height="32" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path 
                        d="M15.755 14.255h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23 6.5 6.5 0 1 0-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5Zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5Z"></path>
                    </svg>
                </div>
            </Link>

            <Link to={"/forecast"}>
                <div>
                    <svg 
                        width="32" 
                        height="32" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 3.75h-15a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75Z"></path>
                        <path d="M16.5 1.875V3.75"></path>
                        <path d="M7.5 1.875V3.75"></path>
                        <path d="M3.75 8.25h16.5"></path>
                    </svg>
                </div>
            </Link>
            <Link to={"/favs-locations"}>
                <div>
                    <svg 
                    width="32" 
                    height="32" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20.25S2.625 15 2.625 8.625A4.875 4.875 0 0 1 12 6.75v0a4.875 4.875 0 0 1 9.375 1.875C21.375 15 12 20.25 12 20.25Z"></path>
                    </svg>
                </div>
                </Link>
        </div>
    )
}

export default  Navbar;