import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        const selectedItem = event.target
        if (selectedItem.id === "paint") {
            setInterior(parseInt(selectedItem.value))
            
            // window.alert(`User chose package ${selectedItem.value}`)
        }
    }
)

export const Interiors = () => {
    let html = "<h4>Interiors</h4>"

    html += `<select id="interior">
    <option value="0">Select interior</option>`

    const arrayOfOptions = interiors.map( (interior) => {
        return `<option value="${interior.id}">${interior.material}</option>`
    }
)

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}