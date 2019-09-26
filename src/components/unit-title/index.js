import React from 'react'

/*Props
 - children: JSX, content inside this component
*/
class UnitTitle extends React.Component {
    render() {
        return (
            <div className='unit-title'>
                <div className='container'>
                    <div className='sub-container-empty'/>
                    <div className='sub-container'/>
                </div>   
                <div className='container'>
                    <div className='main-sub-container'>
                        <div className='text-container'>
                            {this.props.children}
                        </div>
                    </div>
                </div>    
                <div className='container'>
                    <div className='sub-container'/>
                    <div className='sub-container-empty'/>
                </div>     
             </div>
        )
    }   
}

export default UnitTitle