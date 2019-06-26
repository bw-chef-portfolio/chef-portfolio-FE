import React from 'react';
import { connect } from 'react-redux';

import Recipies from '../../components/Cards/Recipiecards'
import {loadRecipies, addRecipe, deleteRecipe, editRecipe} from '../../actions'

// const chefData =   [{
//       chef_name: "Erica",
//       recipe_title: "Pizza",
//       item_photo:
//         "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//       chef_location: "Boston, Massachusetts",
//       item_ingredients: "Pizza Dough, Pizza Sauce, Cheese, Basil",
//       user_id: 1
//     },
//     {
//       chef_name: "Mitsuki",
//       recipe_title: "Soup",
//       item_photo:
//         "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//       chef_location: "Austin, TX",
//       item_ingredients: "Water, Tomatoes, Cream, Basil",
//       user_id: 2
//     },
//     {
//       chef_name: "Sam",
//       recipe_title: "Steak",
//       item_photo:
//         "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//       chef_location: "Colonie, NY",
//       item_ingredients: "Cut of Steak",
//       user_id: 3
//     }]



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
       this.props.loadRecipies()
   }

//    componentDidUpdate(prevProps, prevState) {
//        if(prevProps.chefData.length !== this.chefData.length) {
//            this.props.loadRecipies()
//        }
//    }

    handleChanges = e => {
    this.setState({
      chefInfo: {
        ...this.state.chefInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = e => {
      e.preventDefault();
      const newRecipie = {
        chef_name:this.state.chefInfo.chefName,
        recipie_title:this.state.chefInfo.recipeTitle,
        item_photo:this.state.chefInfo.itemPhoto,
        chef_location:this.state.chefInfo.chefLocation,
        item_ingredients:this.state.chefInfo.itemIngredients
    }
    console.log(newRecipie);
      this.props.addRecipe(newRecipie);
      }
  



    

    render() {
    //     console.log(chefData)
    //    const data = chefData.map(data => {
    //                 return (
    //                     <div>
    //                     <p>{data.chef_name}</p>
    //                     <p>{data.recipe_title}</p>
    //                     <img src={data.item_photo} alt="pictures of food"/>
    //                     <p>{data.chef_location}</p>
    //                     <p>{data.item_ingredients}</p>
    //                     </div>
    //                 )
    //             })
        return (
            <div>
                <h1>My Recipes</h1>
               <Recipies cards={this.props.cards} />
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
                    <button onClick={this.submitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
       error: state.error,
       fetchingData: state.fetchingData,
       cards:state.cardReducer.cards,
       chefData:state.chefPageReducer.chefData
    }
}
export default connect(
    mapStateToProps,
    {
        loadRecipies, addRecipe, deleteRecipe, editRecipe
    }
)(ChefPage)