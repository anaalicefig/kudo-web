import styled from 'styled-components'

export const Content = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #fff;
	padding: 20px 0;
	margin: 0 20px;

  @media (max-width: 800px) {
		display: flex;
		flex-direction: column;
	}

	div {
		display: flex;
		align-items: center;
		nav {
			margin-left: 20px;
			a {
				color: #38354F;
				text-decoration: none;
				font-weight: bold;
				& + a {
					margin-left: 10px;
				}

        @media (max-width: 450px) {
					display: flex;
					flex-wrap: wrap;
					align-content: center;
					justify-content: center;
					margin: 20px 10px ;
				}

				&:hover {
					opacity: 0.8;
				}
			}
		}

		div {
			img {
				width: 60px;
				height: 60px;
			}

			@media (max-width: 450px) {
				display: flex;
				flex-wrap: wrap;
				align-content: center;
				justify-content: center;
			}
		}

		@media (max-width: 450px) {
			display: block;
		}
	}
`

export const Profile = styled.div `
	display: flex;
	align-items: center;
  margin-right: 25px;
	> a {
		background: #fff;
		display: flex;
		align-items: center;
		justify-items: center;
		color: #38354F;
		text-decoration: none;
		font-weight: bold;
		img {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			margin-right: 10px;
		}
	}

  button {
    border: 0;
    background: transparent;
    font-weight: bold;
    margin: 5px;
    height: 100%;
  }

`
