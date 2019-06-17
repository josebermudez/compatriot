import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
  } from 'react-native'

class GeoPosition extends React.Component {
    state = {
        location: null
    };

    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const location = JSON.stringify(position);
    
            this.setState({ location });
          },
          error => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.findCoordinates}>
                    <Text style={styles.welcome}>Search by someone nearby</Text>
                    <Text>Location: {this.state.location}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
    }
  });

export default GeoPosition;