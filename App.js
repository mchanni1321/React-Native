import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';



class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'Album'} />
        <AlbumList />
      </View>
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,//expand this view as much as we can
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
export default App;
/*App.js is the root component*/
