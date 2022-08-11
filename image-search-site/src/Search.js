import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import {useLocation} from 'react-router-dom';

const Search = (props) => {
    var [data, setAllImages] = useState([{"image_url": "1"}]);

    const location = useLocation();

    useEffect(()=>{
        setAllImages(location.state.data["image_paths"])
    })

    return ( 
        <div className="search_page_queries">
            <h2 style={{textAlign: 'center', margin: '20px'}}>Top images similar to query</h2>
            <div className="grid_images">
            {
                data != null ? 
                    data.map((datum, index)=>
                        <div key={index} 
                            className={
                                index+1 === 2 ? "image_container featured_horizontal": 
                                index+1 === 3 ? "image_container featured_vertical":
                                index+1 === 4 ? "image_container featured_big":
                                "image_container"
                            }
                        >
                            <img src={`http://127.0.0.1:8000/media/img/${datum}`} alt="" />
                            <div className="download_options_container"></div>
                        </div>
                    )
                : <div></div>
            }
            </div> 
        </div>
    );
}
 
export default Search;