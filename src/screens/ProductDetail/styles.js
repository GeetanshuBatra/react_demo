import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonStyle: {
    padding: 12,
    backgroundColor: '#008CFF',
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
  itemText: {
    fontSize: 24,
    color: '#000',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 8,
  },
  itemTitle: {
    fontSize: 24,
    color: '#000',
    alignSelf: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
    marginTop: 12,
  },
  itemImage: {
    marginHorizontal: 30,
    marginTop: 20,
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  buttonContainer: {
    marginHorizontal: 16,
    marginTop: 30,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D9ffffff',
  },

  modalForm: {
    borderLeftColor: '#008CFF',
    borderLeftWidth: 5,
    margin: 20,
    backgroundColor: '#FFF5EE',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 50,
  },

  editField: {
    borderColor: '#008CFF',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 12,
    fontSize: 18,
    padding: 12,
    textAlignVertical: 'top',
  },
});
