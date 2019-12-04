import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'
import MPensandoSVG from '../../../images/content/micromundo-ii/MPensando.svg'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Eight extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 4' subtitle='Análise de Custo Benefício'/>
          <p>Nem sempre o produto mais barato é o que vai oferecer a melhor
satisfação ao comprador. Em geral é importante levantar outros fatores
dos produtos que agradam ao comprador, ou seja, considerar o preço, o
potencial do produto agradar ao destinatário do presente, o risco de
quebrar, etc. Assim, após identificar os produtos candidatos a uma
avaliação, é preciso proceder à sua escolha.</p>
          <EmptySpace />

          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image center width="322px" src={MPensandoSVG} alt='Mariana pensando' />
            </div>
          </div>
          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o
desenvolvimento de habilidades em: Matemática e Língua
Portuguesa.</TextBNCC>
          <p>Indique, a seguir, o par de pilares do Pensamento Computacional que
será exercitado com <b>mais ênfase</b> na escolha: </p>
          <IntegralActivity activity={Activities.getMicromundoIIActiviryFour(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Eight
