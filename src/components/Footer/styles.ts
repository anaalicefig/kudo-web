import styled from 'styled-components'


export const Footer = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
`

export const FooterContent = styled.div`
	display: grid;
	grid-template-columns: 55% 20% 25%;
	margin: 5% 0 5% 0;

	@media (max-width: 800px) {
		display: grid;
		grid-template-columns: 100%;
  }

	div {
		@media (max-width: 800px) {
			margin: 10px 0;
			div {
				display: flex;
				flex-wrap: wrap;
				align-content: center;
				justify-content: center;
			}

			p {
				text-align: center;
			}
		}


		p {
			color: #b9babb;
			font-size: 0.8rem;
		}

		div {
			span {
				font-weight: bold;
				cursor: pointer;
			}

			img {
				width: 25px;
				margin: 0 5px;
				cursor: pointer;
			}
		}
	}
`

export const FooterBottom = styled.div`
	display: flex;
	flex-wrap: wrap;
  align-content: center;
	justify-content: center;

	height: 40px;
	background-color: #565656;

	a {
		color: white;
		font-size: 0.8rem;
		text-decoration: none;
	}
`
export const SlackSection = styled.div`
	margin: 0 15%;
	font-size: 1rem;

	@media (max-width: 800px) {
		padding: 5% 20%;
		display: flex;
		flex-wrap: wrap;
		align-content: center;
		justify-content: center;
		text-align: center;
  }

	div {
		width: 80%;
		font-size: 0.8rem;
		background: #dcdcdc;
		padding: 5px 0;
		margin: 5px 0;

		span {
			color: blue;
		}
	}

	img {
		width: 15px;
		height: auto;
	}
`

