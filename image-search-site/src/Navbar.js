import { Link } from "react-router-dom";
import logo from './logo.png';
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

const Navbar = () => {
    const [word_to_search, SetWordToSearchState] = useState('');
    
    async function handleSearch(e){
        var results_container = document.querySelector("#results");
        
        if(e.ctrlKey){
            // console.log('pressed')
            var data = await getSuggestion(e.target.value);

            results_container.innerHTML = ``;

            data['sentences'].map(datum=>
                results_container.innerHTML += `
                    <a href="search/${datum.replace(/\s+/g, '-')}">${datum}</a>
                `
            )
        }else{
            if(e.target.value === ''){
                results_container.innerHTML = ``;
            }
        }
        
    }

    const API_HOST = 'http://127.0.0.1:8000';

    async function getSuggestion(word){
        var response = await fetch(
        `${API_HOST}/search_suggestion?suggestion=${word}`,
        {
            headers: {
                'Accept': 'application/json',
            },
        }
        ) 

        var data = await response.json();

        return data;
    }

    return ( 
        <nav>
            <Link to="/">
                <h3>PixBay</h3>
                <div className="logo_container">
                    <img src={logo} alt="" />
                </div>
            </Link>
            <form className="picture_search_form" method="GET" action={`http://localhost:3000/search/${word_to_search.replaceAll(' ', "-")}`}>
                <div id="search_box">
                    <input onChange={(e)=>{SetWordToSearchState(e.target.value)}} type="text" onKeyDown={(e)=>{handleSearch(e)}} placeholder="Search for image" id="search"></input>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <FontAwesomeIcon icon={faCamera} style={{padding: "5px"}}/>
                    </div>
                </div>
                <div id="results">

			    </div>
            </form>
            <div className="navigation_links">
                <Link to="/">Explore</Link>
                <Link to="/">License</Link>
                <Link to="/">Upload</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;