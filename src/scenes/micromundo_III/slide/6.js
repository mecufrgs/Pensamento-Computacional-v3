import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import Image from '../../../components/image'

import ProdutosSVG from '../../../images/content/micromundo-ii/produtos.svg'

class Three extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Estendendo o Registro'/>
            <p>O registro de informações sobre as ruas de um bairro pode ser estendido para incluir especiﬁcamente itens importantes ou notáveis relativos à saúde, alimentação, segurança, mobilidade, lazer, etc. </p>

          
 </PrimaryText>
      </ContentBox>
    )
  }
}

export default Three
