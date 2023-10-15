import Head from "next/head";
import Header from "@/components/Header/Header";
import { Input, TextArea } from "@/components/Input/Input";
import Title from "@/components/Title/Title";
import canSSRAuth from "@/utils/canSSRAuth";
import LabelAvatar from "@/components/LabelAvatar/LabelAvatar";
import { ChangeEvent, FormEvent, useState } from "react";
import setupApiClient from "@/services/api";
import { Select } from "@/components/Select/Select";
import { toast } from "react-toastify";
import Button from "@/components/Button/Button";
import { ProductContainer } from "./product.styles";

export type CategoryListProps = {
    id: string;
    name: string;
}

interface IProductProps {
    toggleTheme(): void;
    themeTitle: string
    categoryList: CategoryListProps[]
}

export default function Product({ themeTitle, toggleTheme, categoryList }: IProductProps) {
    const [avatarImage, setAvatarImage] = useState(null)

    const [infoProduct, setInfoProduct] = useState({
        name: '',
        price: '',
        description: ''
    })

    async function handleAvatarImage(image: File, url: string) {
        setAvatarImage(image);
    }

    const [categories, setCategories] = useState(categoryList || [])
    const [categorySelected, setCategorySelected] = useState(0)

    function handleChangeCategory(event: ChangeEvent<HTMLSelectElement>) {
        const index = Number(event.target.value)
        setCategorySelected(index)
    }

    async function handleRegisterCaregory(event: FormEvent) {
        event.preventDefault()

        try {
            const data = new FormData()
            console.log(data);

            if (Object.values(infoProduct).some(info => info === '' || info === null)) {
                toast.error('Preencha todos os campos');
                return;
            }

            data.append('file', avatarImage)
            data.append('name', infoProduct.name)
            data.append('price', infoProduct.price)
            data.append('description', infoProduct.description)
            data.append('category_id', categories[categorySelected].id)

            const apiClient = setupApiClient();
            await apiClient.post('/product', data);

            toast.success('Produto cadastrado com sucesso');
        } catch (error) {
            ""
            toast.error('Erro ao cadastrar')
            console.log('Error: ', error);
        }
    }

    return (
        <ProductContainer>

            <Head>
                <title>B-Food - Novo produto</title>
            </Head>

            <Header
                themeTitle={themeTitle}
                toggleTheme={toggleTheme}
            />

            <main className="productMain">
                <Title name="Novo produto" />

                <form className="productForm" onSubmit={handleRegisterCaregory}>
                    <LabelAvatar
                        handleAvatarImage={handleAvatarImage}
                    />

                    <Select
                        value={categorySelected}
                        onChange={handleChangeCategory}>
                        {categories.map((category, index) => {
                            return (
                                <option key={index} value={index}>{category.name}</option>
                            )
                        })}
                    </Select>

                    <Input
                        placeholder="Digite o nome do produto"
                        value={infoProduct.name}
                        onChange={(e) => setInfoProduct({
                            ...infoProduct, name: e.target.value
                        })}
                    />

                    <Input
                        placeholder="Digite o preço do produto"
                        value={infoProduct.price}
                        onChange={(e) => setInfoProduct({
                            ...infoProduct, price: e.target.value
                        })}
                    />

                    <TextArea
                        placeholder="Digite a descrição do produto..."
                        value={infoProduct.description}
                        onChange={(e) => setInfoProduct({
                            ...infoProduct, description: e.target.value
                        })}
                    />

                    <Button name="Cadastrar" />
                </form>
            </main>
        </ProductContainer>
    )
}

export const getServerSideProps = canSSRAuth(async (context) => {
    const apiClient = setupApiClient(context)

    const response = await apiClient.get('/category');

    return {
        props: {
            categoryList: response.data.category
        }
    }
})