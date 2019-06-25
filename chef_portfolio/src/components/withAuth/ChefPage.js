import React from 'react';
import { connect } from 'react-redux';

import ChefCard from '../../components/ChefCard'
import {getData, addRecipe, deleteRecipe, editRecipe} from '../../actions'

class ChefPage extends React.Component {
    state = {
        chefInfo: {
            chefName: '',
            recipeTitle: '',
            itemPhoto: '',
            chefLocation: '',
            itemIngredients: '',
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
                chefName: '',
                recipeTitle: '',
                itemPhoto: '',
                chefLocation: '',
                itemIngredients: '',
            }
        })
    }

    

    render() {

        return (
            <div>
                <h1>My Recipes</h1>
               <ChefCard data={this.props.chefData} />
               {/* {data} */}
               <h2>Add a new recipe!</h2>
                <form>
                    <p>Chef Name: </p>
                     <input
                        type="text"
                        name="chefName"
                        value={this.state.chefInfo.chefName}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Recipe Name: </p>
                     <input
                        type="text"
                        name="recipeTitle"
                        value={this.state.chefInfo.recipeTitle}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Upload a photo</p>
                     <input
                        type="text"
                        name="itemPhoto"
                        value={this.state.chefInfo.itemPhoto}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Location: </p>
                     <input
                        type="text"
                        name="chefLocation"
                        value={this.state.chefInfo.chefLocation}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Ingredients: </p>
                     <input
                        type="text"
                        name="itemIngredients"
                        value={this.state.chefInfo.itemIngredients}
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
       addChefData: state.chefPageReducer.addChefData
    }
}
export default connect(
    mapStateToProps,
    {
        getData, addRecipe, deleteRecipe, editRecipe
    }
)(ChefPage)