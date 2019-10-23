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
          <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='Elaborando uma lista de compras' />
          <p>No momento, Mariana e Augusto estão preocupados em seguir a orientação de uma nutricionista, entre outros aspectos, na elaboração de sua lista de compras. </p>
          <EmptySpace />

          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image center width="478px" src={PensandoSVG} alt='Pessoas pensando' />
            </div>
          </div>
          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Ciências, Geograﬁa, História, Matemática e Língua Portuguesa.
</TextBNCC>
          <EmptySpace />
          <p>Considere a seguinte sequência de pilares do Pensamento Computacional (e as correspondentes letras que os identiﬁcam):
</p>
          <p><span style={{color:'red'}}>a)</span>  Abstração;</p>
          <p><span style={{color:'red'}}>b)</span>  Decomposição;</p>
          <p><span style={{color:'red'}}>c)</span>  Reconhecimento de Padrões;</p>
          <p><span style={{color:'red'}}>d)</span>  Algoritmos;</p>
          <EmptySpace />
          <p>Associe cada uma das frases a seguir, com o pilar do Pensamento Computacional que <strong>mais pode auxiliar</strong> na execução da tarefa. </p>
<p>Marque após a opção correta de sequência de letras:</p>
<p>Identiﬁcar as características em comum que facilitem agrupar os estabelecimentos encontrados, considerando a natureza da atividade principal do estabelecimento</p>
<p>Descrever o percurso a ser percorrido por cada aluno para sair de sua casa e visitar cada um dos estabelecimentos identiﬁcados em sua rua;</p>
<p>Produzir uma apresentação sobre a natureza dos nomes de ruas, considerando um conjunto de tipos previamente deﬁnidos (por exemplo: nomes de pessoas, locais, eventos, datas comemorativas, outros);
</p>
<p>Agrupar os textos dos alunos, considerando a quantidade de estabelecimentos não residenciais relacionados em cada lista. </p>


          <IntegralActivity activity={Activities.getMicromundoIIActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Four
