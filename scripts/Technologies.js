import { getTechnologies, setTechnology } from "./database.js"

const techs = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        const selectedItem = event.target
        if (selectedItem.id === "tech") {
            setTechnology(parseInt(selectedItem.value))
            
            // window.alert(`User chose package ${selectedItem.value}`)
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += `<select id="tech">
    <option value="0">Select a technology package</option>`

    const arrayOfOptions = techs.map( (tech) => {
        return `<option value="${tech.id}">${tech.package}</option>`
    }
)

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}