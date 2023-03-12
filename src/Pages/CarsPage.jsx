import { Cars } from '../components/Cars'

export const CarsPage = ({cars, title}) => {
    return (
        <div>
            <h2>{title}</h2>
            {cars.map((car, index) => <div key={index}>
                <h3>{car.name}</h3>
                {car.brand && <p>merk: {car.brand}</p>}
                {car.type && <p>type: {car.type}</p>}
                {car.color && <p>kleur: {car.color}</p>}
            </div>)}
        </div>
    ) 
}
