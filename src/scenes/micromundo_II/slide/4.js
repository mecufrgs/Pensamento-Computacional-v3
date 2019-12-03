import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import IntegralActivity from '../../../components/integral-activity'
import SubtitleBar from '../../../components/subtitle-bar'
import TextBNCC from '../../../components/text/bncc'
import Activities from '../../../services/activities'
import PensandoSVG from '../../../images/content/micromundo-ii/pensando.svg'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Four extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='Elaborando uma Lista de Compras' />
          <p>No momento, Mariana e Augusto estão preocupados em seguir a
orientação de uma nutricionista, entre outros aspectos, na elaboração de
sua lista de compras.</p>
          <EmptySpace />

          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image center width="478px" src={PensandoSVG} alt='Pessoas pensando' />
            </div>
          </div>
          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Ciências, Geografia e Língua Portuguesa.</TextBNCC>
          <EmptySpace />
          <p>Considere a seguinte sequência de pilares do Pensamento
Computacional (e as correspondentes letras que os identificam):</p>
          <p><span style={{color:'red'}}>a)</span>  Abstração;</p>
          <p><span style={{color:'red'}}>b)</span>  Decomposição;</p>
          <p><span style={{color:'red'}}>c)</span>  Reconhecimento de Padrões;</p>
          <p><span style={{color:'red'}}>d)</span>  Algoritmos;</p>
          <p>Associe cada uma das recomendações a seguir com o pilar do Pensamento Computacional <b>mais adequado</b> para atendê-la e, logo após, marque a opção correta de sequência de letras:</p>

<p><span style={{color:'red'}}>R1 - Níveis da pirâmide alimentar:</span> A lista deverá conter alimentos de todos os
níveis da pirâmide alimentar (energéticos, reguladores, construtores,
energéticos extras);</p>
<p><span style={{color:'red'}}>R2 - Momento de consumo dos alimentos:</span>  A lista deverá contemplar
alimentos saudáveis para as principais refeições do dia: café da manhã,
almoço e janta;</p>
<p><span style={{color:'red'}}>R3 - Frequência de consumo:</span>  A lista deverá sempre contemplar produtos
consumidos: diariamente, semanalmente ou apenas ocasionalmente;</p>
<p><span style={{color:'red'}}>R4 - Transportando as compras:</span>  A compra dos produtos da lista deverá
possibilitar o transporte em um só recipiente (um carrinho de compras),
onde itens mais leves/frágeis devem sempre ser dispostos sobre outros
mais pesados.</p>


          <IntegralActivity activity={Activities.getMicromundoIIActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Four
