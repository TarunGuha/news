import React from 'react';
import { View, Image, Text, Pressable, Linking } from 'react-native';
import styles from './style';

const StreamButton = (props) => {
  const { thumbnail, description, onPress, link, navigation} = props
  return (
    <Pressable style={styles.card} onPress={() => {Linking.openURL(link); navigation.goBack()}}>
      <View style={styles.cardContent}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
};

export default StreamButton;