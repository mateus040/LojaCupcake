import MainLayout from "../../components/layouts/main-layout";

export default function Checkout() {
  return (
    <MainLayout>
      <div className="w-full">
        <p className="text-2xl">Checkout</p>

        <div className="mt-5 p-6 border border-gray-300 rounded-md bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            <div className="col-span-6">
              <div className="text-sm space-y-2">
                <p>Para</p>
                <p className="font-semibold">Mateus Gabriel Moreno</p>
                <p>Rua Fulano, 255</p>
                <p>Jaú</p>
                <p>Telefone: 14 99189-6619</p>
                <p>E-mail: mateusgabrielmoreno264@gmail.com</p>
              </div>
            </div>
            <div className="col-span-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">
                  Data do pedido:{" "}
                  <span className="font-normal">20/11/2024</span>
                </p>
                <p className="font-semibold">
                  Cliente:{" "}
                  <span className="font-normal">Mateus Gabriel Moreno</span>
                </p>
              </div>
            </div>
          </div>

          {/* Table for cart items */}
          <div className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="col-span-6">
                <label className="font-light">Forma de pagamento</label>
                <select
                  id="payent_type"
                  className={`w-full p-2 rounded-lg border mt-2`}
                >
                  <option value="">Selecione a forma de pagamento</option>
                  <option value="dinheiro">Dinheiro</option>
                </select>
              </div>
              <div className="col-span-6">
                <label className="font-light">Forma de recebimento</label>
                <select
                  id="delivery_type"
                  className={`w-full p-2 rounded-lg border mt-2`}
                >
                  <option value="">Selecione a forma de recebimento</option>
                  <option value="entregar">Entregar no endereço</option>
                  <option value="retirar">Retirar na loja</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="col-span-6 p-6 border border-gray-300 rounded-md bg-white">
              <p className="font-semibold">Items</p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex">
                  <img
                    src="/images/cupcake-chocolate.png"
                    alt=""
                    className="w-24 object-contain"
                  />
                  <div className="flex flex-col mx-5">
                    <p>Cupcake de chocolate</p>
                    <p className="mt-3">
                      Preço: <span className="font-semibold">R$20.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6 p-6 border border-gray-300 rounded-md bg-white">
              <p className="font-semibold">Valor da compra</p>
              <hr className="mt-5" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 mt-4">
                <div className="col-span-6">
                  <p className="font-semibold">Subtotal:</p>
                </div>
                <div className="col-span-6">
                  <p className="font-light">R$20,00</p>
                </div>
              </div>
              <hr className="mt-5" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 mt-4">
                <div className="col-span-6">
                  <p className="font-semibold">Entrega:</p>
                </div>
                <div className="col-span-6">
                  <p className="font-light">R$10,00</p>
                </div>
              </div>
              <hr className="mt-5" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 mt-4">
                <div className="col-span-6">
                  <p className="font-semibold">Total:</p>
                </div>
                <div className="col-span-6">
                  <p className="font-light">R$30,00</p>
                </div>
              </div>

              <button className="mt-8 w-full text-center border-2 border-gray-500 hover:bg-gray-500 hover:text-white transition-all py-2 px-4 rounded">
                Cancelar
              </button>
              <button className="mt-4 w-full text-center border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white transition-all py-2 px-4 rounded">
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
