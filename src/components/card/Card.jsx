import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Card() {
  const url = useParams();
  const [product, setProduct] = useState();
  useEffect(async () => {
    const res = await fetch(
      "https://dummyjson.com/products/search?q=" + url.id
    );
    const result = await res.json();
    setProduct(result.products[0]);
    console.log(result.products[0]);
  }, []);
  return (
    <div className="max-h-[500px] w-full container mx-auto overflow-x-hidden bg-white px-3 py-4 rounded-3xl">
      {product && (
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={product.images[0]} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize">{product.title}</h2>
            <b className="capitalize">Brendi : {product.brand}</b>
            <del className="block">
              Tannarxi : {product.price * 12300 + " uzs"}
            </del>
            <p className="block">
              Narxi : {product.price * 12300 - 120000 + " uzs"}
            </p>
            <p>Omborda : {product.stock}</p>
            <p>Tarif : {product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Card;
