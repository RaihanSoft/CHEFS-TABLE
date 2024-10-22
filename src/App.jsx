import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Pecipe from "./components/Recipe/Pecipe"
import RecipeCards from "./components/RecipeCards/RecipeCards"
import SideBar from "./components/RecipeCards/SideBar"

const App = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <Pecipe />

      <section className="flex flex-col md:flex-row gap-6">
        <RecipeCards />
        <SideBar />
      </section>

    </div>
  )
}

export default App
