import React, { useEffect, useState } from "react";
import baseURL from "../../config/baseUrl";
import axios from "axios";

export default function AllUsers() {
  const [users, setUsers] = useState();
  const [user, setUser] = useState();

  const getUser = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const userData = await axios.get(baseURL + "/users/" + userId);
      console.log('user :',userData.data.data);
      setUser(userData.data.data);
    }
  };

  const getAllUsers = async (e) => {
    try {
      const users = await axios(baseURL + "/users");
      console.log('all users :',users.data.data);
      setUsers(users.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
    getAllUsers()
  }, []);

  return user ? (
    <div className="container Page ">
      <h1>All Users</h1>
      <h4>Hallo {user.name}</h4>
      <h4>{user.email}</h4>
      {users && users.length > 0 ? (
        <h5 className="m-5 bg-info text-center p-3">{users.length} Users</h5>
      ) : (
        <div>Loading</div>
      )}

      {users && users.length > 0 ? (
        users.map((user) => {
          return (
            <div className="container" key={user.id}>
              <li className="row m-1 align-items-center border">
                <div className="row  align-items-center ">
               
                  <p className="col bg-success ms-2 text-white rounded-pill text-center">
                    <span className="p-2">User Name: {user.name}</span>{" "}
                  </p>
                  <p className="col bg-warning ms-2  rounded-pill text-center">
                    <span className="p-2">Email: {user.email}</span>{" "}
                  </p>
                  {!user.isAdmin ? (
                   
                      <p className="col bg-danger ms-2 text-white rounded-pill text-center">
                      <span className="p-2">
                        Admin: {user.isAdmin.toString()}
                      </span>{" "}
                    </p>
                    
                  ):  <p className="col bg-info ms-2 text-white rounded-pill text-center">
                  <span className="p-2">
                    Admin: {user.isAdmin.toString()}
                  </span>{" "}
                </p>}
                
                </div>
              </li>
            </div>
          );
        })
      ) : (
        <div>No Users</div>
      )}
    </div>
  ) : (
    <div>loading</div>
  );
}