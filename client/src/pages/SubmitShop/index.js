import React, { useState } from "react";
import { postShopAPI } from "../../util/shopAPI";
// import { useAuth } from "../../util/auth";

// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function SubmitShopPage() {
  // const auth = useAuth();
  // return <h1>Hello, {auth.user.username}!</h1>;

  const [formState, setFormState] = useState({
    shopName: "",
    location: "",
    address: "",
    state: "CA",
    zip: 92109,
    phone: "",
    description: "",
    reviews: [],
    rating: [],
    menuURL: "https://bestmexsd.com",
    featuredFood: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    postShopAPI(formState);
    console.log(formState);

    // if (!name) {
    //   return alert("Must provide a restaurantname.");
    // }
    // if (!email) {
    //   return alert("Must provide an email address.");
    // }
    // if (!password || password.length < 8) {
    //   return alert("Invalid password. Must contain at least 8 characters.");
    // }

    // auth.signup({ email, username, password });
  };

  const handleInputChange = (event) => {
    let name = event.target.name;
    setFormState({
      ...formState,
      [name]: event.target.value,
    });
  };

  console.log(formState);

  return (
    <div id="submitshop-page" className="container">
      <div className="row justify-content-center ">
        <div className="col-sm-12 col-md-8 col-lg-8 animate__animated animate__fadeIn">
          <h2>Submit A Taco Shop to Our Site!</h2>
          <form id="submitshop-form" onSubmit={handleSubmit}>
            <div>
              <div className="form-group row">
                {/* <label htmlFor="shopName">Restaurant Name:</label> */}
                <div className="col-sm-12 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                    name="shopName"
                    id="shopName"
                    placeholder="Enter the Taco Shop name here"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="form-group row">
                {/* <label
                  htmlFor="shopLocation"
                  className="col-sm-2 col-form-label"
                >
                  Location
                </label> */}
                <div className="col-sm-12 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                    name="location"
                    id="shopLocation"
                    placeholder="What part of San Diego is the new taco shop in?"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="form-group row">
                {/* <label
                  htmlFor="shopAddress1"
                  className="col-sm-2 col-form-label"
                >
                  Address Line 1
                </label> */}
                <div className="col-sm-12 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                    name="address"
                    id="shopAddress1"
                    placeholder="Address"
                    autocomplete="off"
                  />
                </div>
              </div>
              {/* <div className="form-group row">
                <label
                  htmlFor="shopAddress2"
                  className="col-sm-2 col-form-label"
                >
                  Address Line 2
                </label>
                <div className="col-sm-12 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    id="shopAddress2"
                    placeholder="Address Line 2"
                    autocomplete="off"
                  />
                </div>
              </div> */}
              <div className="form-group row">
                {/* <label htmlFor="shopState" className="col-sm-2 col-form-label">
                  State
                </label> */}
                <div className="col-sm-12 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    id="shopState"
                    placeholder="State"
                    autocomplete="off"
                    onChange={handleInputChange}
                    name={formState.state}
                    value="CA"
                    disabled="disabled"
                  />
                  {/* <select id="zip" name="zip">
                    <option value="California">California</option>
                  </select> */}
                </div>
              </div>
              <div className="form-group row">
                {/* <label
                  htmlFor="shopZipCode"
                  className="col-sm-2 col-form-label"
                >
                  Zip Code
                </label> */}
                <div className="col-sm-3 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                    name="zip"
                    id="shopZipCode"
                    placeholder="Zip Code"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="form-group row">
                {/* <label
                  htmlFor="shopPhoneNumber"
                  className="col-sm-2 col-form-label"
                >
                  Phone #
                </label> */}
                <div className="col-sm-6 submitshop-form-inner">
                  <input
                    type="tel"
                    className="form-control"
                    id="shopPhoneNumber"
                    onChange={handleInputChange}
                    name="phone"
                    placeholder="Phone: (123) 456-7890"
                    autocomplete="off"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    max-maxLength="10"
                  />
                </div>
              </div>
              <hr />
              <div className="form-group row">
                {/* <label
                  htmlFor="shopPhoneNumber"
                  className="col-sm-2 col-form-label"
                >
                  Phone #
                </label> */}
                <div className="col-sm-12 submitshop-form-inner">
                  <label for="rating">
                    Please leave a short shop description:
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                    name="description"
                    id="shopReview"
                    placeholder="Give us some info on this Taco Shop! Location, pricing, parking, featured items, anything!"
                    autocomplete="off"
                  />
                  <br />
                  <label for="rating">Leave a review:</label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                    name="reviews"
                    id="shopReview"
                    placeholder="Leave the first review!"
                    autocomplete="off"
                  />
                  <div className="rating-control">
                    <label for="rating">Give this shop a rating:</label>
                    <select
                      name="rating"
                      onChange={handleInputChange}
                      id="rating"
                    >
                      <option value="1">1 Star</option>
                      <option value="2">2 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="5">5 Stars</option>
                    </select>
                  </div>
                  <hr />
                  <div className="shop-url-control">
                    <label for="rating">Link to online menu:</label>
                    <input
                      type="url"
                      id="url"
                      onChange={handleInputChange}
                      name="menuURL"
                      placeholder="https://bestmexsd.com"
                      pattern="https://.*"
                      size="200"
                    />
                  </div>
                  <div
                    className="featured-food-control"
                    onChange={handleInputChange}
                  >
                    <label for="rating">
                      What types of Mexican foods does this shop specialize in?
                    </label>
                    <div className="featured-food-inner">
                      {/* tacos */}
                      <label htmlFor="Tacos">Tacos</label>
                      <input
                        type="radio"
                        id="Tacos"
                        name="featuredFood"
                        defaultValue="Tacos"
                      />
                      {/* burritos */}
                      <label htmlFor="Burritos">| Burritos</label>
                      <input
                        type="radio"
                        id="Burritos"
                        name="featuredFood"
                        defaultValue="Burritos"
                      />
                      {/* mariscos */}
                      <label htmlFor="Mariscos Tacos">| Mariscos Tacos</label>
                      <input
                        type="radio"
                        id="Mariscos Tacos"
                        name="featuredFood"
                        defaultValue="Mariscos Tacos"
                      />
                      {/* quesadillas */}
                      <label htmlFor="Quesadillas">| Quesadillas</label>
                      <input
                        type="radio"
                        id="Quesadillas"
                        name="featuredFood"
                        defaultValue="Quesadillas"
                      />
                      {/* birria tacos */}
                      <label htmlFor="Birria Tacos">| Birria Tacos</label>
                      <input
                        type="radio"
                        id="Birria Tacos"
                        name="featuredFood"
                        defaultValue="Birria Tacos"
                      />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="form-group row justify-content-center">
                <div className="col-sm-10 ">
                  <button
                    type="submit"
                    className="btn btn-primary nav-buttons shop-submit"
                  >
                    Submit Shop
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubmitShopPage;
