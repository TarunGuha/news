import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row', // Display items horizontally
  },
  thumbnail: {
    width: 160,
    height: 90,
    borderRadius: 10,
  },
  description: {
    flex: 1, // Take the available space next to the thumbnail
    marginLeft: 10, // Add some margin for separation
  },
});

export default styles;