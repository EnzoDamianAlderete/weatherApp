import './LoaderComponent.css';

const LoaderComponent =()=>{
    return(
        <div className='flex flex-col'>

            <div className="container">
            
                <div className="cloud front">
                    <span className="left-front"></span>
                    <span className="right-front"></span>
                </div>
                <span className="sun sunshine"></span>
                <span className="sun"></span>
                <div className="cloud back">
                    <span className="left-back"></span>
                    <span className="right-back"></span>
                </div>
            </div>

        <div aria-label="Loading..." role="status" className="loader self-center">
            <svg className="icon--loader" viewBox="0 0 256 256">
                <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
            </svg>
        <span className="loading-text">Loading...</span>
        </div>

        
        </div>
        
    )
}

export default LoaderComponent;