import { View, ScrollView } from 'react-native';
import styles from './style'
import React, { useEffect, useState } from 'react';
import StreamButton from '../StreamButton'

const Topspace = () => <View style={styles.topspace} />;

const LiveMenu = (props) => {
    const channel_handle = (props.route.params.handle)

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const requestData = {
                station_handle: channel_handle,
            };
            const response = await fetch('https://et5tzbenyqnz35xoqzenyspnby0fajxd.lambda-url.ap-south-1.on.aws/news-service/list_livestreams', {
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
                <StreamButton key={index} title={item} thumbnail={item.thumbnail} description = {item.title} link = {item.link}/>
            ))}
        </ScrollView>
    );
}

export default LiveMenu;