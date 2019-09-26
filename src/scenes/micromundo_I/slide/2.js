import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import FalaMarianaSVG from '../../../images/content/micromundo-i/fala-mariana.svg'

class Two extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={1} title='EVENTO' subtitle='O aniversário de Dona Veridiana'/>
            <Image center width='750px' src={FalaMarianaSVG} alt='Veridiana fala: "Para comemorarmos o aniversário de 60 anos de minha mãe, ou Dona Veridiana, como é conhecida, realizaremos uma festa em um domingo, das 9 às 17 horas, em um clube social próximo à casa dos meus pais, que dispõe de espaço para churrasco, uma quadra e um campo de futebol, além de uma pracinha para as crianças. Mamãe nasceu no mês de julho, então o encontro acontecerá no inverno, no estado do Rio Grande do Sul, onde meus pais, eu e mais dois irmãos residimos. Meus dois outros irmãos, residentes na região Norte e região Centro-Oeste, bem como vários outros parentes e conhecidos já confirmaram presença."'/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Two
