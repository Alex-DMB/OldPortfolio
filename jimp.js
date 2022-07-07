var Jimp = require('jimp');

const fs = require('fs');

const technologiesIcons = fs.readdirSync('img/technologies/icons_originals')

technologiesIcons.forEach(function(archive) {

    Jimp.read('img/technologies/icons_originals/' + archive).then(function(image){

        image
        .contain(150,150)
        .write('img/technologies/icons_optimized/' + archive);
    })

})
