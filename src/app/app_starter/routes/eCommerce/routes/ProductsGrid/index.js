import React from 'react';
import ProductGridItem from 'components/materialUI/eCommerce/ProductGridItem'
import productData from "app/app_starter/routes/eCommerce/routes/productData";

function ProductsGrid() {
  return (
    <div className="row animated slideInUpTiny animation-duration-3">
      {productData.map((product, index) => (
        <ProductGridItem key={index} product={product}/>
      ))}
    </div>
  );
}

export default ProductsGrid;