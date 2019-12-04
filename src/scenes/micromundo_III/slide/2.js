import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import FeiraSVG from '../../../images/content/micromundo-iii/Evento.svg'


class Two extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={1} title='EVENTO' subtitle='Que Bairro é Este?'/>
            
            <p>Para comemorar o aniversário de criação de nosso bairro, decidimos realizar uma exposição com elementos importantes do mesmo. A ideia é que nossos alunos descubram os principais aspectos das ruas nas quais residem.</p>
          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
            <img style={{"width":"534px"}} src={FeiraSVG} alt={"Mariana pensativa"} />
            </div>
          </div>

        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Two
