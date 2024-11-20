import MainLayout from "../../components/layouts/main-layout";

export default function Request() {
  const orders = [
    {
      id: 1,
      status: "Aguardando",
      payment_type: "Dinheiro",
      total: "R$ 20,00",
      delivery_type: "Entrega",
      date: "20/11/2024",
    },
    {
      id: 2,
      status: "Aguardando",
      payment_type: "Dinheiro",
      total: "R$ 20,00",
      delivery_type: "Entrega",
      date: "20/11/2024",
    },
  ];

  return (
    <MainLayout>
      <div className="w-full">
        <p className="text-2xl">Meus pedidos</p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-2 border-gray-300 text-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Status do pedido</th>
                <th className="border border-gray-300 p-4 text-center">
                  Método de pagamento
                </th>
                <th className="border border-gray-300 p-4 text-center">
                  Total
                </th>
                <th className="border border-gray-300 p-4 text-center">
                  Tipo de entrega
                </th>
                <th className="border border-gray-300 p-4 text-center">
                  Data do pedido
                </th>
                <th className="border border-gray-300 p-4 text-center">
                  Opções
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="bg-white">
                  <td className="border border-gray-300 p-4">{order.status}</td>
                  <td className="border border-gray-300 p-4 text-center">
                    {order.payment_type}
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    {order.total}
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    {order.delivery_type}
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    {order.date}
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    Ir para o checkout
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
