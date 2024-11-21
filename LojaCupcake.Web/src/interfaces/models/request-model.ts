import DeliveryType from "../../enums/delivery-type";
import PaymentType from "../../enums/payment-type";

export default interface RequestModel {
  id: number;
  amount: number;
  delivery_type: DeliveryType;
  payment_type: PaymentType;
  created_at: string;
}