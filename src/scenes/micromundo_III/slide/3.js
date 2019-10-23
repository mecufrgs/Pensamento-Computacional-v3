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
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Registreando Informações'/>
            <p>Cada aluno deverá realizar um levantamento sobre sua rua, nas proximidades de sua residência, incluindo os seguintes aspectos: a) nome da rua (uma pequena descrição, e se possível uma imagem, da pessoa, data, local ou acontecimento que ela homenageia); b) uma listagem das principais construções não residenciais: para cada um dos estabelecimentos é importante descrever como é usado, seus dias e horários de funcionamento, os grupos de frequentadores, etc.; c) outros elementos de destaque na rua (com uma breve descrição).</p>

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
