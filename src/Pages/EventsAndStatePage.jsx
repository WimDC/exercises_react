import { EventDemo } from "../components/EventDemo"

export const EventsAndStatePage = ({title}) => {
    return (
        <div style={{ backgroundColor: "lightGreen"}}>
            <h2>{title}</h2>
            <EventDemo />
            <div  style={{ backgroundColor: "lightpink" , width: 350, height: 250}}>
                <p>Dit is een div.</p>
                <a href="" onClick={() => alert("link is clicked")}>dit is een link met een href</a>
            </div>
        </div>
    )
}