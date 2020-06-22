import React from 'react'

import { Footer, FooterContent, FooterBottom, SlackSection } from './styles'

import GratefulIcon from '../../assets/icons/grateful.svg'
import AwesomeIcon from '../../assets/icons/awesome.svg'
import LearnIcon from '../../assets/icons/learn.svg'

import Facebook from '../../assets/icons/facebook.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Instagram from '../../assets/icons/instagram.svg'

const Dashboard: React.FC = () => {
	return (
    <Footer>
      <FooterContent>
        <SlackSection>
          <span>Reconheça o seu colega pelo Slack!</span>
          <p>Mande um kudo pelo nosso canal #paredãodobem</p>
          <div>/kudo <span>#dokudo</span> <span>@nomedocalega</span> seguido de um comentário</div>

          <p>
            <img src={GratefulIcon} alt="grateful" />
            #gratidao
            <img src={AwesomeIcon} alt="grateful" />
            #foitop
            <img src={LearnIcon} alt="grateful" />
            #aprendi
          </p>
        </SlackSection>

        <div>
          <p>Links Rápidos</p>
          <div><span>Sobre nós</span></div>
          <div><span>Nosso Blog</span></div>
          <div><span>FAQ</span></div>
        </div>

        <div>
          <p>Nossos canais</p>
          <div>
            <img src={Facebook} alt="grateful" />
            <img src={Linkedin} alt="grateful" />
            <img src={Twitter} alt="grateful" />
            <img src={Instagram} alt="grateful" />
          </div>
          <p>Novatics © 2020</p>
        </div>
      </FooterContent>

      <FooterBottom>
        <a href="#top">voltar ao topo</a>
      </FooterBottom>
    </Footer>
	)
}

export default Dashboard
