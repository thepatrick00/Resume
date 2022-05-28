function getBulletPointHtml(bulletPointArr) {  
    const html = bulletPointArr.map(bullet => {
        return `<li>${bullet}</li>`
    })

    return `<ul>${html.join('')}</ul>`
};


/* Used for data that has object of objects */
function getSectionHtml(dataObj) {
    const html = [];
    const titleText = dataObj.title;
    let showDescription = true;

    html.push(`<h3 class='subject'>${titleText}</h3>`);

    for (const key in dataObj) {
        if(key === 'title') {
            continue;
        } else if (dataObj[key].description === undefined) {
            showDescription = false
        }
        console.log('key:', key)

        html.push(
            `
            <h2 class='subject__heading'>${dataObj[key].name}</h2>
            ${showDescription ? `<p>${dataObj[key].description}</p>` : ''}
            ${getBulletPointHtml(dataObj[key].bulletPoints)}
            `
        )  
    };
    return html.join('');
};



export {getSectionHtml}