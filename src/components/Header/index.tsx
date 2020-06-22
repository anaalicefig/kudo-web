import React from 'react'

import { useAuth } from '../../hooks/auth'

import { Content, Profile } from './styles'
import LogoImg from '../../assets/logoNovatics.svg'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const { user, signOut } = useAuth()

	return (
		<Content>
			<div>
				<div><img src={LogoImg} alt="novatics"/></div>
				<nav>
					<Link to='/dashboard'>Dê um kudo</Link>
					<a href="/#">Timeline</a>
					<a href="/#">Meus kudos</a>
				</nav>
			</div>

			<Profile>
				<Link to='/profile'>
					<img
						src={user.avatar_public_url}
						alt={user.name}
					/>
					{user.name}
        </Link>

        <button onClick={() => signOut()}>| Sair</button>
			</Profile>
		</Content>
	)
}
export default Header
