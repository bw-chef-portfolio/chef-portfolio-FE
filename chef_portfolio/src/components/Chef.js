import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import {deleteRecipe, editRecipe} from '../actions';
import styled from 'styled-components'

class Chef extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal: false,
            chefInfo: {
                chef_name: '',
                recipe_title: '',
                item_photo: '',
                chef_location: '',
                item_ingredients: '',
                
            },
            activeRecipe: [],
            newChefInfo: this.props.activeRecipe
         }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

     handleChanges = e => {
        this.setState({
            newChefInfo: {
                ...this.activeRecipe,
                [e.target.name]: e.target.value
            }
        })
    }


    editRecipe = e => {
        e.preventDefault()
        this.props.editRecipe(this.state.newChefInfo)
        this.setState({

        })
    }

    setUpdateForm = chefInfo => {
        this.setState({ activeRecipe: chefInfo})
    }

    



    render() { 
        console.log('active recipe', this.state.activeRecipe)
        return ( 
            <div className="chef-collection">
                <div className="chef-card">
                    <img src={this.props.data.item_photo} alt="pictures"></img>
                    <p>Chef Name: {this.props.data.chef_name}</p>
                    <p>Recipe Name: {this.props.data.recipe_title}</p>
                    <p>Chef Location: {this.props.data.chef_location}</p>
                    <p>Recipe Ingredients: {this.props.data.item_ingredients}</p>
                    <button onClick={this.toggle}>Edit</button>
                    <button onClick={() => this.props.deleteRecipe(this.props.data.id)}>Delete</button>  
                </div>

            <div>
                
        {/* <Button color="danger" onClick={this.toggle} >Edit </Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
          <ModalHeader toggle={this.toggle} >Edit Recipe</ModalHeader>
          <ModalBody>
            <form>
                <p>Chef Name: </p>
                     <input
                        type="text"
                        name="chef_name"
                        value={this.state.chefInfo.chef_name}
                        onChange={this.handleChanges}
                        
                    ></input>
                    <p>Recipe Name: </p>
                     <input
                        type="text"
                        name="recipe_title"
                        value={this.state.chefInfo.recipe_title}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Upload a photo</p>
                     <input
                        type="text"
                        name="item_photo"
                        value={this.state.chefInfo.item_photo}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Location: </p>
                     <input
                        type="text"
                        name="chef_location"
                        value={this.state.chefInfo.chef_location}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Ingredients: </p>
                     <input
                        type="text"
                        name="item_ingredients"
                        value={this.state.chefInfo.item_ingredients}
                        onChange={this.handleChanges}
                    ></input>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Edit</Button>{' '}
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
       chefData: state.chefPageReducer.chefData,
    }
}

export default connect(
    mapStateToProps,
    {
        deleteRecipe, editRecipe
    }
)(Chef)