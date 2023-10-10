import ImageDark from '../../assets/images//logoSmall-dark.png'
import ImageLight from '../../assets/images//logoSmall-light.png'
import Link from 'next/link'
import './Header.styles'
import Switch from '../Switch/Switch';
import { HeaderContainer } from './Header.styles';
import { DarkMode, LightMode } from '@/styles/variables';
import { LogOut } from 'lucide-react';
import { useContext } from 'react';
import { AuthContext, signOut } from '@/contexts/authContext';

export default function Header({ toggleTheme, themeTitle }) {

    const { user, signOut } = useContext(AuthContext)

    return (
        <HeaderContainer
            style={{
                backgroundColor: `${themeTitle === 'dark'
                    ? DarkMode.colors.base.gray_500
                    : LightMode.colors.base.gray_500}`
            }}
        >
            <img src={
                themeTitle === 'dark'
                    ? ImageDark.src
                    : ImageLight.src
            } alt="Logo da aplicação" />

            <Switch
                onClickToggle={toggleTheme}
            />

            <nav>
                <Link href={'/category'}>
                    <span>Nova categoria</span>
                </Link>

                <Link href={'/product'}>
                    <span>Cardapio</span>
                </Link>

                <button onClick={signOut}>
                    <LogOut />
                </button>
            </nav>
        </HeaderContainer>
    )
}
