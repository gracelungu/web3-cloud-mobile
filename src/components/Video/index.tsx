import React from 'react';
import VideoPlayer from 'react-native-video';
import styles from './styles';

type Props = {
  video: string;
};

const Video: React.FC<Props> = ({video: videoURL}) => {
  return (
    <VideoPlayer
      paused
      key={videoURL}
      source={{uri: videoURL}}
      style={styles.imageStyle}
    />
  );
};

export default Video;
