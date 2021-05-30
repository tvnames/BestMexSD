import React from "react";
import { postShopAPI } from "../../util/shopAPI";
// import { useAuth } from "../../util/auth";

// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function SubmitShopPage() {
  // const auth = useAuth();
  // return <h1>Hello, {auth.user.username}!</h1>;

  // postShopAPI()

  const handleSubmit = (evt) => {
    evt.preventDefault();
    postShopAPI();
    console.log("Click Handled!");

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

  return (
    <div id="submitshop-page" className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-8">
          <h2>Submit A Taco Shop to Our Site!</h2>
          <form id="submitshop-form">
            <div>
              <div className="form-group row">
                {/* <label htmlFor="shopName">Restaurant Name:</label> */}
                <div className="col-sm-12 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
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
                    value="California"
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
                    placeholder="Phone: (123) 456-7890"
                    autocomplete="off"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    max-maxLength="10"
                  />
                </div>
              </div>
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
