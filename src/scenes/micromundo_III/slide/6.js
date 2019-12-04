import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Seven extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 3' subtitle='Usando os Registros para Conhecer o Bairro'/>
          <p>Duplas ou grupos poderiam percorrer as ruas, relacionando (e se possível fotografando) itens,  registrando a rua e seu número (exato ou de uma ediﬁcação próxima) e descrevendo o que foi observado. </p>


          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Arte, Geograﬁa, Matemática e Língua Portuguesa. </TextBNCC>
          <p>Considere a seguinte sequência de pilares do Pensamento Computacional (e as correspondentes letras que os identiﬁcam):
</p>

<p><span style={{color:'red'}}>a)</span>  Decomposição;</p>
          <p><span style={{color:'red'}}>b)</span>  Abstração;</p>
          <p><span style={{color:'red'}}>c)</span>  Algoritmos;</p>
          <p><span style={{color:'red'}}>d)</span>  Reconhecimento de Padrões;</p>

          <p>Associe cada uma das frases a seguir, com o pilar do Pensamento Computacional <strong>mais adequado</strong> para a execução da tarefa e, logo após, marque a opção correta de sequência de letras:   </p>
<p><b>T1</b> - Deﬁnir o trajeto a ser percorrido de modo a cumprir o conjunto de ruas designado para a dupla/grupo;
</p>
<p><b>T2</b> - Considerando que o registro contempla destaques de qualquer natureza, classiﬁcar esses destaques como capazes de valorizar ou desvalorizar o bairro;
</p>
<p><b>T3</b> - Usando os registros dos vários itens, subdividir o bairro em zonas, considerando a categoria que melhor descreve cada zona: residencial, comercial, serviços públicos, lazer, outros;

</p>
<p><b>T4</b> - Identiﬁcar o estilo dos prédios do bairro a partir dos registros.</p>



          <IntegralActivity activity={Activities.getMicromundoIIIActiviryThree(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Seven
