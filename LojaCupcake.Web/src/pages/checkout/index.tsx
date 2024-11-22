import { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/main-layout";
import ProfileModel from "../../interfaces/models/profile.model";
import api from "../../services/api-client";
import ServiceResult from "../../interfaces/service-result";
import { format } from "date-fns";
import Loading from "../../components/loading";
import CartModel from "../../interfaces/models/cart-model";
import ListServiceResult from "../../interfaces/list-service-result";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";

interface DataField {
  delivery_type: string;
  payment_type: string;
}

export default function Checkout() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCheckout, setLoadingCheckout] = useState<boolean>(false);

  const [profile, setProfile] = useState<ProfileModel | null>();
  const [cupcakesCart, setCupcakesCart] = useState<CartModel[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataField>();

  const fetchProfile = async (): Promise<void> => {
    setLoading(true);

    api
      .get<ServiceResult<ProfileModel>>("/auth/me")
      .then(({ data }) => {
        setProfile(data.data);
      })
      .finally(() => setLoading(false));
  };

  const fetchCupcakesCart = async (): Promise<void> => {
    setLoading(true);

    api
      .get<ListServiceResult<CartModel>>("/cart")
      .then(({ data }) => {
        setCupcakesCart(data.data);
      })
      .finally(() => setLoading(false));
  };

  const handleCheckout: SubmitHandler<DataField> = async (data) => {
    setLoadingCheckout(true);

    api
      .post("/checkout", data)
      .then(() => {
        toast("Compra realizada com sucesso!");
        navigate("/requests");
      })
      .finally(() => setLoadingCheckout(false));
  };

  const calculateSubtotal = () => {
    return cupcakesCart.reduce(
      (acc, { cupcake, quantity }) => acc + cupcake.amount * quantity,
      0
    );
  };

  const total = calculateSubtotal();

  useEffect(() => {
    fetchProfile();
    fetchCupcakesCart();
  }, []);

  return (
    <MainLayout>
      <div className="w-full">
        <p className="text-2xl">Checkout</p>

        {loading && (
          <div className="mt-6">
            <Loading centered />
          </div>
        )}

        {!loading && (
          <form onSubmit={handleSubmit(handleCheckout)}>
            <div className="mt-5 p-6 border border-gray-300 rounded-md bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                <div className="col-span-6">
                  <div className="text-sm space-y-2">
                    <p>Para</p>
                    <p className="font-semibold">{profile?.name}</p>
                    {profile?.street && profile?.number && (
                      <p>
                        {profile?.street}, {profile?.number}
                      </p>
                    )}

                    {profile?.city && profile?.state && (
                      <p>
                        {profile?.city} - {profile?.state}
                      </p>
                    )}

                    {profile?.phone && <p>Telefone: {profile?.phone}</p>}

                    <p>E-mail: {profile?.email}</p>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="text-sm space-y-2">
                    <p className="font-semibold">
                      Data do pedido:{" "}
                      <span className="font-normal">
                        {profile?.created_at &&
                          format(new Date(profile.created_at), "dd/MM/yyyy")}
                      </span>
                    </p>
                    <p className="font-semibold">
                      Cliente:{" "}
                      <span className="font-normal">{profile?.name}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  <div className="col-span-6">
                    <label className="font-light">Forma de pagamento</label>
                    <select
                      id="payent_type"
                      className={`w-full p-2 rounded-lg border ${
                        errors.payment_type
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      {...register("payment_type", {
                        required: "Informe o tipo de pagamento",
                      })}
                    >
                      <option value="">Selecione a forma de pagamento</option>
                      <option value="money">Dinheiro</option>
                    </select>
                    {errors.payment_type && (
                      <p className="text-red-500 text-sm">
                        {errors.payment_type.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-6">
                    <label className="font-light">Forma de recebimento</label>
                    <select
                      id="delivery_type"
                      className={`w-full p-2 rounded-lg border ${
                        errors.delivery_type
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      {...register("delivery_type", {
                        required: "Informe a forma de recebimento",
                      })}
                    >
                      <option value="">Selecione a forma de recebimento</option>
                      <option value="receive">Entregar no endereço</option>
                      <option value="withdraw">Retirar na loja</option>
                    </select>
                    {errors.delivery_type && (
                      <p className="text-red-500 text-sm">
                        {errors.delivery_type.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="col-span-6 p-6 border border-gray-300 rounded-md bg-white">
                  <p className="font-semibold">Itens</p>
                  {cupcakesCart.map(({ cupcake, quantity }) => (
                    <div
                      className="flex items-center justify-between mt-6"
                      key={cupcake.id}
                    >
                      <div className="flex">
                        <img
                          src={`http://127.0.0.1:8000/storage/${cupcake.image}`}
                          alt={cupcake.name}
                          className="w-24 object-contain"
                        />
                        <div className="flex flex-col mx-5">
                          <p className="break-words">{cupcake.name}</p>
                          <div className="flex items-center space-x-5">
                            <p className="mt-3">
                              Preço:{" "}
                              <span className="font-semibold">
                                R${cupcake.amount}
                              </span>
                            </p>
                            <p className="mt-3">
                              Quantidade:{" "}
                              <span className="font-semibold">{quantity}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-span-6 p-6 border border-gray-300 rounded-md bg-white">
                  <p className="font-semibold">Valor da compra</p>
                  <hr className="mt-5" />
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 mt-4">
                    <div className="col-span-6">
                      <p className="font-semibold">Total:</p>
                    </div>
                    <div className="col-span-6">
                      <p className="font-light">R${total.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => navigate("/cart")}
                      className="w-full text-center border-2 border-gray-500 hover:bg-gray-500 hover:text-white transition-all py-2 px-4 rounded"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="mt-4 w-full text-center border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white transition-all py-2 px-4 rounded"
                      disabled={loading}
                    >
                      {loadingCheckout ? "Finalizando..." : "Finalizar compra"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </MainLayout>
  );
}
