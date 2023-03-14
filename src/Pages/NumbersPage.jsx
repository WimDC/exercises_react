import { Box } from "@mui/material";
import { Numbers } from "../components/Numbers";

export const NumbersPage = ({numbers, title}) => {
    
    return(
    <div>
        <h3>{title}</h3>
        {numbers.map((n, index) => <Numbers key={index} number={n} />)}
    </div>);
}