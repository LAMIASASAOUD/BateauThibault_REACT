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
      <Text style={styles.title}>Restaurants partenaires </Text>
      <Text>Tous les restaurants partenaires avec le bateau Thibault</Text>
      <Text>06.63.99.99.78</Text>
      <Text>lebateaudethibault@gmail.com</Text>
      <Text>www.facebook.com/lebateaudethibault</Text>

      <View style={styles.row}>

          <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/desGascons_icon.png')}
              style={styles.image}
            />
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Bistrot des Gascons', image: require('../assets/images/photos/desGascons.png') })
            }>Bistrot des Gascons</Pressable>
          </View>

          <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/fousDeLIle_icon.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Les fous de l\'ile', image: require('../assets/images/photos/fousDeLIle.png') })}>
                Les fous de l'Île
            </Pressable>
          </View>

      </View>

      <View style={styles.row}>
        
      <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/bistrotLandais_icon.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Bistrot Landais', image: require('../assets/images/photos/bistrotLandais.png') })}>
                Bistrot Landais
            </Pressable>
          </View>

          <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/villa9Trois_icon.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Villa 9-Trois', image: require('../assets/images/photos/villa9Trois.png') })}>
                Villa 9-Trois
            </Pressable>
          </View>
      </View>


      <View style={styles.row}>

      <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/duSommelier_icon.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Bistrot du Sommelier', image: require('../assets/images/photos/duSommelier.png') })}>
                Bistrot du Sommelier
            </Pressable>
          </View>

          <View style={styles.button}>
            {/* <Image
              source={require('../assets/images/icones/poisson.png')}
              style={styles.image}/> */}
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Le bateau de Thibault', image: require('../assets/images/photos/TIG.png') })}>
                Devenez partenaire!
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
