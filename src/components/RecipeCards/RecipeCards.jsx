import { useEffect, useState } from "react"

const RecipeCards = ({addRecipeToQueue}) => {

    const [recipes, setRecipe] = useState([])

    useEffect(() => {

        fetch('/public/recipes.json')
            .then(res => res.json())
            .then(data => setRecipe(data.recipes))

    }, [])




    return (
        <div className="md:w-2/3">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    recipes.map(recipe =>
                        <div key={recipe.recipe_id} className="card bg-base-100 border-2">
                            <figure className="px-8 pt-6">
                                <img className="md:h-52 w-full rounded-xl"
                                    src={recipe.recipe_image}
                                    alt="Recipe Image" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl  text-gray-800 font-medium "> {recipe.recipe_name} </h2>
                                <p className="text-gray-600 text-lg ">{recipe.short_description}</p>

                                <h3 className="text-xl text-gray-800 ">Ingredients : {recipe.ingredients.length} </h3>

                                <ul className="ml-6">

                                    {
                                        recipe.ingredients.map((item, index) => <li className="list-disc text-gray-600" key={index} > {item} </li>)
                                    }

                                </ul>


                                <div className="flex gap-4">

                                    <div className="flex items-center gap-2 font-semibold">
                                        <i class="ri-time-fill text-xl"></i>
                                        <p>{recipe.preparing_time}</p>

                                    </div>                                    
                                    <div className="flex items-center gap-2 font-semibold">
                                        <i class="ri-fire-fill text-xl"></i>
                                 
                                        <p>{recipe.calories}</p>

                                    </div>

                                </div>





                                <div className="card-actions">
                                    <button onClick={()=> addRecipeToQueue(recipe)} className="btn bg-[#0BE58A] rounded-full px-8 text-lg text-gray-800 mt-6 font-medium ">Want to Cook</button>
                                </div>
                            </div>
                        </div>)
                }

            </div>


        </div>
    )
}

export default RecipeCards
