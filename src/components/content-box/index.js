import React from 'react'

class ContentBox extends React.Component {
    render() {
        return (
            <div className='content-box'>
                <div className='center'>
                    <div className='text'>
                        {this.props.children}
                    </div>
                    <div className='bottom-bar'></div>
                </div>
             </div>
        )
    }   
}

export default ContentBox