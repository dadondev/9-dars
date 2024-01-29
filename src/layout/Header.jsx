import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex container mx-auto justify-between px-3 items-center py-4 bg-white">
        <Link to={"/"} className="text-xl lg:text-2xl">
          market<span className="text-sky-400 font-semibold">GO</span>
        </Link>
        <div className="flex sm:gap-18 gap-3 flex-row">
          <form
            className="grid md:grid-cols-[20rem_4rem] grid-cols-[1fr_4rem] max-h-[50px] sm:grid hidden px-3"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
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
          <div className="flex justify-end gap-4">
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
      <form
        className="grid md:grid-cols-[20rem_4rem] grid-cols-[1fr_4rem] max-h-[50px] sm:hidden px-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
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
    </>
  );
}

export default Header;
