import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
    justifyContent: 'space-between'
  },
  button_container: {
    borderRadius: 10,
    backgroundColor: '#6cc730',
    paddingHorizontal: 7,
    paddingVertical: 7,
  },
  text: {
    fontSize: 25,
    color: '#fff',
    backgroundColor: '#6cc730',
  },
  input_field: {
    fontSize: 25,
  }
});

export default styles;