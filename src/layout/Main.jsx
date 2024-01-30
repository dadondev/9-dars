import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Main() {
  const [card, setCard] = useState();
  const url = useParams();
  useEffect(async () => {
    const res = await fetch(
      "https://dummyjson.com/products/category/" + url.id + "?limit=10"
    );
    const result = await res.json();
    setCard(result.products);
    console.log(result.products);
  }, [url]);
  console.log(url.id);
  return (
    <div className="px-3">
      <h1 className="text-3xl mb-2 font-semibold capitalize inline-flex flex-col before:content-[''] before:h-1 before:rounded-md before:absolute relative before:-bottom-3 border-b-[4px]  pb-2 border-b-black before:w-[calc(100%-20%)] before:bg-black">
        {url.id}
      </h1>
      <div className="flex justify-evenly gap-5 mt-4 flex-wrap">
        {card &&
          card.map((cardInfo) => (
            <div class="card w-[280px] bg-base-100 shadow-xl max-h-[400px]">
              <figure>
                <img src={cardInfo.images[0]} alt="Shoes" />
              </figure>
              <div class="card-body max-h-[250px]">
                <h2 class="card-title capitalize">{cardInfo.title}</h2>
                <p>{cardInfo.price * 12300 + "uzs"}</p>
                <div class="card-actions justify-end">
                  <Link
                    to={cardInfo.title}
                    class="btn btn-primary bg-sky-400 border-none hover:bg-sky-300"
                  >
                    <img src="./cart.png" alt="cart.png" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Main;
