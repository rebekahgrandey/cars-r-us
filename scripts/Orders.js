import { getOrders, getWheels, getTechnologies, getPaints, getInteriors } from "./database.js"

const wheels = getWheels()
const technologies = getTechnologies()
const paints = getPaints()
const interiors = getInteriors()

const buildOrderListItem = (order) => {

    const findWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelTypeId
        }
    )
    const findTechnology = technologies.find(
        (tech) => {
            return tech.id === order.packageId
        }
    )
    const findPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const findInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    
    const totalCost = findWheel.price + findTechnology.price + findPaint.price + findInterior.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
                Order #${order.id} costs ${costString}
            </li>`
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
