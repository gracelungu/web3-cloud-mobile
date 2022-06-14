import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

type Props = {
  photos: Array<string>;
};

const imageStyle = {width: '48%', height: 150, marginBottom: 15};

const Photos: React.FC<Props> = ({photos}) => {
  return (
    <View style={styles.container}>
      {photos.map(uri => (
        <Image key={uri} source={{uri}} style={imageStyle} />
      ))}
    </View>
  );
};

export default Photos;
