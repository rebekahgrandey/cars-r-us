import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        const selectedItem = event.target
        if (selectedItem.id === "wheel") {
            setWheel(parseInt(selectedItem.value))
            
            // window.alert(`User chose package ${selectedItem.value}`)
        }
    }
)

export const Wheels = () => {
    let html = "<h1>Wheels</h1>"

    html += `<select id="wheel">
    <option value="0">Select wheels</option>`

    const arrayOfOptions = wheels.map( (wheel) => {
        return `<option value="${wheel.id}">${wheel.wheelType}</option>`
    }
)

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}