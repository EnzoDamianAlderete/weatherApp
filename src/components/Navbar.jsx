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
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                <path d="m20.08 15.974-5.09-3.131a.673.673 0 0 0-.29-.104l-2.147-.29a.731.731 0 0 0-.779.44l-1.284 2.879a.75.75 0 0 0 .131.815l1.763 1.903a.77.77 0 0 1 .187.657l-.365 1.856"></path>
                <path d="M6.094 5.21 5.25 7.199a.75.75 0 0 0-.01.554l1.08 2.867a.741.741 0 0 0 .544.478l2.006.432a.732.732 0 0 1 .515.403l.357.74a.768.768 0 0 0 .675.422h1.265"></path>
                <path d="m14.297 3.29.872 1.574a.76.76 0 0 1-.15.919L12.497 8.06a.673.673 0 0 1-.14.103l-1.153.638a.806.806 0 0 1-.357.093H8.841a.76.76 0 0 0-.694.46l-.778 1.847"></path>
                </svg>
                </div>
                </Link>
        </div>
    )
}

export default  Navbar;