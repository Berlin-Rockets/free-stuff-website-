import React, { useState, useEffect } from "react";
import "react-bootstrap";
import "./Searchbar.css";
import { Button } from "./../Navbar/Button";
import baseURL from '../../config/baseUrl';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Searchbar() {
const [data, setData] = useState([])
const [filteredData, setFilteredData]= useState([])

const getAllItems = async () => {
  try {
    const res = await axios.get(baseURL + '/api/items');
    console.log('searchbar dataaaa',res.data.data);
    setData(res.data.data)
  } catch (e) {
    console.log(e);
  }
};

useEffect(() => {
  getAllItems();
  
}, []);

const handleFilter = (e) => {
  const searchWord = e.target.value 
  const newFilter = data.filter((value)=>{
    return value.name.toLowerCase().includes(searchWord.toLowerCase())
  })
  if (searchWord === '') {
    setFilteredData([])
  }else{
    setFilteredData(newFilter)
  }
 
 } 

    return (
     <div>
        
          <div className="mb-3 col-sm-9 pl-0 pr-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Type here what you are looking for"
                onChange={handleFilter}
              />
              <Button className="btn">Search</Button>
            </div>
{filteredData && filteredData.length !== 0 && (
  <div className='dataResult'>
  {filteredData.slice(0,5).map((value,key)=>{
    return(
      <Link
      to={"items/singleItem/" + value._id}
      className='dataItem'
    > <p>{value.name}</p></Link>
     
    )
  })}
</div>
)}
          

          </div>
      
        </div>
    );
 
}


