import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './style';

const MainButton = (props) => {
    const { onPress, title } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

export default MainButton;