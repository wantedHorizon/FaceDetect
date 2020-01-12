import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '5299dc93728f454c9ac35cefd7688919'
});

const particlesOptions = {

  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
}
class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: {}

    };
  }

  calculateFaceLocation = (data) => {

    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImg');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    }

  }


  distplayFaceBox = (box) => {
    console.log(box)
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = (event) => {
    this.setState({ imgUrl: this.state.input })
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        // URL
        this.state.input
      )
      .then((response) => {
        // do something with responseconsole.log(response);
        this.distplayFaceBox(this.calculateFaceLocation(response));
        // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      }).catch(err => console.log("error: ", err));


  }

  render() {
    return (
            <div className="App">
              <Particles className='particles'
                params={particlesOptions} />
              <Navigation />
              <Logo />
              <Rank />

              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />

              <FaceRecognition box={this.state.box}imgUrl={this.state.imgUrl} />

            </div>
    );
  }

}

export default App;
