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

      setUser(userData.data.data);
    }
  };

  const getUserItem = async () => {
    const userId = localStorage.getItem("userId");
    const userItems = await axios.get(
      baseURL + "/api/items/userItem/" + userId
    );

    setItems(userItems.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(baseURL + "/api/items/" + id);

    window.location.reload();
  };

  useEffect(() => {
    getUser();
    getUserItem();
  }, []);

  return user ? (
    <div className="container d-flex flex-column align-items-center ">
      <h1 className="text-center">My Items</h1>
      <h4 className="text-center">Hallo {user.name}</h4>
      <p className="text-center">{user.email}</p>

      {Items && Items.length > 0 ? (
        Items.map((el) => {
          return (
            <div
              key={el.id}
              className="d-flex justify-content-between bg-light rounded w-100 my-2"
            >
              <div className="d-flex align-items-center m-2 ">
                <img src={el.images[0]} className="" width="35%" alt="2" />
                <p className=" m-2">{el.name}</p>
              </div>

              <div className="my-auto d-block">
                <Link
                  to={"/editItem/" + el._id}
                  className="btn btn-outline-success m-2"
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
