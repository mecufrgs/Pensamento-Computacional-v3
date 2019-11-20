import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
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
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 2' subtitle='Estendendo o Registro'/>
            <p>O registro de informações sobre as ruas de um bairro pode ser estendido para incluir especiﬁcamente itens importantes ou notáveis relativos à saúde, alimentação, segurança, mobilidade, lazer, etc. </p>

          
            <EmptySpace/>
<Subtitle>Questões Avaliativas</Subtitle>
          <p>Prosseguindo em nossa Situação-problema, convidamos você a selecionar, na Questões Avaliativas a seguir, o pilar do Pensamento Computacional <b>mais apropriado.</b> </p>
        
          
 </PrimaryText>
      </ContentBox>
    )
  }
}

export default Three
