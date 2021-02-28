import React from 'react' 

class Form extends React.Component {
    
    state={
        userName:''
    }

    handleSubmit =  (event) => {
      event.preventDefault();
      fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(res => res.json())
      .then(data=> this.props.onSubmit(data))
      this.setState({ userName: '' });
    }

    handleChange =event=>{
        this.setState({userName:event.target.value})

    }
    render() {
  	return (

    	<form onSubmit={this.handleSubmit}>
          <input type="text" 
                 placeholder="GitHub username" 
                 required 
                 value={this.state.userName}
                 onChange={this.handleChange}
           />
        <button>Add card</button>
    	</form>
    );
  }
}
export default Form