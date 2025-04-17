import './App.css'
import { recipesData } from './data.js';
import RecipeContainer from './components/RecipeContainer.jsx';

function App() {

  return (
    <>
      <RecipeContainer recipesData={recipesData}/>
    </>
  )
}

export default App