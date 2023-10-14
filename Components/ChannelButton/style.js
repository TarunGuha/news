import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FAFBFC',
    borderRadius: 8,
    padding: 10,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  cardPressed: {
    backgroundColor: 'lightgray',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  name: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 25,
  },
});

export default styles;