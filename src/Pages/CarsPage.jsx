import { Cars } from '../components/Cars'

export const CarsPage = ({cars, title}) => {
    return (
        <div id= "main div" style={{backgroundColor: "lightblue", height: 750}}>
            <h2>{title}</h2>
            {cars.map((car, index) => <div style={{backgroundColor: "white", width: 150, height: 250, float: 'left', padding: 10, margin: 10}} key={index}>
                <h3>{car.name}</h3>
                {car.brand && <p>merk: {car.brand}</p>}
                {car.type && <p>type: {car.type}</p>}
                {car.color && <p>kleur: {car.color}</p>}
                {car.note && <p>note: {car.note}</p>}
            </div>)}
        </div>
    ) 
}
