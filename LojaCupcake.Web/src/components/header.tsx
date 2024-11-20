import { FaBars, FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export const Header = () => {
  const navigate = useNavigate();

  const [menuResponsive, setMenuResponsive] = useState<boolean>(false);

  const handleClick = () => {
    setMenuResponsive((state) => !state);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="flex justify-between lg:justify-around items-center px-3 py-3 container mx-auto">
        <a
          onClick={() => navigate("/?section=home")}
          className="cursor-pointer"
        >
          <div className="flex items-center">
            <img src="/images/cupcake.png" alt="logo" className="h-12 w-12" />
            <p className="mx-3 mt-2 font-light text-xl">CupcakeStore</p>
          </div>
        </a>
        <div
          className={`nav-links duration-500 lg:static absolute lg:min-h-fit min-h-[40vh] left-0 -mt-1 ${
            menuResponsive ? "top-full" : "top-[-600%]"
          } lg:w-auto w-full flex items-center lg:-ms-6 px-5 shadow-xl lg:shadow-none font-semibold bg-white`}
        >
          <ul className="flex lg:flex-row flex-col lg:items-center gap-8 container mx-auto mt-6 lg:mt-2 mb-6 lg:mb-0">
            <li className="lg:hidden mx-4 flex items-center">
              <Link to="/profile">
                <FaRegCircleUser size={30} />
              </Link>

              <Link to="/cart">
                <MdOutlineShoppingCart size={30} className="mx-5 ms-3" />
              </Link>
            </li>

            <li className="mx-4 lg:mx-0">
              <Link
                to="/"
                className="hover:text-[#d42e86] font-medium"
              >
                Vitrine da loja
              </Link>
            </li>
            <li className="mx-4 lg:mx-0">
              <Link
                to="/cart"
                className="hover:text-[#d42e86] font-medium"
              >
                Meu carrinho
              </Link>
            </li>
            <li className="mx-4 lg:mx-0">
              <Link
                to="/requests"
                className="hover:text-[#d42e86] font-medium"
              >
                Meus pedidos
              </Link>
            </li>
            <li className="mx-4 lg:mx-0">
              <Link
                to="/login"
                className="hover:text-[#d42e86] font-medium"
              >
                Fazer Login/Cadastro
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center">
          <Link to="/profile">
            <FaRegCircleUser size={30} className="hover:text-[#d42e86]" />
          </Link>

          <Link to="/cart">
            <MdOutlineShoppingCart size={30} className="hover:text-[#d42e86] mx-5 ms-3" />
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-6">
          <div className="hover:bg-white hover:text-black p-3 rounded transition-all">
            {menuResponsive ? (
              <FaTimes
                className="text-xl cursor-pointer menu"
                onClick={handleClick}
              />
            ) : (
              <FaBars
                className="text-xl cursor-pointer menu"
                onClick={handleClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
