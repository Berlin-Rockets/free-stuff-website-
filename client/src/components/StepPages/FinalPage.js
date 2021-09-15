import React from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import baseURL from "../../config/baseUrl";

export default function FinalPage(props) {
  const [image, setImage] = useState({ preview: false, raw: "" });
  // console.log(baseURL);
  const fileHandler = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const saveItem = async (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("category", props.state.category);
    fd.append("location", props.state.location);
    fd.append("PostOrSearch", props.state.PostOrSearch);
    fd.append("usedState", props.state.usedState);
    fd.append("name", props.state.name);
    fd.append("discreption", props.state.discreption);
    // fd.category=props.state.category
    // fd.name=props.state.name
    // fd.location=props.state.location
    // fd.postOrSearch=props.state.PostOrSearch
    // fd.usedState=props.state.usedState
    // fd.description=props.state.discreption
    // fd.file=image.raw, image.preview
    fd.append("file", image.raw, image.preview);

    console.log(fd);
    // const itemData = {
    //   name: props.state.name,
    //   category: props.state.category,
    //   discreption: props.state.discreption,
    //   location:props.state.location,
    //   PostOrSearch:props.state.PostOrSearch,
    //   // file:{image.raw, image.preview}
    // };
    // console.log(itemData);
    //       try{
    //         const res = await axios.post(baseURL+'/items',fd)
    // console.log('resssssssssssss',res);
    //       }catch(e){
    //         console.log(e);
    //       }

    axios({
      method: "POST",
      url: `${baseURL}/items`,
      baseURL: baseURL,
      data: fd,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("resssssssssssss", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log('propssssss',props);
  return (
    <div>
      <div className="">
        <form
          className="form m-5"
          onSubmit={saveItem}
          encType="multipart/form-data"
        >
          <label htmlFor="upload-button" className="float-left mb-3">
            {image.preview ? (
              <div>
                <img
                  src={image.preview}
                  alt="profile-pic"
                  className="rounded-circle ml-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    boxShadow: "3px 3px 6px 2px #173F5F",
                  }}
                />
                <span
                  style={{ float: "left" }}
                  className="ml-3 mb-4 d-flex flex-direction-column align-items-start"
                >
                  <span className="text-dark col-3">
                    <FaUserCircle
                      style={{ fontSize: "xxx-large", float: "left" }}
                    />
                  </span>
                  <br />
                  <h6 className="text-secondary col-7 m-3">Upload photo</h6>
                </span>
              </div>
            ) : (
              <span
                style={{ float: "left" }}
                className="ml-3 mb-4 d-flex flex-direction-column align-items-start "
              >
                <span className="text-dark col-3">
                  <FaUserCircle
                    style={{ fontSize: "xxx-large", float: "left" }}
                  />
                </span>
                <br />
                <h6 className="text-secondary col-7 m-3">Upload photo</h6>
              </span>
            )}
          </label>
          <input
            type="file"
            name="multi-files"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            id="upload-button"
            onChange={fileHandler}
          />

          <br />
          <br />
          <button type="submit">Post Item</button>
        </form>
      </div>
      <p>
        <b>Name:</b> {props.state.name}
      </p>
      <p>
        <b>category:</b> {props.state.category}
      </p>
      <p>
        <b>discreption:</b> {props.state.discreption}
      </p>
      <p>
        <b>location:</b> {props.state.location}
      </p>
      <p>
        <b>post or search for:</b> {props.state.PostOrSearch}
      </p>
      <p>
        <b>Used or New:</b>
        {props.state.usedState}
      </p>
    </div>
  );
}