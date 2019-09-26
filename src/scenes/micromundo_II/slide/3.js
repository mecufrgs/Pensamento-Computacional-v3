import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import Image from '../../../components/image'
import ListaSVG from '../../../images/content/micromundo-ii/lista.svg'


class Three extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='A lista de compras'/>
            <p>Uma etapa que antecede as compras numa feira livre é a elaboração de
uma lista do que comprar. Embora num primeiro momento isso pareça
trivial, essa tarefa pode envolver questões com diferentes níveis de
complexidade.</p>

<div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
<Image center width="344px" src={ListaSVG} alt='Lista'/>
            </div>
          </div>
          
        
 </PrimaryText>
      </ContentBox>
    )
  }
}

export default Three
