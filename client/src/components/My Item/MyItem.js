import React, { useEffect, useState } from "react";
import baseURL from "../../config/baseUrl";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MyItem() {
    const [user, setUser] = useState();
  const [Items, setItems] = useState();

  const getUser = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const userData = await axios.get(baseURL + "/users/" + userId);
      console.log(userData.data.data);
      setUser(userData.data.data);
    }
  };

  const getUserItem = async () => {
    const userId = localStorage.getItem("userId");
    const userItems = await axios.get(baseURL + "/items/userItem/" + userId);
    console.log('user items ------>',userItems.data);
    setItems(userItems.data);
  };

  const deleteItem = async (id) => {
    console.log(id);
    await axios.delete(baseURL + "/items/" + id);

    window.location.reload();
  };

  useEffect(() => {
    getUser();
    getUserItem();
  }, []);

// console.log(Item);
return user ? (
    <div className="container d-flex flex-column align-items-center ">
      <h1 className='text-center'>My Items</h1>
      <h4 className='text-center'>Hallo  {user.name}</h4>
      <p className='text-center'>{user.email}</p>

      {Items && Items.length > 0 ? (
        Items.map((el) => {
          //  console.log(el);
          return (
            <div key={el.id} className='bg-light rounded w-75 my-2'>
              <li className="d-flex m-3 justify-content-between ">
                <div className="d-flex align-items-center">
                  <img
                    src={el.images[0]}
                    className=""
                    width="100"
                    alt="2"
                  />
                  <p className="bg-white ms-2">{el.name}</p>
                </div>
                <div className="d-flex align-items-center">
                  <Link
                    to={"/editItem/" + el._id}
                    className="btn btn-outline-success me-2"
                  >
                    Edit
                  </Link>
                
                  <button
                    type="button"
                    name={el._id}
                    className="btn btn-outline-danger me-2"
                    onClick={() => deleteItem(el._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            </div>
          );
        })
      ) : (
        <div>No Items</div>
      )}
    </div>
  ) : (
    <div>loading</div>
  );
}
