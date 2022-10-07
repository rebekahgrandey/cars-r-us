import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        const selectedItem = event.target
        if (selectedItem.id === "paint") {
            setPaint(parseInt(selectedItem.value))
            
            // window.alert(`User chose package ${selectedItem.value}`)
        }
    }
)

export const Paints = () => {
    let html = "<h3>Paints</h3>"

    html += `<select id="paint">
    <option value="0">Select paint color</option>`

    const arrayOfOptions = paints.map( (paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`
    }
)

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}