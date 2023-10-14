import { View, ScrollView } from 'react-native';
import styles from './style'
import React, { useEffect, useState } from 'react';
import ChannelButton from '../ChannelButton'

const Topspace = () => <View style={styles.topspace} />;

const NewsMenu = (props) => {
    const language = (props.route.params.language)

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const requestData = {
                language: language,
            };
            const response = await fetch('https://et5tzbenyqnz35xoqzenyspnby0fajxd.lambda-url.ap-south-1.on.aws/news-service/list_stations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Topspace />
            {data.map((item, index) => (
                <ChannelButton key={index} title={item} thumbnail={item.station_image} name = {item.station_name} handle = {item.station_handle} navigation={props.navigation}/>
            ))}
        </ScrollView>
    );
}

export default NewsMenu;