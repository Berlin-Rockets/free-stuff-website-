import React, { useEffect, useState } from "react";
import baseURL from "../../config/baseUrl";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";



export default function EditItem() {
    const [item, setItem] = useState();
    const { id } = useParams();
    let history = useHistory();
console.log(id);

const getItem = async () => {
    try {
      //  const userId =localStorage.getItem('userId')
      const userItemData = await axios.get(baseURL + "/items/singleItem/" + id);
    //   console.log('item data ------>>',userItemData.data.data);
      setItem(userItemData.data.data);
      
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getItem();
  }, []);

  const updateItem = async (e) => {
    e.preventDefault();
    console.log(id);
   
    const itemData = {
      name: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
    location: e.target.location.value,
    PostOrSearch: e.target.PostOrSearch.value,
    usedState: e.target.usedState.value,
    };
    console.log('item data ------>>',itemData);
    try {
      await axios.patch(
        baseURL + "/items/" + id,
       itemData
      );
      
      history.push("/items");
    } catch (e) {
      console.log(e);
    }
  };
    return item ?(
        <div className="container">
        <h1>Edit blog</h1>
        <form onSubmit={updateItem}>
          <fieldset>
            <div className="mb-3">
              <label htmlFor="exampleInputText" className="form-label text-dark">
                Item Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                defaultValue={item.name}
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="exampleInputText" className="form-label text-dark">
              Category
              </label>
              <select
          className="form-select"
          aria-label="Default select example"
          name="category"
          defaultValue={item.category}
        >
          <option selected>{item.category}</option>
          <option>Auto</option>
          <option>Electronics & Appliances</option>
          <option>Furniture</option>
          <option>Clothing & Textiles</option>
          <option>Pets</option>
          <option>Gardening</option>
          <option>Office Supplies</option>
          <option>Sports & Leisure</option>
          <option>Movies, Music & Books</option>
          <option>Decoration</option>
          <option>Beauty</option>
          <option>Tools</option>
          <option>Kitchen utensils</option>
          <option>Other</option>
        </select>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputText" className="form-label text-dark">
              Description
              </label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name='description'>{item.description}</textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputText" className="form-label text-dark">
                location
              </label>
              <select
          className="form-select"
          aria-label="Default select example"
          name="location"
         
          defaultValue={item.location}
        >
          <option selected>{item.location}</option>
          <option>Berlin</option>
          <option>Hamburg</option>
          <option>Baden-Württemberg</option>
          <option>Bayern</option>
          <option>Brandenburg</option>
          <option>Bremen</option>
          <option>Hessen</option>
          <option>Niedersachsen</option>
          <option>Mecklenburg-Vorpommern</option>
          <option>Nordrhein-Westfalen</option>
          <option>Rheinland-Pfalz</option>
          <option>Saarland</option>
          <option>Sachsen</option>
          <option>Sachsen-Anhalt</option>
          <option>Schleswig-Holstein</option>
          <option>Thüringen</option>
        </select>
            </div>
  
            <div className="mb-3">
            <label htmlFor="" className="form-label text-dark">if you want to post item please press true or if you search for it press false</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="PostOrSearch"
          defaultValue={item.PostOrSearch}
        >
          <option selected>{item.postOrSearch.toString()}</option>
          <option>true</option>
          <option>false</option>
         
        </select>
            </div>

            <div className="mb-3">
            <label htmlFor="" className="form-label text-dark">if the item is used please press true ,if new press false</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="usedState"
          defaultValue={item.usedState}
        >
          <option selected>{item.usedState.toString()}</option>
          <option>true</option>
          <option>false</option>
         
        </select>
            </div>
         
  
          
  
            <button type="submit" className="btn btn-primary mb-5">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    ): <div>Loading</div>
}
