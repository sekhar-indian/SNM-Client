import './lowest-deals.css'
function LowestDeals(){
    return(
        <div className="topdeals" >
            <h2 className="topdeals-title">Lowest Deals</h2>
            <div className="topdeals-container">
                <div className="topdeals-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </div>
                <div className="topdeals-items-container">
                    <div className="topdeals-item">
                        <div className="topdeals-img-container">
                        <img className="topdeals-item-img" src="https://res.cloudinary.com/muni/image/upload/v1727535484/-original-imah45nfvygj9hhd_vxlvvo.webp"></img>
                        </div>                        
                    </div>
                    <div className="topdeals-item">
                            <div className="topdeals-img-container">
                            <img className="topdeals-item-img" src="https://res.cloudinary.com/muni/image/upload/v1727536190/-original-imah3ajbzmxyjswb_exks7k.webp"></img>
                            </div>
                        <p></p>
                    </div>
                    <div className="topdeals-item">
                        <div className="topdeals-img-container">
                        <img className="topdeals-item-img" src="https://res.cloudinary.com/muni/image/upload/v1727535983/-original-imagwejhzeezn2r9_pngqly.webp"></img>
                        </div>
                    </div>
                    <div className="topdeals-item">
                        <div className="topdeals-img-container">
                        <img className="topdeals-item-img" src="https://res.cloudinary.com/muni/image/upload/v1727536341/-original-imah4qsvtfbzvtr6_pvufr9.webp"></img>
                        </div>
                    </div>
                    <div className="topdeals-item">
                        <div className="topdeals-img-container">
                        <img className="topdeals-item-img" src="https://res.cloudinary.com/muni/image/upload/v1727535983/-original-imagwejhzeezn2r9_pngqly.webp"></img>
                        </div>
                    </div>
                </div>

                <div className="topdeals-icon2">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </div>  
            </div>
           
        </div>
    )
}

export default LowestDeals;