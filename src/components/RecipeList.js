import React from 'react'
import { Link } from 'react-router-dom'
const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
              <div>{recipe.method.substring(0, 100)}...</div>
              <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
