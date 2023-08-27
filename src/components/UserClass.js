//Class based component
import React from "react"
import UserContext from "../utils/userContext"
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
            <div className="p-4">
                <h1>U Clicked:{count} times</h1>
                <button className="bg-gray-400 rounded-lg p-2 m-2"onClick={()=>{
                    this.setState({
                        count:this.state.count + 1,
                       // count2:this.state.count
                    })
                }}>Count Increase</button>
                
               <UserContext.Consumer>
                {({loggedInUser})=><h2>Name: {loggedInUser}</h2>}
               </UserContext.Consumer>
                
                <h3>Location:{location}</h3>
                <h4>Contact:@subharoy305</h4>
            </div>
        )
    }
}
export default UserClass;