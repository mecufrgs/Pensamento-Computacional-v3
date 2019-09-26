import React from 'react'

/*Props
 - slide: string, opened slide
 - slideCount: string, how many slides the unit has
*/

class InfoBarBottom extends React.Component {
    render(){
        return (
            <div className='info-bar-bottom'>
                Você está em:
                <div className='info-bar-bottom-container'>
                    SLIDE {this.props.slide} DE {this.props.slideCount}
                </div>
            </div>
        )
    }
}

export default InfoBarBottom