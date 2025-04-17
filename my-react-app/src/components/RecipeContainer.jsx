import Recipe from "./Recipe.jsx"
import { Typography } from '@mui/material';

const Recipes = ({recipesData}) => {
    return (
        <>
        <Typography variant="h1" className="header">Recipes Page</Typography>

        <div>
            {recipesData.map((r, i) => (
                <Recipe key={`${i}${i}`} name={r.name} ingredients={r.ingredients} instructions={r.instructions} glaze={r.optionalGlaze}/>
            ))}
        </div>
        </>
    )
}

export default Recipes;