import React from 'react'
import { useState, useRef } from 'react'
const Create = () => {
  const [title, setTitle] = useState('')
  const [method, setmethod] = useState('')
  const [cookingTime, setcookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log(title, method, cookingTime, ingredients)
  }

  const handleAdd = (ev) => {
    ev.preventDefault()
    const ing = newIngredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }
  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(ev) => setTitle(ev.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              onChange={(ev) => setNewIngredient(ev.target.value)}
              value={newIngredient}
              type="text"
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map(i => <em key={i}>{i},</em>)}</p>
        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(ev) => setmethod(ev.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(ev) => setcookingTime(ev.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Create
