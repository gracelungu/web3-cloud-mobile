import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import SyncIcon from '../../assets/icons/Synchronize.svg';
import styles from './styles';

function Sync() {
  return (
    <TouchableOpacity style={styles.container}>
      <SyncIcon width={20} height={20} />
      <Text style={styles.text}>Synchronize</Text>
    </TouchableOpacity>
  );
}

export default Sync;
