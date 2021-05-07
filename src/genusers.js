const generateManager = manager => {
    return `
    <section class="card f600">
        <i class="fas fa-user icon"></i>
        <p>${manager[0].name}</p>
        <p class="f400 type">Manager</p>
        <p class="f400 type-elements">${manager[0].email}</p>
        <p class="f400 type-elements">${manager[0].officeNumber}</p>
    </section>`
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