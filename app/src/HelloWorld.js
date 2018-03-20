import React, {Component} from 'react'
import StateInput from './StateInput'

class HelloWorld extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'foo',
      txt: this.props.txt
    }
  }
  render(){
   return(
     <div className="My-class-from-react">
     {/*this is my first component using Reactjs*/}
      <StateInput/>
      <h1>{this.state.txt}</h1>
     </div>
   )
 }
}


export default HelloWorld