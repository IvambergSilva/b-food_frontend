import Header from "@/components/Header/Header"
import canSSRAuth from "@/utils/canSSRAuth"
import Head from "next/head"
import Title from "@/components/Title/Title";
import { DashboardContainer, IconRefresh, ModalContent } from "./dashboard.styles";
import { RefreshCw } from "lucide-react";
import React, { useState } from "react";
import setupApiClient from "@/services/api";
import ModalDetails from "@/components/ModalDetails/ModalDetails";
import { toast } from "react-toastify";

export type ActiveOrdersProps = {
    id: string;
    table: number;
    status: boolean;
    draft: boolean;
    name: string | null;
}

interface IDashboardProps {
    toggleTheme(): void;
    themeTitle: string
    activeOrders: ActiveOrdersProps[]
}

export type ModalDetailsProps = {
    id: string;
    amount: number;
    order_id: string
    product_id: string,
    product: {
        id: string,
        name: string,
        price: string,
        description: string,
        banner: string,
    },
    order: {
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
        name: string | null;
    }
}

export default function Dashboard({ toggleTheme, themeTitle, activeOrders }: IDashboardProps) {
    const [refresh, setRefresh] = useState(false)

    const [orders, setOrders] = useState(activeOrders || [])

    const [modalVisible, setModalVisible] = useState(false)

    const [modalDetails, setModalDetails] = useState<ModalDetailsProps[]>()

    async function handleOpenModal(id: string) {
        setModalVisible(true)

        const apiClient = setupApiClient();
        const response = await apiClient.get('/order/details', {
            params: {
                order_id: id
            }
        })

        setModalDetails(response.data)
    }

    async function handleFinishOrder(id: string) {
        const apiClient = setupApiClient();
        await apiClient.put('/order/finish', {
            order_id: id
        })
        toast.success('Pedido concluído com sucesso');

        handleRefreshOrders()

        setModalVisible(false)
    }

    function handleCloseModal(event: React.MouseEvent) {
        if (event.target === event.currentTarget) {
            setModalVisible(false)
        }
    }

    async function handleRefreshOrders() {
        setRefresh(true)
        const apiClient = setupApiClient();
        const response = await apiClient.get('/orders')
        setOrders(response.data)

        if (response.data) {
            setTimeout(() => {
                setRefresh(false)
            }, 500);
        }
    }

    return (
        <>
            <Head>
                <title>B-Food - Painel</title>
            </Head>

            <DashboardContainer>
                <Header
                    toggleTheme={toggleTheme}
                    themeTitle={themeTitle}
                />

                <main className="dashboardContent">
                    <div className="dashboardTitle">
                        <Title name="Últimos pedidos" />
                        <IconRefresh
                            status={refresh}
                            onClick={() => handleRefreshOrders()}
                        >
                            <RefreshCw />
                        </IconRefresh>
                    </div>

                    {orders.length === 0 && (
                        <h2>Não há nenhum pedido aberto...</h2>
                    )}

                    {orders.map((order, index) => {
                        {
                            return (
                                !order.status && (
                                    <section
                                        key={index}
                                        onClick={() => handleOpenModal(order.id)}
                                        className="orderContainer"
                                    >
                                        <span>Mesa {order.table}</span>
                                    </section>
                                )
                            )
                        }
                    })}
                </main>

                {modalVisible && <ModalContent>
                    <div className="modalBG" onClick={(e) => handleCloseModal(e)}></div>
                    <ModalDetails
                        order={modalDetails}
                        onClose={() => setModalVisible(false)}
                        handleFinishOrder={handleFinishOrder}
                    />
                </ModalContent>}
            </DashboardContainer>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (context) => {
    const apiClient = setupApiClient(context)

    const response = await apiClient.get('/orders')

    return {
        props: {
            activeOrders: response.data
        }
    }
})