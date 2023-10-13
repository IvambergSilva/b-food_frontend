import { ModalDetails, } from "@/pages/dashboard";
import { X } from "lucide-react";
import { ModalContainer } from "./ModalDetails.styles";
import Title from "../Title/Title";

interface IModalDetailsProps {
    onClose: () => void;
    order: ModalDetails[];
}

export default function ModalDetails({ onClose, order }: IModalDetailsProps) {

    const orders = (orderDetails: ModalDetails[]) => {
        const resultOrders = new Map<string, ModalDetails>()

        if (orderDetails) {
            orderDetails.forEach((order) => {
                const existingOrder = resultOrders.get(order.product.id)

                if (existingOrder) {
                    existingOrder.amount += order.amount;
                } else {
                    resultOrders.set(order.product.id, { ...order })
                }
            })
        }

        return Array.from(resultOrders.values())
    }

    const groupedOrder = orders(order)

    return (
        <ModalContainer>
            <header>
                <Title name="Detalhes do pedido" />
                <button onClick={() => onClose()}>
                    <X />
                </button>
            </header>

            {order && order.length > 0 && <h2>Mesa: {order[0].order.table}</h2>}

            {groupedOrder.map((orderDetail) => (
                <main key={orderDetail.product_id}>
                    <ul>
                        <li>
                            <p>{orderDetail.amount} - {orderDetail.product.name}</p>
                        </li>
                    </ul>
                   <span>{orderDetail.product.description}</span>
                </main>
            ))}
        </ModalContainer>
    )
}
