import React,{Component}from 'react'
class PROPS extends Component{
    constructor(){
        super()
    }

componentDidUpdate(prevProps, prevState){
    if (prevProps.PROP !== this.props.PROP){
        console.log('there has been a change to props!')
    }
}
 render(){
        return(
            <div className="myProps">
            {this.props.PROP}
            {this.props.children}
        </div>
    )
}
}

export default PROPS