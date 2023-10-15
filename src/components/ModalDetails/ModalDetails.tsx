import { ModalDetailsProps, } from "@/pages/dashboard";
import { X } from "lucide-react";
import { ModalContainer } from "./ModalDetails.styles";
import Title from "../Title/Title";
import Button from "../Button/Button";

interface IModalDetailsProps {
    onClose: () => void;
    order: ModalDetailsProps[];
    handleFinishOrder: (id: string) => void;
}

export default function ModalDetails({ onClose, order, handleFinishOrder }: IModalDetailsProps) {
    return (
        <ModalContainer>
            <header className="modalHeader">
                <Title name="Detalhes do pedido" />
                <button onClick={() => onClose()}>
                    <X />
                </button>
            </header>
            
            {order && order.length > 0 && <h2>Mesa {order[0].order.table}</h2>}

            <main className="modalDetailsContent">
                <div className="tableContainer">
                    <table>
                        <thead>
                            <th>Quantidade</th>
                            <th>Produto</th>
                        </thead>

                        <tbody>
                            {order && order.map((orderDetail, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{orderDetail.amount}</td>
                                        <td>{orderDetail.product.name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <Button
                        name="Concluir pedido"
                        model="conclude"
                        onClick={() => handleFinishOrder(order[0].order_id)}
                    />
                </div>
            </main>
        </ModalContainer>
    )
}
