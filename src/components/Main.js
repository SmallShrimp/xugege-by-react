require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

var imageDatas = require('../datas/imageData.json')
imageDatas = (function (imageDataArr) {

    for (var i = 0; i < imageDataArr.length; i++) {
        var singleImageData = imageDataArr[i];
        singleImageData.imageURL = require('../images/' + singleImageData.fileName);
        imageDataArr[i] = singleImageData;
    }
    return imageDataArr;
})(imageDatas);

class AppComponent extends React.Component {
    render() {
        return (
            <section className="stage">
                <section className="img-sec"></section>
                <nav className="controller-nav"></nav>
            </section>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
