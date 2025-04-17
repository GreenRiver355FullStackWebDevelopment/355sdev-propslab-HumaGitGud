import './Recipe.css'
import EggIcon from '@mui/icons-material/Egg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WaterIcon from '@mui/icons-material/Water';
import { Typography } from '@mui/material';

const Recipe = ({name, ingredients, instructions, glaze}) => {
    return (
        <>        
        <div className="recipe-card">
            <Typography variant="h3">{name}</Typography>

            <h4>Ingredients: <EggIcon /></h4>
            <ul>
                {ingredients.map((item, index) => <li key={index}> {item} </li>)}
            </ul>

            <h4>Instructions: <MenuBookIcon /></h4>
            <p>{instructions}</p>

            {glaze && (
            <>
                <h4>Optional Glaze: <WaterIcon /></h4>
                <p>{glaze.name}</p>
            </>
            )}
        </div>
        </>
    )
}

export default Recipe;

// {prop && (...)} is a if exists statement citation: stackoverflow