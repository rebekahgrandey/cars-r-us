const database = {
    orderBuilder: {},
    paints: [
        { id: 1, color: "Silver", price: 2000},
        { id: 2, color: "Midnight Blue", price: 4000},
        { id: 3, color: "Firebrick Red", price: 8500},
        { id: 4, color: "Spring Green", price: 4000} 
    ],
    interiors: [
        { id: 1, material: "Beige Fabric", price: 1000},
        { id: 2, material: "Charcoal Fabric", price: 1500},
        { id: 3, material: "White Fabric", price: 800},
        { id: 4, material: "Black Leather", price: 2900}
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 4500},
        { id: 2, package: "Navigation Package", price: 4999 },
        { id: 3, package: "Visibility Package", price: 6999 },
        { id: 4, package: "Ultra Package", price: 12999 }
    ],
    wheels: [
        { id: 1, wheelType: "17-inch Pair Radial Silver", price: 750},
        { id: 2, wheelType: "17-inch Pair Radial Black", price: 999},
        { id: 3, wheelType: "18-inch Pair Spoke Silver" , price: 1199},
        { id: 4, wheelType: "18-inch Pair Spoke Black", price: 1499}
    ],
    orders: [
        { id: 1, paintId: 1, interiorId: 1, packageId: 1, wheelTypeId: 1 }
    ]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

//set state
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.packageId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelTypeId = id
}

//add custom order
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}