import React from 'react'
import Card from './Card'
import './App.css'

class CardList extends React.Component{
    render(){
        return(
            this.props.profiles.map(profile=>(
                <Card {...profile} key={profile.id}/>
            ))
        )
    }
}
export default CardList