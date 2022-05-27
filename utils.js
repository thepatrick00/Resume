function getBulletPointHtml(bulletPointArr) {  
    const html = bulletPointArr.map(bullet => {
        return `<li>${bullet}</li>`
    })

    return `<ul>${html.join('')}</ul>`
};


/* Used for data that has object of objects */
function getProjectHtml(projects) {
    const projectHtml = [];

    projectHtml.push(`<h1 class='subject'>Projects</h1>`)

    for (const project in projects) {
        projectHtml.push(`
        <h2 class='heading'>${projects[project].name}</h2>
        <p>${projects[project].description}</p>
        ${getBulletPointHtml(projects[project].bulletPoints)}
        `)
    };

    return projectHtml.join('');
};

function getExpHtml(dataObj) {
    const projectHtml = [];

    projectHtml.push(`<h1 class='subject'>Projects</h1>`)

    for (const key in dataObj) {
        projectHtml
        .push(
            `
            <h2 class='heading'>${dataObj[key].name}</h2>
            <p>${dataObj[key].description}</p>
            ${getBulletPointHtml(dataObj[key].bulletPoints)}
            `
        )
    };

    return projectHtml.join('');
};



export {getProjectHtml, getExpHtml }