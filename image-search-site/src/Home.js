import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const navigate = useNavigate();

    var all_popular_searches = [
        "Pets", "Anime", "Nature", "Fashion", "Wallpapers", "Christmas", "Gifts", "Shoes", "watches",
        "Aesthetic", "Houses", "Furniture"
    ]

    const [changeScreen, setChangeScreen] = useState(false);

    const API_HOST = 'http://127.0.0.1:8000';

    async function upload_dp(file){
        let fd = new FormData();
    
        fd.append('img', file);
    
        var response = await fetch(`${API_HOST}/image_search/`, 
        {
            headers: {
                'Accept': 'application/json',
            },
            method: 'POST',
            body:fd,
        });
    
        var data = await response.json();

        navigate(
            '/search',
            {state: {data: data}}
        );
    }

    async function handleImageChange(e){
        const file = e.target.files[0];

        setChangeScreen(true);
    
        await upload_dp(file);
    }

    return ( 
        <div>
            {changeScreen === false ? <div className="popular_searches">
                <h3>Popular Searches</h3>
                <div className="popular_links">
                    {all_popular_searches.map((search, index)=>
                        <Link to="#" key={index}>{search}</Link>
                    )}
                </div>
            </div> : <div></div>}

            {changeScreen === false ? <div className="landing_screen">
                <div className="dark_cover">
                    <h1>Welcome to Pixbay, search for any kind of picture your heart desires</h1>

                    <form action="">
                        <input type="file" name="file" id="file" onChange={(e)=>{handleImageChange(e)}}/>
                        <label htmlFor="file">
                            <span>Image Search</span><FontAwesomeIcon icon={faCamera} style={{padding: "5px"}}/>
                        </label>
                    </form>
                 
                </div>
            </div> : <div></div>}
            
            {changeScreen === false ? <div className="home_tabs">
                <Link to="/" className="selected">Home</Link>
                <Link to="/">Popular</Link>
                <Link to="/">Discover</Link>
                <Link to="/">Videos</Link>
                <Link to="/">Leaderboard</Link>
            </div> : <div></div>}

            {changeScreen === false ? <div className="grid_images">
                <div className="image_container">
                    <img src="1.jpg" alt="" />
                    <div className="download_options_container">
                        <Link to="1.jpg" download><i className="fa fa-download" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="image_container featured_horizontal">
                    <img src="2.jpg" alt="" />
                    <div className="download_options_container">
                        <Link to="2.jpg" download><i className="fa fa-download" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="image_container featured_vertical">
                    <img src="3.jpg" alt="" />
                    <div className="download_options_container">
                        <Link to="3.jpg" download><i className="fa fa-download" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="image_container featured_big">
                    <img src="4.jpg" alt="" />
                    <div className="download_options_container">
                        <Link to="4.jpg" download><i className="fa fa-download" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="image_container">
                    <img src="5.jpg" alt="" />
                    <div className="download_options_container">
                        <Link to="5.jpg" download><i className="fa fa-download" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="image_container">
                    <img src="6.jpg" alt="" />
                    <div className="download_options_container">
                        <Link to="6.jpg" download><i className="fa fa-download" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="image_container featured_horizontal">
                    <img src="7.jpg" alt="" />
                    <div className="download_options_container">
                        <Link to="7.jpg" download><i className="fa fa-download" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="image_container featured_vertical">
                    <img src="8.jpg" alt="" />
                    <div className="download_options_container">
                        <Link to="8.jpg" download><i className="fa fa-download" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="image_container featured_big">
                    <img src="9.jpg" alt="" />
                    <div className="download_options_container">
                        <Link to="9.jpg" download><i className="fa fa-download" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="image_container">
                    <img src="10.jpg" alt="" />
                    <div className="download_options_container">
                        <Link to="10.jpg" download><i className="fa fa-download" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div> : <div></div>}
            {changeScreen === false ? <div></div> : <div className="loading"></div> }
        </div>
    );
}
 
export default Home;