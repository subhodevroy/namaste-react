//Class based component
import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            userInfo:{
                login:"Dummy",
                
            }
        }
    }
   async componentDidMount(){
    const data=await fetch("https://api.github.com/users/subhodevroy")
    const json=await data.json()
    this.setState({
        userInfo:json
    })
    //console.log(json)
    }

    render(){
        const {location}=this.props
        const {count}=this.state
        const {login}=this.state.userInfo
        return(
            <div className="user-card">
                <h1>U Clicked:{count} times</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1,
                       // count2:this.state.count
                    })
                }}>Count Increase</button>
               
                <h2>Name:{login}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:@subharoy305</h4>
            </div>
        )
    }
}
export default UserClass;