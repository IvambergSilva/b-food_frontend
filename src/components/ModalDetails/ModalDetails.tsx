import { ModalDetails, } from "@/pages/dashboard";
import { X } from "lucide-react";
import { ModalContainer } from "./ModalDetails.styles";
import Title from "../Title/Title";
import Button from "../Button/Button";

interface IModalDetailsProps {
    onClose: () => void;
    order: ModalDetails[];
    handleFinishOrder: (id: string) => void;
}

export default function ModalDetails({ onClose, order, handleFinishOrder }: IModalDetailsProps) {
    return (
        <ModalContainer>
            <header>
                <Title name="Detalhes do pedido" />
                {order && order.length > 0 && <h2>Mesa {order[0].order.table}</h2>}
                <button onClick={() => onClose()}>
                    <X />
                </button>
            </header>


            <main>
                <ul>
                    {order && order.map((orderDetail, index) => (
                        <li key={index}>
                            <p>{orderDetail.amount} - {orderDetail.product.name}</p>
                            <span>{orderDetail.product.description}</span>
                        </li>
                    ))}
                </ul>

                <Button
                    name="Concluir pedido"
                    model="conclude"
                    onClick={() => handleFinishOrder(order[0].order_id)}
                />
            </main>
        </ModalContainer>
    )
}
