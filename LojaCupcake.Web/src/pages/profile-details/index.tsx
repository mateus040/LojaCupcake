import MainLayout from "../../components/layouts/main-layout";

export default function ProfileDetails() {
  return (
    <MainLayout>
      <div className="w-full">
        <p className="text-2xl">Detalhes do perfil</p>

        <div className="mt-5 p-6 border border-gray-300 rounded-md bg-white mx-auto w-full lg:max-w-[800px]">
          <p className="text-2xl">Perfil do usuário</p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
            <div className="col-span-12">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className={`w-full p-2 rounded-lg border`}
              />
            </div>
            <div className="col-span-12">
              <label className="block mb-2 font-medium">Nome</label>
              <input
                type="text"
                id="name"
                className={`w-full p-2 rounded-lg border`}
              />
            </div>
            <div className="col-span-12">
              <label className="block mb-2 font-medium">Endereço</label>
              <input
                type="text"
                id="address"
                className={`w-full p-2 rounded-lg border`}
              />
            </div>
            <div className="col-span-6">
              <label className="block mb-2 font-medium">Telefone</label>
              <input
                type="text"
                id="phone"
                className={`w-full p-2 rounded-lg border`}
              />
            </div>
            <div className="col-span-6">
              <label className="block mb-2 font-medium">Código postal</label>
              <input
                type="text"
                id="zipcode"
                className={`w-full p-2 rounded-lg border`}
              />
            </div>
            <div className="col-span-6">
              <label className="block mb-2 font-medium">Estado</label>
              <input
                type="text"
                id="state"
                className={`w-full p-2 rounded-lg border`}
              />
            </div>
            <div className="col-span-6">
              <label className="block mb-2 font-medium">Cidade</label>
              <input
                type="text"
                id="city"
                className={`w-full p-2 rounded-lg border`}
              />
            </div>
            <div className="col-span-6">
              <label className="block mb-2 font-medium">Senha antiga</label>
              <input
                type="text"
                id="old_password"
                className={`w-full p-2 rounded-lg border`}
              />
            </div>
            <div className="col-span-6">
              <label className="block mb-2 font-medium">Nova senha</label>
              <input
                type="text"
                id="new_password"
                className={`w-full p-2 rounded-lg border`}
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <button className="px-5 py-2 text-center border-2 border-gray-500 hover:bg-gray-500 hover:text-white transition-all rounded">
              Voltar
            </button>
            <button className="px-5 py-2 text-center border-2 border-[#d42e86] hover:bg-[#d42e86] hover:text-white transition-all rounded">
              Atualizar perfil
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
