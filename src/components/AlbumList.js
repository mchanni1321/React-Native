import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  /*album array contains all the data*/
  state = { albums: [] };
  /*componentWillMount gets called automatically when the app is loaded*/
  /*asynchronous action*/
  /*fetch will return a promise*/
  componentWillMount() {
    console.log("Component will mount");
    /*api where the data is being fetched from*/
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }
/*setState returns a new object/data in a new memory location*/

/*fetch the following data from the api:
1. title
2. artist
3. url
4. cover image
5. thumbnail_image*/

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
