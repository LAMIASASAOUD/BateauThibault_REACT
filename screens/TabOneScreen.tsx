import React from 'react';
import { Pressable, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Le bateau de Thibault</Text>
      <Text>Vente en direct de notre bateau</Text>
      <Text>Produits selon la saison, Livraison sur Paris</Text>
      <Text>06.63.99.99.78</Text>
      <Text>lebateaudethibault@gmail.com</Text>
      <Text>www.facebook.com/lebateaudethibault</Text>




      <CustomButton img="../assets/images/poisson.png" text="Produits et promotions"/>



  <View style={styles.row}>



      <View style={styles.button}>
        <Image
          source={require('../assets/images/poisson.png')}
          style={styles.image}
        />
        <Pressable     onPress={() =>
        navigation.navigate('Bateaux')
      }>Bateaux</Pressable>
       </View>



      <View style={styles.button}>
        <Image
          source={require('../assets/images/poisson.png')}
          style={styles.image}
        />
        <Pressable onPress={() =>
        navigation.navigate('Restaurants')
      }>Restaurants</Pressable>
       </View>
</View>


<View style={styles.row}>


      <View style={styles.button}>
        <Image
          source={require('../assets/images/poisson.png')}
          style={styles.image}
        />
        <Pressable onPress={() =>
        navigation.navigate('Recettes')
      }>Recettes</Pressable>
       </View>

      <View style={styles.button}>
        <Image
          source={require('../assets/images/poisson.png')}
          style={styles.image}
        />
        <Pressable>Contact</Pressable>
       </View>
</View>


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
  button: {
    flexDirection: 'row',
  },
  image: {
    position: 'relative',
    height: 50,
    width: 50,

  },
  row:{
    flexDirection: 'row',

  }
});
