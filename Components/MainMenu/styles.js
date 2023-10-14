import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flex: 1,
    container: {
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    topspace: {
        marginVertical: 100
    },
});

export default styles;