import React, {Fragment} from 'react'

/*Props
    - alt: string, description
    - src: string, image location
    - onClick: function, onClick function
    - className: string, class of component
    - center: boolean, true to centralize the image
    - width: int, just for images with center!
 */
class Image extends React.Component {
    constructor(props){
        super(props)
        if(this.props.center){
            this.state = {
                width: this.props.width ? this.props.width : '100%'
            }
        }
    }
    render() {
        return (
            <Fragment>
                {this.props.center ? 
                    <div style={{textAlign: 'center', width: this.state.width}}>
                        <img className={this.props.className} onClick={this.props.onClick} src={this.props.src} alt={this.props.alt} />
                    </div>
                    :
                    <img className={this.props.className} onClick={this.props.onClick} src={this.props.src} alt={this.props.alt} />
                }
            </Fragment>
            
        )
    }
}

export default Image