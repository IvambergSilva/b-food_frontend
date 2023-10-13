import Header from "@/components/Header/Header"
import canSSRAuth from "@/utils/canSSRAuth"
import Head from "next/head"
import { IToggleProps } from "@/contexts/authContext";
import Title from "@/components/Title/Title";
import { DashboardContainer, IconRefresh } from "./dashboard.styles";
import { RefreshCw } from "lucide-react";
import { useState } from "react";
import setupApiClient from "@/services/api";
import ModalDetails from "@/components/ModalDetails/ModalDetails";

export type ActiveOrders = {
    id: string;
    table: number;
    status: boolean;
    draft: boolean;
    name: string | null;
}

interface IDashboardProps {
    toggleTheme(): void;
    themeTitle: string
    activeOrders: ActiveOrders[]
}

export type ModalDetails = {
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

    const [modalDetails, setModalDetails] = useState<ModalDetails[]>()

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

                <main>
                    <div className="dashboardTitle">
                        <Title name="Últimos pedidos" />
                        <IconRefresh
                            active={refresh}
                            onClick={() => setRefresh(true)}
                        >
                            <RefreshCw />
                        </IconRefresh>
                    </div>

                    {orders.map((order) => {
                        {
                            return (
                                !order.status && (
                                    <section
                                        key={order.id}
                                        onClick={() => handleOpenModal(order.id)}
                                    >
                                        <span>Mesa {order.table}</span>
                                    </section>
                                )
                            )
                        }
                    })}
                </main>

                {modalVisible && <ModalDetails
                    order={modalDetails}
                    onClose={() => setModalVisible(false)}
                />}

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