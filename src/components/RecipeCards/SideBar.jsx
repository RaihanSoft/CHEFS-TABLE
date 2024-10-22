
const SideBar = ({recipeQueue}) => {
    console.log(recipeQueue)
  return (
    <div className='md:w-1/3'>
      <h1>slidebar {recipeQueue.length} </h1>
    </div>
  )
}

export default SideBar
