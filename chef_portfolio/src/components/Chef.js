import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import {deleteRecipe, editRecipe} from '../actions'

class Chef extends React.Component {
    state = {
        modal: false,

        chefInfo: {
            chef_name: '',
            recipe_title: '',
            item_photo: '',
            chef_location: '',
            item_ingredients: ''
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    handleChanges = e => {
        this.setState({
        chefInfo: {
            ...this.state.chefInfo,
            [e.target.name]: e.target.value
        }
    });
}

    render() {
        console.log("cheffry props",this.props.data.chef_name)
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
            <button onClick={this.props.deleteRecipe}>Delete</button>
            {/* <button onClick={this.props.editRecipe}>Edit</button> */}
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

