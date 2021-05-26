import React from "react";
import { useAuth } from "../../util/auth";
import Image from "../../components/ImageContainer/image";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ReviewCard from "../../components/Card/ReviewCard";
import pic from "./300.png";




// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function ShopPage() {
  // const auth = useAuth();
  // <h1>Hello, {auth.user.username}!</h1>;
  return (
    <>
      <div className="container-fluid border border-dark m-2">
        <div className="row">
          <div className="col">
            <Image src={pic} />
          </div>
          <div className="col">
            {/* shopName, src, description, location, phone, address, featuredFood, otherInfo */}
            <FeaturedCard
              shopName="Sombreros"
              description="A great food place"
              location="North Park"
              phone="555-555-5555"
              address="25 Second Street, El Cajon, CA, 92020"
              featuredFood="California Burrito"

            />
          </div>
        </div>

      </div>
      <div className="container-fluid border border-dark m-2">
        <h3>Reviews for "Sombreros Mexican Food"</h3>
        <ReviewCard
          reviewDate="May 21st, 2021"
          reviewText="This place was soooooo good"
        />
        <ReviewCard
          reviewDate="February 1st, 2021"
          reviewText="This place was soooooo nasty"
        />
      </div>
    </>
  )
}

export default ShopPage;
