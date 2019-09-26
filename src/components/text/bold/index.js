import React from 'react'

class Bold extends React.Component {
    render(){
        return (
            <span className='bold'>
                {this.props.children}
            </span>
        )
    }
}

export default Bold