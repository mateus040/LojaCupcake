import { useState } from "react";
import MainLayout from "../../components/layouts/main-layout";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Cupcake de chocolate",
      price: 20.0,
      quantity: 1,
      image: "/images/cupcake-chocolate.png",
    },
  ]);

  const increaseQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <MainLayout>
      <div className="w-full">
        <p className="text-2xl">Carrinho de compras</p>

        <div className="hidden lg:grid grid-cols-12 mt-6 text-sm font-semibold border-b border-gray-400 pb-2">
          <div className="col-span-6">Item</div>
          <div className="col-span-2 text-center">Quantidade</div>
          <div className="col-span-2 text-center">Preço</div>
          <div className="col-span-2 text-center">Subtotal</div>
        </div>

        <div className="mt-4 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 items-center lg:items-start p-4 border border-gray-400 rounded-md"
            >
              <div className="lg:col-span-6 flex lg:flex-row flex-col items-center lg:items-start mt-6 lg:mt-0">
                <img
                  className="w-56 lg:w-24 object-contain rounded-lg"
                  src={item.image}
                  alt={item.name}
                />
                <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start mt-2 lg:mt-0 lg:ml-5">
                  <p className="font-medium mt-5 lg:mt-0">{item.name}</p>
                  <button className="mt-4 w-10 h-10 flex items-center justify-center transition-all border-2 border-red-500 rounded text-red-500 hover:bg-red-500 hover:text-white">
                    <FaTrash />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col items-center mt-4 lg:mt-0">
                <p className="lg:hidden font-semibold mb-2 text-center">
                  Quantidade
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white transition-all"
                  >
                    -
                  </button>
                  <p className="w-8 text-center">{item.quantity}</p>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col items-center mt-4 lg:mt-0">
                <p className="lg:hidden font-semibold mb-1">Preço</p>
                <p className="font-medium">R${item.price.toFixed(2)}</p>
              </div>

              <div className="lg:col-span-2 flex flex-col items-center mt-4 lg:mt-0">
                <p className="lg:hidden font-semibold mb-1 flex items-center justify-center">
                  Subtotal
                </p>
                <p className="font-medium flex items-center justify-center">
                  R${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-end justify-end">
          <Link
            to="/checkout"
            className="lg:w-auto w-full text-center border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white transition-all py-2 px-4 rounded"
          >
            Fazer Checkout
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
