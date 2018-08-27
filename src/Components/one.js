import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import PROPS from './PROPS'
class Stateful extends Component{
    constructor () {
        super()
        this.state = {
            stateItem:0
        }
    this.doSomething = this.doSomething.bind(this)
    }
    componentDidMount(){
        console.log('this just did mount')
    }
    doSomething(e){
        console.log('did Something')
        this.setState({
            stateItem:e.target.value
        })
    }
    render(){
        return(
            <div>
                <Link to = '/'><button>Go home</button></Link>
                <Link to = '/functional'><button>Go to Two</button></Link>
                <input type="text" onChange = {(e)=>{this.doSomething(e)}}/>
                <PROPS PROP = {this.state.stateItem}> 'These are the props children'</PROPS>
            </div>
        )
    }
}
export default Stateful