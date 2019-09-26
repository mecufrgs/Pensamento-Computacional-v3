import React from 'react'
import Button from '../generic-button'
import SlideService from '../../services/slide'

/*Props
 - slide: string, opened slide
 - slideCount: string, how many slides the unit has
 - onChange: function, function to update the slide
*/

class SlideControlNumber extends React.Component {
    changeSlide = newSlide => {
        SlideService.saveSlide(newSlide)
        this.props.onChange(newSlide)
    }

    renderSlideButtons = () => {
        let buttons = []
        for(let slide = 1; slide <= this.props.slideCount; slide++){
            buttons.push(<Button key={slide} className='slide-button' value={slide.toString()} onClick={this.changeSlide}>{slide}</Button>)
        }
        return buttons
    }

    render(){
        return (
            <div className='slide-control-number'>
                ir para o slide:
                <div className='slide-control-number-buttons'>
                    {this.renderSlideButtons()}
                </div>
            </div>
        )
    }
}

export default SlideControlNumber