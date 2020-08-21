import React from 'react';

import {Text, View} from 'react-native';

const Header = (props) =>{
  const {textStyle, viewStyle} = styles;
  return(
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle:{
    backgroundColor:'#b46bef',
    justifyContent:'center',//horizontally
    alignItems:'center',//vertically
    height:90,
    paddingTop:30,
    shadowColor: '#7c9ed3',
    shadowOffset:{height:5},
    shadowOpacity:0.5,
    //elevation:2,
    //position:'relative'
  },
  textStyle:{
    fontSize:20
  }
}

export default Header;
