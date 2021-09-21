

module.exports = {
    returnTwo: () => {
        return (2)
    },

    greeting: (nam) => {
       return `Hello, ${nam}`
    },

    add: (num1,num2) => {
        let added = num1 + num2
        return added
    },

    multiply: (num1,num2) => {
        let multiplied = num1 * num2
        return multiplied
    },

    divide: (num1,num2) => {
        let divided = num1 / num2
        return divided
    },

    subtract: (num1,num2) => {
        let difference = num1 - num2
        return difference
    }
}



