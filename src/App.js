import React from 'react'
import CardList from './CardList'
import Form from './Form'
import './App.css';

class App extends React.Component {
  state ={
    profiles:[],
  }
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  }

  render(){
  return (
    <>
      <div className="header">{this.props.title}</div>
      <Form onSubmit={this.addNewProfile}/>
      <CardList className='list' profiles={this.state.profiles}/>
    </>
  )
  }
}

export default App;
