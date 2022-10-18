import React from 'react';
import { StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function DetailsScreen({ navigation, route }) {
  console.log(route.params.image);

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}> 
      {route.params.title}
      </Text>
      
      <Image
          source={route.params.image}
          // source={route.params.img}
      style={styles.image}
    />
          <Text>XXXYYYZZZ</Text>
      <Text>Qu'il est chaud le soleil ...</Text>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  row:{
    flexDirection: 'row',

  },
  image: {
    position: 'relative',
    height: 50,
    width: 50,

  },
});
