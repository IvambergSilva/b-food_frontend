import ImageDark from '../../assets/images//logoSmall-dark.png'
import ImageLight from '../../assets/images//logoSmall-light.png'
import Link from 'next/link'
import './Header.styles'
import Switch from '../Switch/Switch';
import { HeaderContainer } from './Header.styles';
import { DarkMode, LightMode } from '@/styles/variables';
import { LogOut, Menu, X } from 'lucide-react';
import { useContext, useState } from 'react';
import { AuthContext, signOut } from '@/contexts/authContext';

export default function Header({ toggleTheme, themeTitle }) {

    const { user, signOut } = useContext(AuthContext)

    const [visibleMenu, setVisibleMenu] = useState(false)

    return (
        <HeaderContainer
            visibleMenu={visibleMenu}
        >
            <img src={
                themeTitle === 'dark'
                    ? ImageDark.src
                    : ImageLight.src
            } alt="Logo da aplicação" />

            <Switch
                onClickToggle={toggleTheme}
            />

            <div
                className='iconMenuHeader'
                onClick={() => setVisibleMenu(!visibleMenu)}
            >
                {visibleMenu ? (<X />) : (<Menu />)}
            </div>

            <nav>
                <Link
                    href={'/dashboard'}
                    onClick={() => setVisibleMenu(!visibleMenu)}
                >
                    <span>Painel</span>
                </Link>

                <Link
                    href={'/category'}
                    onClick={() => setVisibleMenu(!visibleMenu)}
                >
                    <span>Nova categoria</span>
                </Link>

                <Link
                    href={'/product'}
                    onClick={() => setVisibleMenu(!visibleMenu)}
                >
                    <span>Novo produto</span>
                </Link>

                <Link
                    href={'/menu'}
                    onClick={() => setVisibleMenu(!visibleMenu)}
                >
                    <span>Cardapio</span>
                </Link>

                <button onClick={signOut}>
                    <LogOut />
                </button>
            </nav>
        </HeaderContainer>
    )
}