import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import ExternalLink from '../../../components/external-link'
import EmptySpace from '../../../components/empty-space'
import QuadroUmSVG from '../../../images/content/introducao/3-1-quadro.svg'

class Three extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <p>
            No que tange à  BNCC, o curso foi todo construído  tendo em vista o desenvolvimento das competências gerais que a mesma preconiza para a Educação Básica (<ExternalLink href='http://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf'>BNCC_EI_EF_110518_versaofinal_site.pdf</ExternalLink>), que compreendem entre outras: “valorizar e utilizar os conhecimentos historicamente construídos sobre o mundo físico, social, cultural e digital”; “utilizar diferentes linguagens para se expressar e partilhar informações, experiências, ideias e sentimentos”; “exercitar a empatia, o diálogo, a resolução de conflitos e a cooperação”; “agir pessoal e coletivamente com autonomia, responsabilidade, flexibilidade, resiliência e determinação”.
          </p>
          <p>
            O trabalho proposto está conforme com o que preconiza a BNCC para o Ensino Fundamental – Anos Iniciais:
          </p>
          <EmptySpace/>
          <Image src={QuadroUmSVG} alt='Quadro com o seguinte texto: "As características dessa faixa etária demandam um trabalho no ambiente escolar que se organize em torno dos interesses manifestos pelas crianças, de suas vivências mais imediatas para que, com base nessas vivências, elas possam, progressivamente, ampliar essa compreensão, o que se dá pela mobilização de operações cognitivas cada vez mais complexas e pela sensibilidade para apreender o mundo, expressar-se sobre ele e nele atuar."'/>
          <EmptySpace/>
          <p>
            Dessa forma, muito além das indicações de habilidades que constam na BNCC, que podem ser trabalhadas nos vários contextos propostos, há todo um trabalho subjacente, que perpassa a concepção e o desenvolvimento do curso, para trabalhar de forma harmônica as várias dimensões do aluno na perspectiva da BNCC.
          </p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Three
