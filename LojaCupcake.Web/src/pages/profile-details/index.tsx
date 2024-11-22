import { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/main-layout";
import ProfileModel from "../../interfaces/models/profile.model";
import api from "../../services/api-client";
import ServiceResult from "../../interfaces/service-result";
import Loading from "../../components/loading";
import { useForm } from "react-hook-form";

interface ProfileField {
  name: string;
  email: string;
  zipcode: string;
  street: string;
  number: string;
  neighborhood: string;
  state: string;
  city: string;
  phone: string;
}

export default function ProfileDetails() {
  const [loading, setLoading] = useState<boolean>(false);

  const { register, setValue } = useForm<ProfileField>();

  const fetchProfile = async (): Promise<void> => {
    setLoading(true);

    api
      .get<ServiceResult<ProfileModel>>("/auth/me")
      .then(({ data }) => {
        const profile = data.data as ProfileModel;
        setValue("name", profile.name);
        setValue("email", profile.email);
        setValue("street", profile.street);
        setValue("number", profile.number.toString());
        setValue("neighborhood", profile.neighborhood);
        setValue("state", profile.state);
        setValue("city", profile.city);
        setValue("phone", profile.phone);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <MainLayout>
      <div className="w-full">
        <p className="text-2xl">Detalhes do perfil</p>

        {loading && (
          <div className="mt-6">
            <Loading centered />
          </div>
        )}

        {!loading && (
          <div className="mt-5 p-6 border border-gray-300 rounded-md bg-white mx-auto w-full lg:max-w-[800px]">
            <p className="text-2xl">Perfil do usuário</p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
              <div className="col-span-12">
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full p-2 rounded-lg border`}
                  disabled
                />
              </div>
              <div className="col-span-12">
                <label className="block mb-2 font-medium">Nome</label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full p-2 rounded-lg border`}
                  disabled
                />
              </div>
              <div className="col-span-6">
                <label className="block mb-2 font-medium">Rua</label>
                <input
                  type="text"
                  id="street"
                  {...register("street")}
                  className={`w-full p-2 rounded-lg border`}
                  disabled
                />
              </div>
              <div className="col-span-6">
                <label className="block mb-2 font-medium">Bairro</label>
                <input
                  type="text"
                  id="neighborhood"
                  {...register("neighborhood")}
                  className={`w-full p-2 rounded-lg border`}
                  disabled
                />
              </div>
              <div className="col-span-6">
                <label className="block mb-2 font-medium">Número</label>
                <input
                  type="text"
                  id="number"
                  {...register("number")}
                  className={`w-full p-2 rounded-lg border`}
                  disabled
                />
              </div>
              <div className="col-span-6">
                <label className="block mb-2 font-medium">Estado</label>
                <input
                  type="text"
                  id="state"
                  {...register("state")}
                  className={`w-full p-2 rounded-lg border`}
                  disabled
                />
              </div>
              <div className="col-span-6">
                <label className="block mb-2 font-medium">Cidade</label>
                <input
                  type="text"
                  id="city"
                  {...register("city")}
                  className={`w-full p-2 rounded-lg border`}
                  disabled
                />
              </div>
              <div className="col-span-6">
                <label className="block mb-2 font-medium">Telefone</label>
                <input
                  type="text"
                  id="phone"
                  {...register("phone")}
                  className={`w-full p-2 rounded-lg border`}
                  disabled
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
