import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../styles/Products.css"; // ✅ Link your custom CSS

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted.current) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="product-loading-title">
          <Skeleton height={40} width={560} />
        </div>
        {[...Array(6)].map((_, index) => (
          <div className="product-skeleton" key={index}>
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="product-filters">
          <button onClick={() => setFilter(data)}>All</button>
          <button onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>

        <div className="product-grid">
          {filter.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h5>{product.title.substring(0, 12)}...</h5>
                <p>{product.description.substring(0, 90)}...</p>
              </div>
              <div className="product-price">${product.price}</div>
              <div className="product-actions">
                <Link to={`/product/${product.id}`} className="btn-primary">
                  Buy Now
                </Link>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    toast.success("Added to cart");
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="product-container">
      <h2 className="product-heading">Latest Products</h2>
      <hr />
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
