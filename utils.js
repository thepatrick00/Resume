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
    
    html.push(`<h3 class='subject'>${titleText}</h3>`);
    
    for (const key in dataObj) {
        let {link, name, description, bulletPoints} = dataObj[key];
        let showDescription = true;

        if(key === 'title') {
            continue;
        } else if (description === undefined) {
            showDescription = false
        }

        if(link === ''){
            link = "https://github.com/thepatrick00"
        }
        

        html.push(
            `
            <h2 class='subject__heading'>
                <a href=${link}>${name}</a>
            </h2>
            ${showDescription ? `<p>${description}</p>` : ''}
            ${getBulletPointHtml(bulletPoints)}
            `
        )  
    };
    return html.join('');
};



export {getSectionHtml}