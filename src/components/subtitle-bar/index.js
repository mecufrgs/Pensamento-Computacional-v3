import React from 'react'
import Image from '../image'
import AnotacaoSVG from '../../images/component/anotacao.svg'
import EstrelaSVG from '../../images/component/estrela.svg'

/*Props
    title: string, the main title
    subtitle: string, a subtitle
    type: int, the type of subtitle, 1 for event, 2 for problem, 3 for activity
    image: string, the location of a image
*/
class SubTitleBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            upBarBkColor: this.getUpBkColor(this.props.type),
            contBkColor: this.getContBkColor(this.props.type),
            txtColor: this.getTxtColor(this.props.type),
            image: this.getImage(this.props.type),
            subContentWidth: this.getSubContentWidth(this.props.type)
        }
    }

    getSubContentWidth = type => {
        switch(type){
            case 1:
                return 'auto'
            case 2:
                return 'auto'
            case 3:
                return 'auto'
            default:
                throw Error('Subtitle bar type invalid!')
        }
    }

    getContBkColor = type => {
        switch(type){
            case 1:
                return '#ffefaf'
            case 2:
                return '#a5d9ff'
            case 3:
                return '#ffb2b2'
            default:
                throw Error('Subtitle bar type invalid!')
        }
    }

    getUpBkColor = type => {
        switch(type){
            case 1:
                return '#ffe784'
            case 2:
                return '#59b9ff'
            case 3:
                return '#ff6d6d'
            default:
                throw Error('Subtitle bar type invalid!')
        }
    }

    getTxtColor = type => {
        switch(type){
            case 1:
                return '#a44a3d'
            case 2:
                return '#0060a5'
            case 3:
                return '#d63333'
            default:
                throw Error('Subtitle bar type invalid!')
        }
    }

    getImage = type => {
        switch(type){
            case 1:
                return EstrelaSVG
            case 2:
                return AnotacaoSVG
            case 3:
                return AnotacaoSVG
            default:
                throw Error('Subtitle bar type invalid!')
        }
    }

    render() {
        return (
            <div className='subtitle'>
                <div className='subtitle-container' style={{width: this.state.subContentWidth}}>
                    <div className='subtitle-up-bar' style={{backgroundColor: this.state.upBarBkColor}}></div>
                    <div className='subtitle-content' style={{backgroundColor: this.state.contBkColor}}>
                        <div className='subtitle-image'>
                            <Image src={this.state.image}/>
                        </div>
                        <div className='subtitle-text' style={{color: this.state.txtColor}}>
                            <div className='subtitle-title'>
                                {this.props.title}
                            </div>
                            {this.props.subtitle}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubTitleBar