import {faker} from "@faker-js/faker"
faker.location = "es"

export const generateProduct = () => {
    return {
        title:faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
    }
}
