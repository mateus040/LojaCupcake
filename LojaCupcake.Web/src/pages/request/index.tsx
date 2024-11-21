import { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/main-layout";
import RequestModel from "../../interfaces/models/request-model";
import ListServiceResult from "../../interfaces/list-service-result";
import api from "../../services/api-client";
import { format } from "date-fns";
import Loading from "../../components/loading";
import { getDeliveryTypeLabel, getPaymentTypeLabel } from "../../utils/convert-velues-enum";

export default function Request() {
  const [loading, setLoading] = useState<boolean>(false);

  const [requests, setRequests] = useState<RequestModel[]>([]);

  const fetchRequests = async (): Promise<void> => {
    setLoading(true);

    api
      .get<ListServiceResult<RequestModel>>("/checkout")
      .then(({ data }) => {
        setRequests(data.data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <MainLayout>
      <div className="w-full">
        <p className="text-2xl">Meus pedidos</p>

        {loading && (
          <div className="mt-6">
            <Loading centered />
          </div>
        )}

        {!loading && requests.length > 0 && (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-2 border-gray-300 text-sm rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
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
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request.id} className="bg-white">
                    <td className="border border-gray-300 p-4 text-center">
                      {getPaymentTypeLabel(request.payment_type)}
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      {request.amount}
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      {getDeliveryTypeLabel(request.delivery_type)}
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      {format(new Date(request.created_at), "dd/MM/yyyy")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && requests.length === 0 && (
          <p className="mt-6 flex items-center justify-center">
            Nenhum pedido encontrado
          </p>
        )}
      </div>
    </MainLayout>
  );
}
