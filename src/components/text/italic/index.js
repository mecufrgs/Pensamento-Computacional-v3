import React from 'react'

class Italic extends React.Component {
    render(){
        return (
            <span className='italic'>
                {this.props.children}
            </span>
        )
    }
}

export default Italic