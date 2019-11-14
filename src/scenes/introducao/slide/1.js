import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import Bold from '../../../components/text/bold'
import Italic from '../../../components/text/italic'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'
import PilaresSVG from '../../../images/content/introducao/1-pilares.svg'
import QuadroUmSVG from '../../../images/content/introducao/1-1-quadro.svg'
import FalaUmSVG from '../../../images/content/introducao/1-1-fala.svg'
import FalaDoisSVG from '../../../images/content/introducao/1-2-fala.svg'
import FalaTresSVG from '../../../images/content/introducao/1-3-fala.svg'


class One extends React.Component {
  constructor(props){
    super(props)
    
    this.props.setHeader()
  }

  getSlideImage = id => {
    switch(id){
      case 1: 
        return FalaUmSVG
      case 2: 
        return FalaDoisSVG
      case 3: 
        return FalaTresSVG
      default:
        throw Error('Erro ao buscar slide desconhecido.')
    }
  }

  render() {
    return (
      <ContentBox>
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.INTRODUCAO_DIALOG} />
        <PrimaryText>
          <p>
            No curso <Italic>Introdução ao Pensamento Computacional</Italic>, você trabalhou aos quatro pilares do Pensamento Computacional (<Bold>Abstração</Bold>, <Bold>Decomposição</Bold>, <Bold>Reconhecimento de Padrões</Bold> e <Bold>Algoritmos</Bold>) e foi também apresentado a aplicações desses pilares em situações práticas.
          </p>
          <EmptySpace/>
          <Image src={PilaresSVG} alt='Desenhados os pilares do Pensamento Computacional. Primeiro, da esquerda para a direita, está o Abstração, seguido do pilar da Decomposição, do Reconhecimento de padrões e e por fim dos Algoritmos.'/>
          <EmptySpace/>
          <Image className='highlightbox' src={QuadroUmSVG} alt='Quadro com o seguinte texto: "O presente curso, Aplicações do Pensamento Computacional para os Anos Iniciais do Ensino Fundamental, objetiva, sobretudo, estimular a reflexão e a identificação de oportunidades para a aplicação em sala de aula dos quatro pilares do Pensamento Computacional, considerando habilidades elencadas na BNCC."'/>
          <EmptySpace/>
          <p>
          Este curso não tem como pré-requisito conhecimentos sobre Computação e computadores, exceto os necessários para acessar e acompanhar o curso nesta plataforma de ensino. Entretanto, a eventual aplicação dos conhecimentos aqui desenvolvidos sobre o tema Pensamento Computacional, pelo professor em sala de aula, poderá ser efetuada tanto de forma plugada quanto desplugada.
          </p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default One
