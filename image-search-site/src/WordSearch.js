import { useParams } from "react-router";
import React from 'react';
import { useEffect, useState } from 'react';

const WordSearch = () => {
    const [all_image_urls, setImageUrls] = useState([]);

    const {word} = useParams();

    useEffect(()=>{
        getRelevantQueries()
    }, [])

    async function getRelevantQueries(){
        const API_HOST = 'http://127.0.0.1:8000';

        var response = await fetch(
            `${API_HOST}/search_results/${word}`,
            {
                headers: {
                    'Accept': 'application/json',
                },
            }
        ) 

        var data = await response.json();

        setImageUrls(data['image_urls']);
    }

    return ( 
        <div className="search_page_queries">
            <h2 style={{textAlign: 'center', margin: '20px'}}>Top images similar to {word.replaceAll('-', " ")}</h2>
            <div className="grid_images">
            {
                all_image_urls.length !== 0 ? 
                    all_image_urls.map((datum, index)=>
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
                : <div className="loading"></div>
            }
            </div> 
        </div>
    );
}
 
export default WordSearch;