import MainLayout from "../../components/layouts/main-layout";

export default function Main() {
  return (
    <MainLayout>
      <div className="w-full">
        <p className="text-2xl">Vitrine da loja</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 mt-6 gap-5">
          <div className="col-span-3">
            <div className="py-7 px-8 bg-white rounded-lg">
            <img
              className="object-contain rounded-lg"
              src="/images/cupcake-chocolate.png"
            />
            <div className="mt-3">
              <p className="text-xl">Cupcake de chocolate</p>
              <p className="text-2xl font-bold mt-2">R$20,00 <span className="font-light text-lg">/uni</span></p>
              <button className="text-medium bg-transparent text-black border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white w-full p-2 mt-3 rounded transition-all">
                Adicionar ao carrinho
              </button>
            </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="py-7 px-8 bg-white rounded-lg">
            <img
              className="object-contain rounded-lg"
              src="/images/cupcake-2.jpeg"
            />
            <div className="mt-3">
              <p className="text-xl">Cupcake de chocolate</p>
              <p className="text-2xl font-bold mt-2">R$20,00 <span className="font-light text-lg">/uni</span></p>
              <button className="text-medium bg-transparent text-black border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white w-full p-2 mt-3 rounded transition-all">
                Adicionar ao carrinho
              </button>
            </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="py-7 px-8 bg-white rounded-lg">
            <img
              className="object-contain rounded-lg"
              src="/images/cupcake-chocolate.png"
            />
            <div className="mt-3">
              <p className="text-xl">Cupcake de chocolate</p>
              <p className="text-2xl font-bold mt-2">R$20,00 <span className="font-light text-lg">/uni</span></p>
              <button className="text-medium bg-transparent text-black border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white w-full p-2 mt-3 rounded transition-all">
                Adicionar ao carrinho
              </button>
            </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="py-7 px-8 bg-white rounded-lg">
            <img
              className="object-contain rounded-lg"
              src="/images/cupcake-chocolate.png"
            />
            <div className="mt-3">
              <p className="text-xl">Cupcake de chocolate</p>
              <p className="text-2xl font-bold mt-2">R$20,00 <span className="font-light text-lg">/uni</span></p>
              <button className="text-medium bg-transparent text-black border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white w-full p-2 mt-3 rounded transition-all">
                Adicionar ao carrinho
              </button>
            </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="py-7 px-8 bg-white rounded-lg">
            <img
              className="object-contain rounded-lg"
              src="/images/cupcake-chocolate.png"
            />
            <div className="mt-3">
              <p className="text-xl">Cupcake de chocolate</p>
              <p className="text-2xl font-bold mt-2">R$20,00 <span className="font-light text-lg">/uni</span></p>
              <button className="text-medium bg-transparent text-black border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white w-full p-2 mt-3 rounded transition-all">
                Adicionar ao carrinho
              </button>
            </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="py-7 px-8 bg-white rounded-lg">
            <img
              className="object-contain rounded-lg"
              src="/images/cupcake-chocolate.png"
            />
            <div className="mt-3">
              <p className="text-xl">Cupcake de chocolate</p>
              <p className="text-2xl font-bold mt-2">R$20,00 <span className="font-light text-lg">/uni</span></p>
              <button className="text-medium bg-transparent text-black border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white w-full p-2 mt-3 rounded transition-all">
                Adicionar ao carrinho
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
