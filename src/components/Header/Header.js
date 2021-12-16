import * as React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import Colors from '../../utils/Colors.js';
import Images from '../../utils/Images';

interface Props {
  label: string;
  onPress: () => void;
  height: int;
}

class header extends React.Component<Props> {
  render() {
    const {label, onPress, height, width, s, top, radius} = this.props;
    return (
      <View
        style={[
          s,
          {
            flexDirection: 'row',
            height: 50,
         width:'80%',
         justifyContent:'center',
        alignSelf:'center',
        alignContent:'center',
        alignItems:'center'
          },
        ]}>
    
          <TouchableOpacity style={{width:'10%'}} 
          onPress={onPress}>
            <Image
              style={{width: 25, height: 25}}
              resizeMode="contain"
              source={Images.backArrow}
            />
            </TouchableOpacity>
      <View style={{width:'80%'}}>
          <Text
            style={{
              color: Colors.TextWhite,
              fontSize: 22,
          textAlign:'center'
            }}>
            {label}
          </Text>
        </View>
        <View style={{width:'10%'}}></View>
      </View>
    );
  }
}

export default header;
