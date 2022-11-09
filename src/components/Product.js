import React from "react";
import CardItem from "./CardItem";
import Filter from "./Filter";

const Product = () => {

    return (
        <>
            <h2 className="title-product">All Product</h2>
            <div className="shop">
                <Filter />
                <div className="product">
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
            </div>
        </>

    );
};
export default Product;
