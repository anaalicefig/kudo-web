import React from 'react'

import { useAuth } from '../../hooks/auth'

import { Content, Profile } from './styles'
import LogoImg from '../../assets/logoNovatics.svg'

const Header: React.FC = () => {
  const { user, signOut } = useAuth()

	return (
		<Content>
			<div>
				<div><img src={LogoImg} alt="novatics"/></div>
				<nav>
					<a href="/#">Dê um kudo</a>
					<a href="/#">Timeline</a>
					<a href="/#">Meus kudos</a>
				</nav>
			</div>

			<Profile>
				<a href="/#">
					<img
						src={user.avatar_public_url}
						alt={user.name}
					/>
					{user.name}
				</a>

        <button onClick={() => signOut()}>| Sair</button>
			</Profile>
		</Content>
	)
}
export default Header
