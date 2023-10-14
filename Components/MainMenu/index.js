import React from 'react';
import {
    View,
    SafeAreaView,
} from 'react-native';

import styles from './styles'
import MainButton from '../MainButton';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Separator = () => <View style={styles.separator} />;
const Topspace = () => <View style={styles.topspace} />;

const MainMenu = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <Topspace />

            <View>
                <MainButton title='Hindi News' onPress={() => navigation.navigate('News Menu',{language:"hindi"})}/>
            </View>

            <Separator />

            <View>
                <MainButton title='Bengali News' onPress={() => navigation.navigate('News Menu',{language:"bengali"})}/>
            </View>

        </SafeAreaView>
    );
};

export default MainMenu;