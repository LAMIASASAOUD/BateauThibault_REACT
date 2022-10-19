import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
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
      <Text>Qu'il est chaud le soleil <br></br>
            quand nous sommes en vacances<br></br>
            Y a d'la joie, des hirondelles<br></br>
            C'est le sud de la France<br></br>
            Papa bricole au garage<br></br>
            Maman lit dans la chaise longue<br></br>
            Dans ce joli paysage<br></br>
            Moi, je me balde en tongs<br></br>
            <br></br><br></br>
            Que de bonheur!<br></br>
            Que de bonheur!<br></br>
      </Text>
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
  row:{
    flexDirection: 'row',

  },
  image: {
    position: 'relative',
    height: 250,
    width: 300,

  },
});
