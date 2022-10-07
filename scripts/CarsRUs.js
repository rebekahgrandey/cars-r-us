import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js"

const technology = Technologies()
const wheel = Wheels()
const paint = Paints()
const interior = Interiors()

//import html functions
//assign each of them a variable
//create & export a function that concatenates all function's return values together
//import function into main.js with query

document.getElementById('orderButton')

document.addEventListener('click', (event) => {
    const itemClicked = event.target
    if (itemClicked.id === "orderButton"){
    addCustomOrder()
      }
    }
)

export const CarsRUs = () => {
    let html = ""
    html += `<div id="title">Welcome to Cars R Us!</div>
    <div id="subtitle">Customize your dream car today!</div>` + technology + wheel + paint + interior + `<article>
    <button id="orderButton">Create Custom Order</button>
    </article>
    
    <article class="customOrders">
    <h2>Custom Car Orders</h2>
    ${Orders()}
</article>`
    return html
}





//TODO Make a separate module (orders.js) just to generate the bottom list of orders as HTML

//TODO: use .find to generate prices for objects.