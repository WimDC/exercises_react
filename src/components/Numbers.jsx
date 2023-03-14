export const Numbers = ({number, title}) => {
   /* const {number} = props;*/
   
    return(
        <div onClick={() => {alert(number)}}>
            {number}
        </div>
    )
}