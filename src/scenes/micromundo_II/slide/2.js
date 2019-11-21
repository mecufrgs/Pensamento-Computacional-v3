import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import FalaMarianaSVG from '../../../images/content/micromundo-ii/fala-mariana.svg'

class Two extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={1} title='EVENTO 1' subtitle='Fazendo as Compras da Semana na Feira Livre'/>
            
            <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
            <Image center width='672px' src={FalaMarianaSVG} alt='Muitas pessoas preferem comprar gêneros
alimentícios em feiras livres. Em muitas
cidades do Brasil, existem feiras livres
volantes, ou seja, feiras livres que
circulam pelos bairros, cada dia
parando em um bairro diferente.
Quem prefere, espera o dia em que
uma se instala na sua vizinhança e
vai às compras, por vezes fazendo
estoque para vários dias. Esses
compradores geralmente usam
carrinhos de compra para facilitar o
transporte dos produtos."'/>
          </div>
            </div>


        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Two
