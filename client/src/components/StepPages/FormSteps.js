import React from 'react'
import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import axios from "axios";
import baseURL from "../../config/baseUrl";



export default function FormSteps() {
    const [imageSelected, setImageSelected] = useState({ preview: false, raw: "" });
    const fileHandler = (e) => {

        if (e.target.files.length) {
          setImageSelected({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0],
          });
        }
      };

      const showTab =(n)=> {
        // This function will display the specified tab of the form ...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        // ... and fix the Previous/Next buttons:
        if (n === 0) {
          document.getElementById("prevBtn").style.display = "none";
        } else {
          document.getElementById("prevBtn").style.display = "inline";
        }
        if (n === (x.length - 1)) {
          document.getElementById("nextBtn").innerHTML = "Submit";
        } else {
          document.getElementById("nextBtn").innerHTML = "Next";
        }
        // ... and run a function that displays the correct step indicator:
        fixStepIndicator(n)
      }
    var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab



const nextPrev=(n)=> {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n === 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

const validateForm =()=> {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value === "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

const fixStepIndicator=(n) =>{
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}



    return (
        <div>
        <form id="regForm" action="">

        <h1>Register:</h1>
        
     
        
        <div class="tab">Name:
           <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="name"
            // defaultValue={getState("")}
            className="form-control mb-3 col-11 ml-3"
            
          />
        
          <p>
            <label htmlFor="">categories</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="category"
              
            //   defaultValue={getState("category", "")}
            >
              <option selected></option>
              <option>Auto</option>
              <option>Electronics & Appliances</option>
              <option>Furniture</option>
              <option>Clothing & Textiles</option>
              <option>Pets</option>
              <option>Gardening</option>
              <option>Office Supplies</option>
              <option>Sports</option>
              <option>Leisure</option>
              <option>Decoration</option>
              <option>Beauty</option>
              <option>Tools</option>
              <option>Kitchen utensils</option>
              <option>Other</option>
            </select>
          </p>
        </div>
        
        
        
        
        <div class="tab">Contact Info:
           <label htmlFor="">description</label>
        <textarea className="form-control mb-3 col-11 ml-3" id="exampleFormControlTextarea1" rows="5"  name='description'></textarea>
                
        <p>
        <label htmlFor="">location</label>
          <select
            class="form-select"
            aria-label="Default select example"
            name="location"
            
            
          >
            <option selected>Open this select menu</option>
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
        </p>
        </div>
        
        
        
        <div class="tab">Birthday:
        <label htmlFor="">post item or search for</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="PostOrSearch"
          
     
        >
          <option selected></option>
          <option>Post item</option>
          <option>Search for</option>
         
        </select>
        <br />
        <p>
        
        
        <label htmlFor="">if the item is used please press true ,if new press false</label>
        <select
          class="form-select"
          aria-label="Default select example"
          name="usedState"
          
         
        >
          <option selected></option>
          <option>Used</option>
          <option>New</option>
         
        </select>
        </p>
        </div>
        
        <div class="tab">Login Info:
        <label htmlFor="upload-button" className="float-left mb-3">
        {imageSelected.preview ? (
          <div>
            <img
              src={imageSelected.preview}
              alt="profile-pic"
              className=" ml-3"
              style={{
                width: "70%",
                height: "50%",
                boxShadow: "3px 3px 6px 2px #173F5F",
              }}
            />
            <span
              style={{ float: "left" }}
              className="ml-3 mb-4 d-flex flex-direction-column align-items-start"
            >
              <span className="text-dark col-3 ">
                <BiImageAdd
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
            className="ml-3 mb-4 d-flex flex-direction-column  "
          >
            <span className="text-dark col-6 ">
              <BiImageAdd
                style={{ fontSize: "xxx-large", float: "left" }}
              />
            </span>
            <br />
            <h6 className="text-secondary col-6 m-3">Upload photo</h6>
          </span>
        )}
        </label>
        <input
        type="file"
        name="image"
        accept="image/*"
        multiple
        style={{ display: "none" }}
        id="upload-button"
        onChange={fileHandler}
        />
        
        <br />
        <br />
        </div>
        
        <div style={{overflow:'auto'}}>
          <div style={{float:'right'}}>
            <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
            <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
          </div>
        </div>
        
      
        <div style={{textAlign:'center',marginTop:'40px'}}>
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
        </div>
        
        </form>
        </div>
    )
}


