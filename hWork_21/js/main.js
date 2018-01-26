(function(){
    

let btn = document.getElementById("play"),
    firstBlock = document.querySelector('#first-line'),
    secondBlock = document.querySelector('#second-line'),
    thirdBlock = document.querySelector('#third-line'),
    countImages = document.getElementById('line-selector'),
    typeGalery = document.getElementById('type-selector');

let newArr = data.map(itemObj => {
    return {
            name: itemObj.name[0].toUpperCase() + itemObj.name.substring(1).toLowerCase(),
            url: newUrl(itemObj.url),
            description: itemObj.description.substr(0, 15) + '...',
            date: moment(itemObj.date).format('YYYY/MM/DD hh:mm')
    };
});

function newUrl(inUrl){
    return inUrl.indexOf('http://') != 0 ? 'http://'+ inUrl : inUrl
}

function useReplace(cImages) {

    firstBlock.innerHTML = null;
    var replaceItemTemplate = '<div class="col-sm-3 col-xs-6">\
    <img src="$url" alt="$name" class="img-thumbnail">\
    <div class="info-wrapper">\
    <div class="text-muted">$name</div>\
    <div class="text-muted top-padding">$description</div>\
    <div class="text-muted">$date</div>\
    </div>\
    </div>';

    for (let i=0;i<cImages;i++){
            let resultHTML = replaceItemTemplate
            .replace(/\$name/gi, newArr[i].name)
            .replace("$url", newArr[i].url)
            .replace("$description", newArr[i].description)
            .replace("$date", newArr[i].date);
            firstBlock.innerHTML += resultHTML;	
    };

    document.querySelector('.first-group').classList.add("show");
    document.querySelector('.second-group').classList.remove("show");
    document.querySelector('.third-group').classList.remove("show");
};

function useTemplateStrings(cImages){

    secondBlock.innerHTML = null;
    for (let i=0;i<cImages;i++){
        let secondItemTemplate = `<div class="col-sm-3 col-xs-6">\
        <img src="${newArr[i].url}" alt="${newArr[i].name}" class="img-thumbnail">\
        <div class="info-wrapper">\
            <div class="text-muted">${newArr[i].name}</div>\
            <div class="text-muted top-padding">${newArr[i].description}</div>\
            <div class="text-muted">${newArr[i].date}</div>\
        </div>\
        </div>`;
        secondBlock.innerHTML += secondItemTemplate;	
    }

    document.querySelector('.first-group').classList.remove("show");
    document.querySelector('.second-group').classList.add("show");
    document.querySelector('.third-group').classList.remove("show");
};

function useCreateElements(cImages){

    if(document.getElementById('third-line-gallery') != null){
        var newElem = document.getElementById('third-line-gallery');
        newElem.remove();
    }
    newElem = document.createElement('div');
    newElem.id = 'third-line-gallery';
    thirdBlock.appendChild(newElem);

    for (let i=0;i<cImages;i++){
        let thirdItemTemplate = `<div class="col-sm-3 col-xs-6">\
        <img src="${newArr[i].url}" alt="${newArr[i].name}" class="img-thumbnail">\
        <div class="info-wrapper">\
            <div class="text-muted">${newArr[i].name}</div>\
            <div class="text-muted top-padding">${newArr[i].description}</div>\
            <div class="text-muted">${newArr[i].date}</div>\
        </div>\
        </div>`;
        newElem.innerHTML += thirdItemTemplate;	
    }
    
    document.querySelector('.first-group').classList.remove("show");
    document.querySelector('.second-group').classList.remove("show");
    document.querySelector('.third-group').classList.add("show");
};

function init() {
    var countImagesShow = newArr.length;

    if (countImages.value == 1){
        countImagesShow = 3
    } else if (countImages.value == 2){
        countImagesShow = 6;
    };

    switch (typeGalery.value) {
        case '1': useReplace(countImagesShow);
            break;
        case '2': useTemplateStrings(countImagesShow);
            break;
        case '3': useCreateElements(countImagesShow);
            break;    
        default: 
                document.querySelector('.first-group').classList.remove("show");
                document.querySelector('.second-group').classList.remove("show");
                document.querySelector('.third-group').classList.remove("show");
            break;
    }
     
}

btn.addEventListener("click", init);

})()