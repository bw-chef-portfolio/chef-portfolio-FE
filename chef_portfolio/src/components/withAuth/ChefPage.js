import React from 'react';
import { connect } from 'react-redux';

// import ChefCard from '../../components/ChefCard'
import {getData} from '../../actions'





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

//    componentDidMount() {
//        this.props.getData()
//    }

    handleChanges = e => {
    this.setState({
      chefInfo: {
        ...this.state.chefInfo,
        [e.target.name]: e.target.value
      }
    });
  };

    

    render() {
        console.log()
        return (
            <div>
                <h1>My Recipes</h1>
               {/* <ChefCard chefData={this.chefData} /> */}
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
       chefData: state.chefData
    }
}
export default connect(
    mapStateToProps,
    {
        getData,
    }
)(ChefPage)