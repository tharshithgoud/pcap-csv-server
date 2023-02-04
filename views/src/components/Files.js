import React from 'react';
import File from './File.js';
import { useEffect, useState } from 'react';
import vik from "./vikrant.png"
function Files() {
    const [ntp, setntp] = useState([]);
    const names = []
    useEffect(() => {
        fetch("http://localhost:7654/FILES")
            .then((response) => response.json())
            .then((data) => setntp(data))
    }, []);
    const [searchValue, setSearchValue] = useState("")
    const filteredFiles = ntp.filter((file) => {return file.name.includes(searchValue)})

const handleInputChange = (event) => {
    setSearchValue(event.target.value)
}
return (
    <div>
        <img src={vik} />
        <div className='tasks-list-container'>
            <div className='form'>
                <form>
                    <input className='input' value={searchValue} onChange={handleInputChange} placeholder='🔍 Search Files' />
                </form>
            </div>
            <div className='tasks-list'>
                {filteredFiles.map((file)=><File name = {file.name} url = {file.url}/>)}
            </div>
        </div>
    </div>
);
}

export default Files;