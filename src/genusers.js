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
    <section class="card f600">
        <i class="fas fa-glass-whiskey icon"></i>
        <p>${engineer.name}</p>
        <p class="f400 type">Engineer</p>
        <p class="f400 type-elements">example@gmail.com</p>
        <p class="f400 type-elements">GitHub</p>
    </section>`
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