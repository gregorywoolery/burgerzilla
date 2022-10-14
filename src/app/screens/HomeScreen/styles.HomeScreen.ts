import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main_container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  header_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content_container: {
    alignItems: 'center',
  },
  content_text_container: {
    alignItems: 'center',
    marginBottom: 22,
  },
  content_text_header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 20,
  },
  search_container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_content: {
    width: '60%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  search_button: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    marginLeft: 20,
  },
  products_container: {
    marginTop: 100,
    width: '100%',
    height: '25%',
  },
});

export default styles;
