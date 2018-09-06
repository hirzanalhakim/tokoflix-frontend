import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from './../../assets/movie_loading.json'

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false
    };
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <Lottie options={defaultOptions}
        height={150}
        width={150}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused} />
    )
  }
}