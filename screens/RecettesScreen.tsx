import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import CustomButton from '../components/CustomButton';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import navigation from '../navigation';
import { RootStackScreenProps, RootTabScreenProps } from '../types';

export default function RestaurantsScreen({ navigation }: RootStackScreenProps<'Restaurants'>) {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos recettes </Text>
      <Text>Toutes les recettes du bateau de Thibault</Text>
      <Text>06.63.99.99.78</Text>
      <Text>lebateaudethibault@gmail.com</Text>
      <Text>www.facebook.com/lebateaudethibault</Text>

      <View style={styles.row}>

          <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/homardRecette_icon.png')}
              style={styles.image}
            />
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Homard', image: require('../assets/images/photos/homardRecette.png') })
            }>Homard</Pressable>
          </View>

          <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/saintJacques_icon.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'St Jacques', image: require('../assets/images/photos/saintJacques.png') })}>
                St Jacques
            </Pressable>
          </View>

      </View>

      <View style={styles.row}>
        
      <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/barRecette_icon.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Bar', image: require('../assets/images/photos/barRecette.png') })}>
                Bar
            </Pressable>
          </View>

          <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/poisson.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Tourteau', image: require('../assets/images/icones/poisson.png') })}>
                Tourteau
            </Pressable>
          </View>
      </View>


      <View style={styles.row}>

      <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/poisson.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Recette', image: require('../assets/images/icones/poisson.png') })}>
                Recette
            </Pressable>
          </View>

          <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/poisson.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Recette', image: require('../assets/images/icones/poisson.png') })}>
                Recette
            </Pressable>
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
  row: {
    flexDirection: 'row',

  },
  button: {
    flexDirection: 'row',
  },

  image: {
    position: 'relative',
    height: 50,
    width: 50,

  },
});
