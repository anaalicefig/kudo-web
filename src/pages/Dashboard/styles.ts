import styled from 'styled-components'

export const Content = styled.div`
	display: flex;
  margin: 0 5rem 0 5rem;
	flex-direction: column;
	height: 100%;

	h1 {
		font-size: 55px;
		font-weight: bold;
		max-width: 450px;
		line-height: 56px;
		margin: 50px 0 50px 0;
		float: left;
	}

  @media (max-width: 800px) {
		h1 {
			font-size: 2.5rem;
			margin-left: auto;
    	margin-right: auto;
		}
  }
`

export const Selos = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid #b9babb;
	width: 500px;
	height: auto;
	padding: 5px;

  @media (max-width: 800px) {
		width: 100%;
		text-align: center;
  }
`

export const Status = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 10px 10px;

  @media (max-width: 800px) {
		display: flex;
    flex-direction: column;
  }

	h2 {
		font-weight: bold;
	}

	p {
		color: #b9babb;
		font-size: 14px;
	}
`

export const Kudo = styled.div`
	display: flex;
	margin: 0 10px;
	width: 100%;
	height: 70px;

  @media (max-width: 800px) {
		display: flex;
		flex-wrap: wrap;
  	align-content: center;
		justify-content: center;
  }

	div {
		display: flex;
		flex-direction: column;
		img {
			background: #ff3faf;
			border-radius: 50%;
			width: 40px;
			height: 40px;
		}

		span {
			width: 20px;
			position: relative;
			top: -10px;
			left: 10px;

			text-align: center;
			color: #fff;
			background: #38354F;
			border-radius: 50%;
		}

		& + div {
			margin-left: 10px;
		}
	}
`

export const ImagesContainer = styled.div`
	display: grid;
  grid-template-columns: repeat(4, 1fr);
	align-items: center;
	margin-top: 30px;

  @media (max-width: 1200px) {
		display: grid;
  	grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 500px) {
		display: flex;
		flex-direction: column;
	}

	div {
		position: relative;
		> img {
			opacity: 1;
			display: block;
			height: auto;
			transition: .5s ease;
			backface-visibility: hidden;
      width: 100%;
      height: 300px;
		}

		div {
			opacity: 0;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -100%);
			text-align: center;

			span {
				font-size: 0.8rem;
			}
		}
	}

	> div:hover {
  	background-color: black;
		color: white;
	}

	div:hover img {
  	opacity: 0.3;
	}

	div:hover div {
  	opacity: 1;
	}
`

export const KudoButtons = styled.div`
	display: flex;
	margin-top: 90px;
	button {
		background: #ff3faf;
		border: 0;
		border-radius: 50%;
		width: 40px;
		height: 40px;

		& + button {
			margin-left: 8px;
		}

		&:hover {
			transform: translateY(-10px);
  		transition: all 0.2s;
		}
	}
`

export const Brooches = styled.img`
	background: #ff3faf;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	opacity: 1 !important;
`
