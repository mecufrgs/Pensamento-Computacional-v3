import React, {Fragment} from 'react'
import BaseScene from '../base-scene'

import UnitId from '../../constants/unit-id'
import SlideCount from '../../constants/slide-count'

import SlideOne from './slide/1'

class Consideracoes extends BaseScene {
  constructor(props){
    super(props)
    this.state = {
      id: UnitId.CONSIDERACOES,
      slideCount: SlideCount.CONSIDERACOES,
      slide: props.slide,
      hasNextUnit: false,
      hasPreviousUnit: true
    }
  }

  renderSlide = () => {
    switch(this.state.slide.toString()){
      case '1':
        return (<SlideOne setHeader={this.showHeader}/>)
      default:
        return this.errorSlideNotFound()
    }
  }

  render() {
    return (
      <Fragment>
        {super.render(this.renderSlide())}
      </Fragment>
    )
  }
}

export default Consideracoes
