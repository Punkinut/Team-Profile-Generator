const generateManager = manager => {
    return `
    <p>Manager</p>`
}

const generateEngineer = engineer => {
    return `
    <p>Engineer</p>`
}

const generateIntern = intern => {
    return `
    <p>Intern</p>`
}

module.exports = {
    generateManager,
    generateEngineer,
    generateIntern,
};