import React from 'react'

/*Props
 - className: string, classe da div principal
 - value: o valor do butão
 - onClick: function, receberá o value do botão
*/
class GenericButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            className: props.className
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.className !== prevProps.className) {
            this.setState({
                className: this.props.className
            })
        }
    }

    return = () => {
        this.props.onClick(this.props.value)
    }

    render(){
        return (
            <div className={this.state.className} onClick={this.return}>
                {this.props.children}
            </div>
        )
    }
}

export default GenericButton