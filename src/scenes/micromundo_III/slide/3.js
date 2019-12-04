import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import Subtitle from '../../../components/text/subtitle'
import FeiraSVG from '../../../images/content/micromundo-iii/SituacaoProblema1.svg'

class Three extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Registrando Informações'/>
            <p>Cada aluno deverá realizar um levantamento sobre sua rua, nas proximidades de sua residência, incluindo os seguintes aspectos:
           <br/>a) nome da rua (uma pequena descrição, e se possível uma imagem, da pessoa, data, local ou acontecimento que ela homenageia);
           <br/>b) uma listagem das principais construções não residenciais: para cada um dos estabelecimentos é importante descrever como é usado, seus dias e horários de funcionamento, os grupos de frequentadores, etc.;
           <br/>c) itens importantes ou notáveis, especificamente aqueles relativos à saúde, alimentação, segurança, mobilidade e lazer (com uma breve descrição).</p>
           <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
            <img style={{"width":"534px"}} src={FeiraSVG} alt={"Bloco de notas"} />
            </div>
          </div>
        
<Subtitle>Questões Avaliativas</Subtitle>
          <p>Prosseguindo em nossa Situação-problema, convidamos você a selecionar, nas Questões Avaliativas a seguir, a <b>resposta mais adequada</b>, considerando os pilares do Pensamento Computacional.</p>
        
          
        
 </PrimaryText>
      </ContentBox>
    )
  }
}

export default Three
