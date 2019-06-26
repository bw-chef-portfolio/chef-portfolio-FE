import React from 'react';
import { connect } from 'react-redux';

import ChefCard from '../../components/ChefCard'
import {getData, addRecipe, deleteRecipe, editRecipe} from '../../actions'

class ChefPage extends React.Component {
    state = {
        chefInfo: {
            chef_name: '',
            recipe_title: '',
            item_photo: '',
            chef_location: '',
            item_ingredients: ''
        }
    };

   componentDidMount() {
       this.props.getData()
   }

    handleChanges = e => {
    this.setState({
      chefInfo: {
        ...this.state.chefInfo,
        [e.target.name]: e.target.value
      }
    });
  };

    addRecipe = e => {
        e.preventDefault()
        this.props.addRecipe(this.state.chefInfo)
        this.setState({
            chefInfo: {
                chef_name: '',
                recipe_title: '',
                item_photo: '',
                chef_location: '',
                item_ingredients: ''
            }
        })
    }

    deleteRecipe = e => {
        e.preventDefault()
        this.props.deleteRecipe(this.state.chefInfo)
        this.setState({
            chefInfo: {
                chef_name: '',
                recipe_title: '',
                item_photo: '',
                chef_location: '',
                item_ingredients: ''
            }
        })
    }

    editRecipe = e => {
        e.preventDefault()
        this.props.editRecipe(this.state.chefInfo)
        this.setState({
            chefInfo: {
                chef_name: '',
                recipe_title: '',
                item_photo: '',
                chef_location: '',
                item_ingredients: ''
            }
        })
    }

    

    render() {

        return (
            <div>
                <h1>My Recipes</h1>
               <ChefCard data={this.props.chefData} deleteRecipe={this.deleteRecipe} editRecipe={this.editRecipe}/>
               <h2>Add a new recipe!</h2>
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
                    
                    <button onClick={this.addRecipe}>Submit</button>
                </form>
            </div>
        )
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
        getData, addRecipe, deleteRecipe, editRecipe
    }
)(ChefPage)