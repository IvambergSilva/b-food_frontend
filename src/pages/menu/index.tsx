import Header from "@/components/Header/Header"
import canSSRAuth from "@/utils/canSSRAuth"
import Head from "next/head"
import Title from "@/components/Title/Title";
import { MenuContainer } from "./menu.styles";
import React, { useEffect, useState } from "react";
import setupApiClient from "@/services/api";
import { CategoryListProps } from "../product";
import { RefreshCw } from "lucide-react";
import { IconRefresh } from "../dashboard/dashboard.styles";
import { FormattedNumber } from "react-intl";

type ProductProps = {
    id: string,
    name: string,
    price: string,
    description?: string,
    category_id: string,
}

interface IMenuProps {
    toggleTheme(): void;
    themeTitle: string;
    categoryList: CategoryListProps[];
    productList: ProductProps[];
}

export default function Menu({ toggleTheme, themeTitle, categoryList, productList }: IMenuProps) {
    const [categories, setCategories] = useState(categoryList || []);
    const [products, setProducts] = useState(productList || []);
    const [refresh, setRefresh] = useState(false)

    async function handleRefreshOrders() {
        setRefresh(true)
        const apiClient = setupApiClient();
        const responseCategory = await apiClient.get('/category')
        const responseProduct = await apiClient.get('/product')

        setCategories(responseCategory.data.category)
        setProducts(responseProduct.data)

        if (responseCategory.data && responseProduct.data) {
            setTimeout(() => {
                setRefresh(false)
            }, 500);
        }
    }

    useEffect(() => {
        const sortCategories = categoryList.sort((categoryA, categoryB) => categoryA.name.localeCompare(categoryB.name))
        const sortProducts = productList.sort((productA, productB) => productA.name.localeCompare(productB.name))

        setCategories(sortCategories)
        setProducts(sortProducts)
    }, [categories, products])

    return (
        <>
            <Head>
                <title>B-Food - Cardápio</title>
            </Head>

            <MenuContainer>
                <Header
                    toggleTheme={toggleTheme}
                    themeTitle={themeTitle}
                />

                <main className="mainContent">
                    <div className="menuTitle">
                        <Title name="Cardápio" />
                        <IconRefresh
                            $status={refresh}
                            onClick={() => handleRefreshOrders()}
                        >
                            <RefreshCw />
                        </IconRefresh>
                    </div>

                    {categories.length === 0 && (
                        <h2>Não há nenhum produto cadastrado...</h2>
                    )}

                    {categories.map((category) => {
                        const productsList = products.filter((product) => product.category_id === category.id)

                        return productsList.length > 0 ? (
                            <div key={category.id}>
                                <h3>{category.name}</h3>
                                <table className="tableContainer">
                                    <thead>
                                        <th>Nº</th>
                                        <th>Nome</th>
                                        <th>Preço</th>
                                        <th>Descrição</th>
                                    </thead>
                                    <tbody>
                                        {productsList.map((product, index) => {
                                            return (
                                                <tr key={product.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{product.name}</td>
                                                    <td>
                                                        <span>R$</span>
                                                        <FormattedNumber
                                                            value={Number(product.price)}
                                                            style="decimal"
                                                            minimumFractionDigits={2}
                                                        />
                                                    </td>
                                                    <td>{product.description || '-'}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ) :
                            <div>
                                <h3>{category.name}</h3>
                                <p>Não há nenhum produto cadastrado nessa categoria...</p>
                            </div>
                    })}
                </main>
            </MenuContainer>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (context) => {
    const apiClient = setupApiClient(context)

    const responseCategory = await apiClient.get('/category')
    const responseProduct = await apiClient.get('/product')

    return {
        props: {
            categoryList: responseCategory.data.category,
            productList: responseProduct.data,
        }
    }
})