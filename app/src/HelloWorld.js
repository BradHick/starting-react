import React, {Component} from 'react'
import StateInput from './StateInput'

class HelloWorld extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
   return(
     <div className="My-class-from-react">
     {/*this is my first component using Reactjs*/}
      <StateInput/>
      <h1>Hello World from React.js</h1>
     </div>
   )
 }
}


export default HelloWorld