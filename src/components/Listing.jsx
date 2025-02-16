import React from "react";
import ListItem from "./ListItem";
import Filter from "./Filter";

export default function Listing() {
  return (
    <div className="bg-light">
      <div className="container">
        <h2>Mens Innerware</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          veritatis quidem earum, doloribus delectus, aut quaerat nisi
          distinctio dicta consectetur rem iure sed asperiores fuga voluptate
          fugit corrupti pariatur neque?
        </p>
        <div className="listing">
          <div className="filters">
            <Filter />
          </div>
          <div className="product_list">
            <ListItem price={1299} discount={10}/>
            <ListItem price={1799} discount={25}/>
            <ListItem price={2599} discount={25}/>
            <ListItem price={5999} discount={25}/>
            <ListItem price={12999} discount={25}/>

          </div>
        </div>
      </div>
    </div>
  );
}
