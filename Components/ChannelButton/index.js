import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import styles from './style';

const ChannelButton = (props) => {
  const { thumbnail, name, customStyle, onPress, handle, navigation } = props
  return (
    <Pressable onPress={() => navigation.navigate('Live Menu',{handle:handle})} style={({ pressed }) => [styles.card, customStyle, pressed && styles.cardPressed]}>
      <View style={styles.cardContent}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default ChannelButton;