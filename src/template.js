const fs = require('fs');

const createHtml = files => {
    let overallFile = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team | List of members</title>
    <!-- Favicon -->
    <link rel="shortcut icon" type="img/svg" href="">
    <!-- Linked Stylesheets -->
    <link rel="stylesheet" href="./reset.css" type="text/css">
    <link rel="stylesheet" href="./style.css" type="text/css">
    <script src="https://kit.fontawesome.com/3759b7111c.js" crossorigin="anonymous"></script>
    <!-- Poppins Font -->
    <link rel="stylesheet" href="https://use.typekit.net/nwd3ukw.css">
</head>
<body>
    <!-- Title of page -->
    <header class="title-con">
        <p class="font f800">My Team</p>
        <p class="font f400 desc">A list of people who work at the company</p>
    </header>
    <!-- Flexbox staff section -->
    <main>
        <section class="user-container font">
            ${files}
        </section>
    </main>
</body>
</html>`;
    let style = `
:root {
    --dark-gray: #353A3F;
    --candy-red: #f04c65;
    --light-red: #de3a5344;
    --light-white: #F6F7F8;
    --tan: #F9F5F2;
    --white: white;
}
.border {
    border: 1px solid black;
}

/* Default font class */
.font {
    font-family: poppins, sans-serif;
    font-style: normal;
    color: var(--dark-gray);
}

/* Font weight classes */
.f200 {
    font-weight: 200;
}

.f400 {
    font-weight: 400;
}

.f600 {
    font-weight: 600;
}

.f700 {
    font-weight: 700;
}

.f800 {
    font-weight: 800;
}

.f900 {
    font-weight: 900;
}

.title-con {
    font-size: 40px;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.desc {
    font-size: 17px;
    padding-top: 22px;
}

.icon {
    font-size: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    background: #FF416C;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff4b2be1, #ff416dd8);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff4b2bd7, #ff416dd7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    transition: all 150ms ease-in-out;
}

.user-container {
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
}

.card {
    cursor: pointer;
    position: relative;
    height: 205px;
    width: 280px;
    margin: 40px;
    border-radius: 15px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.041), 
                0 2px 4px rgba(0, 0, 0, 0.034), 
                0 4px 8px rgba(0, 0, 0, 0.027), 
                0 8px 16px rgba(0, 0, 0, 0.027),
                0 16px 32px rgba(0, 0, 0, 0.034), 
                0 32px 64px rgba(0, 0, 0, 0.027);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 150ms ease-in-out;
}

.id {
    position: absolute;
    right: 25px;
    top: 25px;
    opacity: 40%;
}

.card a {
    text-decoration: none;
    color: var(--dark-gray);
    opacity: 70%;
    transition: all 150ms ease-in-out;
}


.card:hover .icon {
    background: white;
    background: -webkit-linear-gradient(to right, white, white);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, white, white); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
}



.card:hover {
    color: white;
    box-shadow: none;
    background: #FF416C;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff4b2be1, #ff416dd8);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff4b2bd7, #ff416dd7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
;
}

.card:hover a {
    color: white;
}

.type {
    font-size: 14px;
    padding: 5px;
}

.type-elements {
    font-size: 12px;
    padding: 5px;
    opacity: 70%;
}

@media screen and (max-width: 400px) {
    .desc {
        font-size: 15px;
        width: 90%;
        text-align: center;
    }

}`;
    let reset = `
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  line-height: 1;
  font-family: sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
}

input, select, option, optgroup, textarea, button,
pre, code {
  font-size: 100%;
  font-family: inherit;
}

ol, ul {
  list-style: none;
}`
    fs.writeFile(__dirname + './dist/style.css', style, (err) => {
        err ? console.log(err) : console.log('CSS File Created!')
    });

}

module.exports = createHtml;