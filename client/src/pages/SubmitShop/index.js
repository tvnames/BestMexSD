import React from "react";
import { useAuth } from "../../util/auth";

// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function SubmitShopPage() {
  // const auth = useAuth();
  // return <h1>Hello, {auth.user.username}!</h1>;
  return (
    <div className="container">
      <h2>Submit A Taco Shop to Our Site!</h2>
      <form>
        <div>
          <div className="form-group row">
            <label htmlFor="shopName" className="col-sm-2 col-form-label">
              Restaurant Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="shopName"
                placeholder="Enter the Taco Shop name here"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="shopLocation" className="col-sm-2 col-form-label">
              Location
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="shopLocation"
                placeholder="What part of town is it in?"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="shopAddress1" className="col-sm-2 col-form-label">
              Address Line 1
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="shopAddress1"
                placeholder="Address Line 1"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="shopAddress2" className="col-sm-2 col-form-label">
              Address Line 2
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="shopAddress2"
                placeholder="Address Line 2"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="shopState" className="col-sm-2 col-form-label">
              State
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="shopState"
                placeholder="State"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="shopZipCode" className="col-sm-2 col-form-label">
              Zip Code
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="shopZipCode"
                placeholder="Zip Code"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="shopPhoneNumber"
              className="col-sm-2 col-form-label"
            >
              Phone #
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="shopPhoneNumber"
                placeholder="Phone #"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Submit Shop
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SubmitShopPage;
