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
          No que tange à <ExternalLink href='http://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf'>BNCC</ExternalLink> (acesso em novembro de 2019), o curso foi todo construído  tendo em vista o desenvolvimento das competências gerais que ela preconiza para a Educação Básica, que compreendem entre outras: “valorizar e utilizar os conhecimentos historicamente construídos sobre o mundo físico, social, cultural e digital”; “utilizar diferentes linguagens para se expressar e partilhar informações, experiências, ideias e sentimentos”; “exercitar a empatia, o diálogo, a resolução de conflitos e a cooperação”; “agir pessoal e coletivamente com autonomia, responsabilidade, flexibilidade, resiliência e determinação”.
          </p>
          <p>
          O trabalho proposto está de acordo com a BNCC para o Ensino Fundamental – Anos Iniciais, em particular quando ela afirma: 
          </p>
          <EmptySpace/>
          <Image className='highlightbox' src={QuadroUmSVG} alt='Quadro com o seguinte texto: "As características dessa faixa etária demandam um trabalho no ambiente escolar que se organize em torno dos interesses manifestos pelas crianças, de suas vivências mais imediatas para que, com base nessas vivências, elas possam, progressivamente, ampliar essa compreensão, o que se dá pela mobilização de operações cognitivas cada vez mais complexas e pela sensibilidade para apreender o mundo, expressar-se sobre ele e nele atuar."'/>
          <EmptySpace/>

        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Three
