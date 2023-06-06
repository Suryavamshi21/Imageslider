import React, { Component } from 'react'

export class Task extends Component {
    imageslider=[
        {image:"./tamilnadu/chennai1.jpg",alt:"chennai1.jpg"},
        {image:"./tamilnadu/chidambaram1.jpg",alt:"chidambaram1.jpg"},
        {image:"./tamilnadu/coimbatore1.jpg",alt:"coimbatore1.jpg1"},
        {image:"./tamilnadu/courtallam.jpg",alt:"courtallam.jpg"},
        {image:"./tamilnadu/erode1.jpg",alt:"erode1.jpg"},
        {image:"./tamilnadu/hogenakkal-falls1.jpg",alt:"hogenakkal-falls1.jpg"},
        {image:"./tamilnadu/kanchipuram1.jpg",alt:"kanchipuram1.jpg"},
        {image:"./tamilnadu/kodaikanal1.jpg",alt:"kodaikanal1.jpg"},
        {image:"./tamilnadu/krishnagiri1.jpg",alt:"krishnagiri1.jpg"},
        {image:"./tamilnadu/madurai1.jpg",alt:"madurai1.jpg"},
        {image:"./tamilnadu/mahabalipuram1.jpg",alt:"mahabalipuram1"},
        {image:"./tamilnadu/nagapattinam1.jpg",alt:"nagapattinam1"},
        {image:"./tamilnadu/namakkal1.jpg",alt:"namakkal1"},
        {image:"./tamilnadu/ooty1.jpg",alt:"ooty1"},
        {image:"./tamilnadu/pudukkottai1.jpg",alt:"pudukkottai1"},
        {image:"./tamilnadu/rameshwaram-beach1.jpg",alt:"rameshwaram-beach1"},
        {image:"./tamilnadu/salem1.jpg",alt:"salem1"},
        {image:"./tamilnadu/thanjavur-palace1.jpg",alt:"thanjavur-palace1"},
        {image:"./tamilnadu/thiruvarur1.jpg",alt:"thiruvarur1"},
        {image:"./tamilnadu/thoothukudi1.jpg",alt:"thoothukudi1"},
        {image:"./tamilnadu/tiruchirappalli1.jpg",alt:"tiruchirappalli1"},
        {image:"./tamilnadu/tirunelveli1.jpg",alt:"tirunelveli1"},
        {image:"./tamilnadu/velankanni1.jpg",alt:"velankanni1"},
        {image:"./tamilnadu/virudhunagar1.jpg",alt:"virudhunagar1"},
        {image:"./tamilnadu/velankanni1.jpg",alt:"velankanni1"},
    ]
    constructor(props){
        super(props);
        this.state={imageno:0,rno:0}
        // // this.FirstClickHandler=this.FirstClickHandler.bind(this);
        // // this.PrevClickHandler=this.PrevClickHandler.bind(this);
        // this.ShowClickHandler=this.PrevClickHandler.bind(this);
        // this.ShowChangeHandler=this.ShowChangeHandler.bind(this);
        // // this.NextClickHandler=this.NextClickHandler.bind(this);
        // // this.LastClickHandler=this.LastClickHandler.bind(this)
    }    
    FirstClickHandler=()=>{
        this.setState({imageno:0});
    }
    PrevClickHandler=()=>{
        if(this.state.imageno===0)
        {
        this.setState({imageno:this.imageslider.length-1});
        }
        else{
            this.setState({imageno:this.state.imageno-1})
        }
    }
    ShowClickHandler=()=>{
        this.setState({imageno:this.state.rno});
    }
    ShowChangeHandler=(e)=>{
    this.setState({rno:e.target.value});
    }
    NextClickHandler=()=>{
        if(this.state.imageno===this.imageslider.length-1)
        {
        this.setState({imageno:0})
        }
        else {
        this.setState({imageno:this.state.imageno+1});
        }
    }
    LastClickHandler=()=>{
        this.setState({imageno:this.imageslider.length-1});
    };
  render(){
    return (
      <div>
        <table>
            <tbody>
                <tr>
                    <td>
                        <button onClick={this.FirstClickHandler}>First</button>
                    </td>
                    <td>
                        
                        <button onClick={this.PrevClickHandler}>Previous</button>
                    </td>
                    <td>
                        <input type="text"  onChange={(e)=>this.setState({rno:parseInt(e.target.value)})}/> 
                    </td>
                    <td>
                        <button onClick={()=>{this.setState({imageno:this.state.rno})}}>Show</button>
                    </td>
                    <td>
                        <button onClick={this.NextClickHandler}>Next</button>
                    </td>
                    <td>
                        <button onClick={this.LastClickHandler}>Last</button>
                    </td>
                </tr>
                <tr>
                    <td colSpan={6}>
                        <img src={this.imageslider[this.state.imageno].image} alt={this.imageslider[this.state.imageno].alt}  />
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
} 
export default Task;
