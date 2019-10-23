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
            <SubtitleBar type={1} title='EVENTO' subtitle='Fazendo as compras da semana na Feira Livre'/>
            
            <p>Para comemorar o aniversário de criação de nosso bairro, decidimos realizar uma exposição com elementos importantes do mesmo. A ideia é que nossos alunos descubram os principais aspectos das ruas nas quais residem.</p>


        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Two
