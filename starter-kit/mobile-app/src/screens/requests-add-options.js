
import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Alert, TouchableHighlight } from 'react-native';

import { search, userID } from '../lib/utils';


const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#FFF'
  },
  itemTouchable: {
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.25
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemName: {
    fontSize: 20,
    fontFamily: 'IBMPlexSans-Medium',
  },
  itemDescription: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray'
  },
  itemQuantity: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray'
  },
  emptyListView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyListText: {
    fontFamily: 'IBMPlexSans-Bold',
    color: '#999999',
    fontSize: 16
  }
});

const AddRequestOptions = function ({ navigation }) {
  const [items, setItems] = React.useState([]);

    const _onPress = (item) => {
        if (item.key=='Food') {
            navigation.navigate('Add Food Request');
        } else if (item.key=='Other') {
            navigation.navigate('Add Other');
        };
    };
  React.useEffect(() => {
    navigation.addListener('focus', () => {
      search({ userID: userID() })
        .then(setItems)
        .catch(err => {
          console.log(err);
          Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
        });
    })
  }, []);
  
    return (
       <FlatList style={styles.flatListView}
        data={[
        { key: 'Food', title: 'Food'},
        { key: 'Other', title: 'Other'}
        ]}
        renderItem={({item}) => (
          <TouchableHighlight style={styles.itemTouchable}
            key={item.key}
                                 onPress={() => _onPress(item)}>
            <View style={styles.itemView}>
              <Text style={styles.itemName}>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    )
  }

export default AddRequestOptions;
            
