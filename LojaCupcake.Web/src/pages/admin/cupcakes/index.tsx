import BreadCrumb, { Page } from "../../../components/bread-crumb";
import AdminLayout from "../../../components/layouts/admin-layout";

export default function Cupcakes() {
  const breadCrumbHistory: Page[] = [
    {
      link: "/admin",
      name: "Início",
    },
    {
      link: "/admin/cupcakes",
      name: "Cupcakes",
    },
  ];

  return (
    <AdminLayout>
      <div className="mb-3">
        <BreadCrumb history={breadCrumbHistory} />
      </div>

      <p className="font-medium text-slate-600 mt-8">
        Campos com (*) são obrigatórios
      </p>
      <form className="mt-3">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-6">
          <div className="col-span-12">
            <label className="block mb-2 font-medium">Nome*</label>
            <input
              type="text"
              id="nome"
              placeholder="Informe o nome do produto"
              className={`w-full p-2 rounded-lg border `}
            />
          </div>
          <div className="col-span-12 xl:col-span-6">
            <label className="block mb-2 font-medium">Descrição*</label>
            <input
              type="text"
              id="description"
              placeholder="Informe a descrição"
              className={`w-full p-2 rounded-lg border `}
            />
          </div>
          <div className="col-span-12 xl:col-span-6">
            <label className="block mb-2 font-medium">Ingredientes*</label>
            <input
              type="text"
              id="ingredients"
              placeholder="Informe os ingredientes"
              className={`w-full p-2 rounded-lg border `}
            />
          </div>
          <div className="col-span-12 xl:col-span-4">
            <label className="block mb-2 font-medium">Preço*</label>
            <input
              type="text"
              id="amount"
              placeholder="Informe o preço"
              className="w-full p-2 rounded-lg border border-gray-300"
            />
          </div>
          <div className="col-span-12 xl:col-span-4">
            <label className="block mb-2 font-medium">Quantidade*</label>
            <input
              type="text"
              id="quantity"
              placeholder="Informe a quantidade"
              className="w-full p-2 rounded-lg border border-gray-300"
            />
          </div>
          <div className="col-span-12 xl:col-span-4">
            <label className="block mb-2 font-medium">Foto*</label>
            <input
              type="file"
              id="image"
              className={`w-full p-2 rounded-lg border`}
            />
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="rounded-full px-8 py-2 bg-slate-900 text-white hover:bg-slate-800 transition-all"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </AdminLayout>
  );
}
