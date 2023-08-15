import React from 'react';
import { View, FlatList, Text } from 'react-native';

const Data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Emma' },
  { id: 5, name: 'Tom' },
];

const App = () => {
  const renderListItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderListItem}
      />
    </View>
  );
};

export default App;
