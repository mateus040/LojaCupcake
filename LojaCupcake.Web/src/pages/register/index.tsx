import CleanLayout from "../../components/layouts/clean-layout";

export default function Register() {
  return (
    <CleanLayout>
      <img
        src="/images/cupcake.png"
        alt="logo"
        className="w-24 mx-auto lg:hidden mt-10"
      />

      <div className="flex flex-col items-center justify-center mt-5">
        <h2 className="text-3xl text-center font-semibold leading-tight text-black sm:text-4xl">
          CupcakeStore
        </h2>

        <p className="mt-3 text-xl font-light">Registre sua conta</p>
      </div>

      <form className="mt-5">
        <div className="space-y-5">
          <div>
            <label className="text-base font-medium text-gray-900">
              Nome
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="name"
                id="name"
                placeholder="Informe seu nome"
                className="block w-full py-4 pl-5 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900">
              E-mail
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="email"
                id="email"
                placeholder="Informe seu e-mail"
                className="block w-full py-4 pl-5 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:bg-white"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-base font-medium text-gray-900">
                Senha
              </label>
            </div>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="password"
                id="password"
                placeholder="Informe sua senha"
                className="block w-full py-4 pl-5 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:black focus:bg-whit"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-base font-medium text-gray-900">
                Confirme sua senha
              </label>
            </div>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="password_confirmation"
                id="password_confirmation"
                placeholder="Informe novamente sua senha"
                className="block w-full py-4 pl-5 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:black focus:bg-whit"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#d42e86] inline-flex items-center justify-center w-full h-16 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md hover:bg-opacity-95"
          >
            Registrar
          </button>
        </div>
      </form>
    </CleanLayout>
  );
}
