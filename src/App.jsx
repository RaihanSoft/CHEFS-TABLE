import { useState } from "react"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Pecipe from "./components/Recipe/Pecipe"
import RecipeCards from "./components/RecipeCards/RecipeCards"
import SideBar from "./components/RecipeCards/SideBar"

const App = () => {

  const [recipeQueue, SetRecipeQueue] = useState([])

  const addRecipeToQueue = (recipe)=>{
    const isExist = recipeQueue.find(previousRecipe=> previousRecipe.recipe_id === recipe.recipe_id )

    if(!isExist){
      SetRecipeQueue([...recipeQueue , recipe])


    }
    else{
      alert('Recipe Already Exist In The Queue')
    }


    


  }
console.log(recipeQueue)





  return (
    <div>

      <Navbar />
      <Hero />
      <Pecipe />

      <section className="flex flex-col md:flex-row gap-6">
        <RecipeCards  addRecipeToQueue={addRecipeToQueue} />
        <SideBar recipeQueue={recipeQueue} />
      </section>

    </div>
  )
}

export default App
