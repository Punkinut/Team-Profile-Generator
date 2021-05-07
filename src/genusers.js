const generateManager = manager => {
    return `
            <section class="card f600">
                <p class="id f400">${manager[0].id}</p>
                <i class="fas fa-user icon"></i>
                <p>${manager[0].name}</p>
                <p class="f400 type">Manager</p>
                <a class="f400 type-elements" href="mailto:${manager[0].email}">${manager[0].email}</a>
                <p class="f400 type-elements">${manager[0].officeNumber}</p>
            </section>`
}

const generateEngineer = engineer => {
    return `
            <section class="card f600">
                <p class="id f400">${engineer.id}</p>
                <i class="fas fa-glass-whiskey icon"></i>
                <p>${engineer.name}</p>
                <p class="f400 type">Engineer</p>
                <a class="f400 type-elements" href="mailto:${engineer.email}">${engineer.email}</a>
                <a class="f400 type-elements" href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
            </section>`
}

const generateIntern = intern => {
    return `
            <section class="card f600">
                <p class="id f400">${intern.id}</p>
                <i class="fas fa-graduation-cap icon"></i>
                <p>${intern.name}</p>
                <p class="f400 type">Intern</p>
                <a class="f400 type-elements" href="mailto:${intern.email}">${intern.email}</a>
                <p class="f400 type-elements">${intern.school}</p>
            </section>`
}

module.exports = {
    generateManager,
    generateEngineer,
    generateIntern,
};