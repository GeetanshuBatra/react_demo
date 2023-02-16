import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemImage: {
    minHeight: 100,
    height: 100,
    width: 100,
    minWidth: 100,
    margin: 10,
    alignSelf: 'center',
  },
  item: {
    padding: 8,
    margin: 1,
    borderWidth: 1.5,
    borderColor: 'gray',
    flex: 1 / 2,
    backgroundColor: '#FFF5EE',
  },
  itemDetail: {
    color: '#000',
    fontSize: 16,
  },
  itemStockText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 5,
    fontStyle: 'normal',
  },
  itemStockOutText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 5,
    fontStyle: 'italic',
  },
});
