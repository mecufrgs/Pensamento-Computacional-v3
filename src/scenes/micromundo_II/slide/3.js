import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import Image from '../../../components/image'
import ListaSVG from '../../../images/content/micromundo-ii/lista.svg'
import Subtitle from '../../../components/text/subtitle'
import EmptySpace from '../../../components/empty-space'

class Three extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 1' subtitle='A Lista de Compras'/>
            <p>Uma etapa que antecede as compras numa feira livre é a elaboração de
uma lista do que comprar. Embora num primeiro momento isso pareça
trivial, essa tarefa pode envolver questões com diferentes níveis de
complexidade.</p>

<div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
<Image center width="344px" src={ListaSVG} alt='Lista'/>
            </div>
          </div>
          <EmptySpace/>
<Subtitle>Questão Avaliativa</Subtitle>
          <p>Prosseguindo em nossa Situação-problema, convidamos você a selecionar, na Questão Avaliativa a seguir, o pilar do Pensamento Computacional <b>mais apropriado.</b> </p>
        
 </PrimaryText>
      </ContentBox>
    )
  }
}

export default Three
