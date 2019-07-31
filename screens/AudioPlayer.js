import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants, Audio } from 'expo-av';


export default class AudioPlayer extends Component {
  state = {
    playingStatus: "Rain",
  };
  
  async _playRecording() {
    const { sound } = await Audio.Sound.createAsync(
        require('../assets/music/rain.mp3'),
      {
        shouldPlay: true,
        isLooping: true,
      },
      this._updateScreenForSoundStatus,
    );
    this.sound = sound;
    this.setState({
      playingStatus: 'Pause'
    });
  }
  
  _updateScreenForSoundStatus = (status) => {
    if (status.isPlaying && this.state.playingStatus !== "Pause") {
      this.setState({ playingStatus: "play" });
    } else if (!status.isPlaying && this.state.playingStatus === "Pause") {
      this.setState({ playingStatus: "pause" });
    }
  };
  
  async _pauseAndPlayRecording() {
    if (this.sound != null) {
      if (this.state.playingStatus == 'Pause') {
        await this.sound.pauseAsync();
        this.setState({
          playingStatus: 'Play',
        });
      } else {
        await this.sound.playAsync();
        this.setState({
          playingStatus: 'Pause',
        });
      }
    }
  }
  
  _syncPauseAndPlayRecording() {
    if (this.sound != null) {
      if (this.state.playingStatus == 'Pause') {
        this.sound.pauseAsync();
      } else {
        this.sound.playAsync();
      }
    }
  }
  
  _playAndPause = () => {
    switch (this.state.playingStatus) {
      case 'Rain':
        this._playRecording();
        break;
      case 'Play':
      case 'Pause':
        this._pauseAndPlayRecording();
        break;
    }
  }

  render() {
    return (
        <TouchableOpacity style={styles.button} onPress={this._playAndPause}>
            <Text style={styles.buttonText}>
              {this.state.playingStatus}
            </Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
 
  button: {
    width: 256,
    height: 256/1.618,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});