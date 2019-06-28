import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import {getData, deleteRecipe, editRecipe} from '../actions';
import styled from 'styled-components'

class Chef extends React.Component {
constructor(props){
    super(props);
    this.state = {

        id: this.props.data.id,
        
            chef_name: this.props.data.chef_name,
            recipe_title: this.props.data.recipe_title,
            item_photo: this.props.data.item_photo,
            chef_location: this.props.data.chef_location,
            item_ingredients: this.props.data.item_ingredients
        
    }
    
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    componentDidMount(){
        this.props.getData()
    }

    handleChanges = e => {
        this.setState({
            ...this.state.chefInfo,
            [e.target.name]: e.target.value        
    });
}
editRecipe = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.editRecipe(this.props.data.id, this.state.chefDetails)
    this.setState({
        chef_name: '',
        recipe_title: '',
        item_photo: '',
        chef_location: '',
        item_ingredients: ''

    })
}


    render() {
        console.log("cheffry props",this.props)
    return ( 
        <div>
            <div>
              
            <p>Chef Name: </p>
            <p>{this.props.data.chef_name}</p>
            <p>Recipe Name: </p>
            <p>{this.props.data.recipe_title}</p>
            <img src={this.props.data.item_photo} alt="pictures"></img>
            <p>Chef Location: </p>
            <p>{this.props.data.chef_location}</p>
            <p>{this.props.data.item_ingredients}</p>
            <button onClick={() => this.props.deleteRecipe(this.props.data.id)}>Delete</button>
            {/* <button onClick={this.editRecipe}>Edit</button> */}
            </div>

            <div>
                
        <Button color="danger" onClick={this.toggle}>Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
          <ModalHeader toggle={this.toggle}>Edit Recipe</ModalHeader>
          <ModalBody>
            <form>
                <p>Chef Name: </p>
                     <input
                        type="text"
                        name="chef_name"
                        value={this.state.chef_name}
                        onChange={this.handleChanges}
                        
                    ></input>
                    <p>Recipe Name: </p>
                     <input
                        type="text"
                        name="recipe_title"
                        value={this.state.recipe_title}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Upload a photo</p>
                     <input
                        type="text"
                        name="item_photo"
                        value={this.state.item_photo}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Location: </p>
                     <input
                        type="text"
                        name="chef_location"
                        value={this.state.chef_location}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Ingredients: </p>
                     <input
                        type="text"
                        name="item_ingredients"
                        value={this.state.item_ingredients}
                        onChange={this.handleChanges}
                    ></input>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.editRecipe}>Edit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
        </div>
         );
    }
}

 
const mapStateToProps = state => {
    console.log("state", state)
    return {
       error: state.chefPageReducer.error,
       fetchingData: state.chefPageReducer.fetchingData,
       chefData: state.chefPageReducer.chefData,
    }
}
export default connect(
    mapStateToProps,
    {
        getData, deleteRecipe, editRecipe
    }
)(Chef)

