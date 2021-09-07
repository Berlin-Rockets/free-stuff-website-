import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import baseURL from '../config/baseUrl';
import Moment from 'react-moment';


export default function Carousel() {
const [items, setItems]= useState()

const getAllItems=async()=>{
try{
const res= await axios.get(baseURL+'/items')
// console.log(res.data);
setItems(res.data.data)
}catch(e){
    console.log(e);
}
}

useEffect(()=>{
    getAllItems()
},[])

console.log('items are:',items);

    return items? (
        
        <div id="carouselExampleCaptions" className="carousel slide container my-3" data-bs-ride="carousel">
      
        <div className="carousel-inner container w-75 mx-auto">
          <div className="carousel-item active">
          <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card ">
      <img src={items[0].images[0]} className="d-block w-100" alt="pic2"/>
      <div className="card-body">
        <h5 className="card-title">{items[0].name}</h5>
        <p className="card-text">{items[0].description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated  <Moment format="DD/MM/YYYY">
        {items[0].createdAt}
            </Moment></small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card ">
    <img src={items[1].images[0]} className="d-block w-100" alt="pic2"/>
      <div className="card-body">
        <h5 className="card-title">{items[1].name}</h5>
        <p className="card-text">{items[1].description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated <Moment format="DD/MM/YYYY">
        {items[1].createdAt}
            </Moment> </small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card ">
    <img src={items[2].images[0]} className="d-block w-100" alt="pic2"/>
      <div className="card-body">
        <h5 className="card-title">{items[2].name}</h5>
        <p className="card-text">{items[2].description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated <Moment format="DD/MM/YYYY">
        {items[2].createdAt}
            </Moment></small>
      </div>
    </div>
  </div>
</div>
          </div>

          <div className="carousel-item">
          <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card ">
            <img src={items[3].images[0]} className="d-block w-100" alt="pic2"/>
      <div className="card-body">
        <h5 className="card-title">{items[3].name}</h5>
        <p className="card-text">{items[3].description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated <Moment format="DD/MM/YYYY">
        {items[3].createdAt}
            </Moment></small>
      </div>
            </div>
          </div>
          <div className="col">
            <div className="card ">
            <img src={items[4].images[0]} className="d-block w-100" alt="pic2"/>
      <div className="card-body">
        <h5 className="card-title">{items[4].name}</h5>
        <p className="card-text">{items[4].description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated <Moment format="DD/MM/YYYY">
        {items[4].createdAt}
            </Moment></small>
      </div>
            </div>
          </div>
          <div className="col">
            <div className="card ">
            <img src={items[5].images[0]} className="d-block w-100" alt="pic2"/>
      <div className="card-body">
        <h5 className="card-title">{items[5].name}</h5>
        <p className="card-text">{items[5].description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated <Moment format="DD/MM/YYYY">
        {items[5].createdAt}
            </Moment></small>
      </div>
            </div>
          </div>
        </div>
          </div>

          <div className="carousel-item">
          <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card ">
            <img src={items[6].images[0]} className="d-block w-100" alt="pic2"/>
      <div className="card-body">
        <h5 className="card-title">{items[6].name}</h5>
        <p className="card-text">{items[6].description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated <Moment format="DD/MM/YYYY">
        {items[6].createdAt}
            </Moment></small>
      </div>
            </div>
          </div>
          <div className="col">
            <div className="card ">
            <img src={items[7].images[0]} className="d-block w-100" alt="pic2"/>
      <div className="card-body">
        <h5 className="card-title">{items[7].name}</h5>
        <p className="card-text">{items[7].description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated <Moment format="DD/MM/YYYY">
        {items[7].createdAt}
            </Moment></small>
      </div>
            </div>
          </div>
          <div className="col">
            <div className="card ">
            <img src={items[8].images[0]} className="d-block w-100" alt="pic2"/>
      <div className="card-body">
        <h5 className="card-title">{items[8].name}</h5>
        <p className="card-text">{items[8].description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated <Moment format="DD/MM/YYYY">
        {items[8].createdAt}
            </Moment></small>
      </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        <button className="carousel-control-prev border-0   " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden text-warning">Previous</span>
        </button>
        <button className="carousel-control-next border-0 " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="visually-hidden text-warning ">Next</span>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
      
        </button>
      </div>
    ): <div>Loading</div>
}
