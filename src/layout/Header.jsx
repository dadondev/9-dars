import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let i = 0;
function Header() {
  const categorys = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  const [search, setSearch] = useState();
  const [isSubmit, setSubmit] = useState(true);

  useEffect(() => {
    setSubmit(false);
  }, [isSubmit]);

  return (
    <>
      <div>
        <div className="flex mx-auto justify-between items-center mb-3 sm:mb-0 py-4 px-3">
          <div className="flex gap-3 items-center">
            <Link to={"/"} className="text-xl lg:text-2xl">
              market<span className="text-sky-400 font-semibold">GO</span>
            </Link>
            <div class="dropdown flex gap-4 px-3 py-2 rounded-xl text-white bg-sky-400 hidden md:flex">
              <label for="drop">Categorys</label>
              <div
                tabindex="0"
                role="button"
                class="w-5 flex items-center"
                id="drop"
              >
                <svg
                  className="w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
                </svg>
              </div>
              <ul
                tabindex="0"
                class="dropdown-content -translate-y-6 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black overflow-auto max-h-[1000px] capitalize"
              >
                {categorys.map((e, i) => (
                  <li key={i}>
                    <Link key={i} to={e}>
                      {e}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex sm:gap-18 gap-3 flex-row">
            <form
              className="grid md:grid-cols-[20rem_4rem] grid-cols-[1fr_4rem] max-h-[50px] md:grid hidden px-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmit(true);
              }}
            >
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                placeholder="Search something product..."
                className="input focus:outline-none max-h-full border-[3px] border-sky-400 focus:border-sky-400 rounded-lg rounded-r-none"
              />
              <button className="btn no-animation hover:opacity-85 hover:bg-sky-400 rounded-none rounded-r-lg border border-sky-400 flex items-center justify-center bg-sky-400 max-h-full">
                <svg
                  className="max-w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(250,250,250,1)"
                >
                  <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                </svg>
              </button>
            </form>
            <div className="flex gap-4">
              <button className="flex flex-col items-center">
                <img src="./cart.png" alt="shopping-cart" />
                <span>Savat</span>
              </button>
              <button className="flex flex-col items-center">
                <img src="./like.png" alt="shopping-cart" />
                <span>Liked</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-[130px_1fr]  gap-4 md:hidden px-3 ">
          <div class="dropdown px-3 py-2 rounded-xl text-white bg-sky-400 max-w-[130px] h-full">
            <div
              tabindex="0"
              role="button"
              class="justify-between flex items-center pt-1"
              id="drop"
            >
              Categorys
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            </div>
            <ul
              tabindex="0"
              class="dropdown-content -translate-y-48 sm:-translate-y-32 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black  max-h-[1000px] capitalize"
            >
              {categorys.map((e, i) => (
                <li key={i}>
                  <Link key={i} to={e}>
                    {e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <form
            className="grid sm:grow max-w-full w-full md:grid-cols-[20rem_4rem] grid-cols-[1fr_4rem] max-h-[50px] "
            onSubmit={(e) => {
              e.preventDefault();
              setSubmit(true);
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search something product..."
              className="input focus:outline-none max-h-full border-[3px] border-sky-400 focus:border-sky-400 rounded-lg rounded-r-none"
            />
            <button className="btn no-animation hover:opacity-85 hover:bg-sky-400 rounded-none rounded-r-lg border border-sky-400 flex items-center justify-center bg-sky-400 max-h-full">
              <svg
                className="max-w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(250,250,250,1)"
              >
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;
