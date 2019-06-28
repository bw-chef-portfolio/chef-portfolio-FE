import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import { getData, deleteRecipe, editRecipe } from '../actions';
import styled from 'styled-components'

class Chef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      id: this.props.data.id,
      chefDetails: {
        chef_name: '',
        recipe_title: '',
        item_photo: '',
        chef_location: '',
        item_ingredients: ''
      }
    }

    // this.handleChanges = this.handleChanges.bind(this);

  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  componentDidMount() {
    this.props.getData()
  }

  handleChanges = e => {
    this.setState({
      chefDetails: {
        ...this.state.chefDetails,
        [ e.target.name ]: e.target.value
      }
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
    // console.log("cheffry props", this.props)
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

        
          
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <div toggle={this.toggle} className="modal-title">Edit Recipe</div>
            <div>
              <form>
                <p>Chef Name: </p>
                <input
                  type="text"
                  name="chef_name"
                  value={this.state.chefDetails.chef_name}
                  onChange={this.handleChanges}

                ></input>
                <p>Recipe Name: </p>
                <input
                  type="text"
                  name="recipe_title"
                  value={this.state.chefDetails.recipe_title}
                  onChange={this.handleChanges}
                ></input>
                <p>Upload a photo</p>
                <input
                  type="text"
                  name="item_photo"
                  value={this.state.chefDetails.item_photo}
                  onChange={this.handleChanges}
                ></input>
                <p>Location: </p>
                <input
                  type="text"
                  name="chef_location"
                  value={this.state.chefDetails.chef_location}
                  onChange={this.handleChanges}
                ></input>
                <p>Ingredients: </p>
                <input
                  type="text"
                  name="item_ingredients"
                  value={this.state.chefDetails.item_ingredients}
                  onChange={this.handleChanges}
                ></input>
              </form>
            </div>
            <div>
              <Button onClick={this.editRecipe}>Edit</Button>{' '}
              <Button onClick={this.toggle}>Cancel</Button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("state", state)
  return {
    error: state.chefPageReducer.error,
    fetchingData: state.chefPageReducer.fetchingData,
    chefData: state.chefPageReducer.chefData,
  }
}
export default connect(
  mapStateToProps,
  {
    deleteRecipe, editRecipe, getData
  }
)(Chef)

