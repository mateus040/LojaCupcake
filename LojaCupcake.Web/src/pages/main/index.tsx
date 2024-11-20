import { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/main-layout";
import CupcakeModel from "../../interfaces/models/cupcake-model";
import api from "../../services/api-client";
import ListServiceResult from "../../interfaces/list-service-result";
import Loading from "../../components/loading";

export default function Main() {
  const [loading, setLoading] = useState<boolean>(false);

  const [cupcakes, setCupcakes] = useState<CupcakeModel[]>([]);

  const [images, setImages] = useState<{ [key: string]: string }>({});

  const fetchCupcakes = async (): Promise<void> => {
    setLoading(true);

    api
      .get<ListServiceResult<CupcakeModel>>("/cupcakes")
      .then(({ data }) => {
        const cupcakesData = data.data;
        setCupcakes(cupcakesData);

        const imagesTemp: { [key: string]: string } = {};

        cupcakesData.forEach((cupcake) => {
          const imageUrl = `/storage/cupcakes/${cupcake.image}`;
          imagesTemp[cupcake.image] = imageUrl;
        });

        setImages(imagesTemp);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCupcakes();
  }, []);

  return (
    <MainLayout>
      <div className="w-full">
        <p className="text-2xl">Vitrine da loja</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 mt-6 gap-5">
          {loading && (
            <div className="mt-6">
              <Loading centered />
            </div>
          )}

          {!loading && (
            <>
              {cupcakes.map((cupcake) => (
                <div className="col-span-3" key={cupcake.id}>
                  <div className="py-7 px-8 bg-white rounded-lg">
                    {images[cupcake.image] && (
                      <img
                        className="object-contain rounded-lg"
                        src={images[cupcake.image]}
                      />
                    )}

                    <div className="mt-3">
                      <p className="text-xl">{cupcake.name}</p>
                      <p className="text-2xl font-bold mt-2">
                        R${cupcake.amount}{" "}
                        <span className="font-light text-lg">/uni</span>
                      </p>
                      <button className="text-medium bg-transparent text-black border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white w-full p-2 mt-3 rounded transition-all">
                        Adicionar ao carrinho
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
