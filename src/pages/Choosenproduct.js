import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import Item from "../component/item";
import api from "../api/api";
import "../App.css";

function Choosenproduct({ onAddToCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await api.get("/products"); // fetch all products
        const found = res.data.find(p => p._id.toString() === id);
        setProduct(found || null);

        if (found) {
          const relatedItems = res.data.filter(
            p => p.type === found.type && p._id.toString() !== found._id.toString()
          );
          setRelated(relatedItems);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center pt-5 mt-5">Loading...</p>;

  if (!product) {
    return (
      <div className="container pt-5 mt-5 text-center">
        <h2>Product not found 😕</h2>
        <Link to="/" className="btn btn-dark mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      {/* Product Header */}
      <div className="bg-dark p-5 text-center text-light">
        <h1 className="Header">{product.header}</h1>
      </div>

      {/* Product Details */}
      <div className="container mt-5 mx-auto row">
        <div className="col-md-6">
          <img
            src={product.img?.[0] || "/placeholder.png"}
            alt={product.header}
            className="img-fluid rounded-3"
          />
        </div>

        <div className="col-md-6">
          <h1 className="my-3 Header">{product.header}</h1>

          <div className="d-flex justify-content-start gap-5 my-3">
            <p>
              <FaStar className="FaStar" />
              <FaStar className="FaStar" />
              <FaStar className="FaStar" />
              <FaStar className="FaStar" />
              <FaStar className="FaStar" />
            </p>
            <p>4.7 ratings</p>
          </div>

          <div className="d-flex justify-content-start gap-5 my-3">
            <h3>${product.cost || 0}</h3>
            <p>Category: {product.type}</p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
            iure quas illo voluptates labore tempore!
          </p>

          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="border border-2 border-info rounded-3"
            style={{ width: "70px" }}
          />
          <br />
          <button
            className="btn btn-info text-light mt-3"
            onClick={() =>
              onAddToCart({
                ...product,
                quantity,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="ms-3 my-5">
        <button
          className={`bg-primary bg-opacity-10 rounded-4 me-2 ${
            activeTab === "description" ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`bg-primary bg-opacity-10 rounded-4 ${
            activeTab === "reviews" ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (2)
        </button>

        {activeTab === "description" && (
          <div className="mt-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum
              accusantium iste, voluptas cumque provident! Consequatur officiis animi
              rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio
              repudiandae.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="mt-3">
            <div>
              <p>John Doe</p>
              <p className="text-warning">4.8 (rating)</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div>
              <p>Jane Smith</p>
              <p className="text-warning">4.5 (rating)</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <>
          <h3 className="ms-4">You may also like</h3>
          <div className="container-fluid py-3">
            <div className="container mx-auto w-75">
              <div className="row my-5">
                {related.map((item) => (
                  <Item
                    key={item._id}
                    _id={item._id}
                    Discount={item.Discount}
                    img={item.img}
                    header={item.header}
                    cost={item.cost}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Choosenproduct;
