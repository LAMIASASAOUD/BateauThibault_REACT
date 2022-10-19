import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import CustomButton from '../components/CustomButton';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import navigation from '../navigation';
import { RootTabScreenProps } from '../types';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos bateaux partenaires </Text>
      <Text>Tous les eaux mènent à Thibault</Text>
      <Text>06.63.99.99.78</Text>
      <Text>lebateaudethibault@gmail.com</Text>
      <Text>www.facebook.com/lebateaudethibault</Text>

      <View style={styles.row}>

          <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/deLaBrise_icon.png')}
              style={styles.image}
            />
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'De la brise', image: require('../assets/images/photos/deLaBrise.png') })
              // navigation.navigate('Details')
            }>De la Brise</Pressable>
          </View>

          <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/saphir_icon.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Saphir', image: require('../assets/images/photos/saphir.png') })}>
                Saphir
            </Pressable>
          </View>

      </View>

      <View style={styles.row}>
        
      <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/gastMicher_icon.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Gast Micher', image: require('../assets/images/photos/gastMicher.png') })}>
                Gast Micher
            </Pressable>
          </View>

          <View style={styles.button}>
            <Image
              source={require('../assets/images/icones/aquilon_icon.png')}
              style={styles.image}/>
            <Pressable onPress={() =>
              navigation.navigate('Details', { title: 'Aquilon', image: require('../assets/images/photos/aquilon.png') })}>
                Aquilon
            </Pressable>
          </View>
      </View>

      <View style={styles.row}>
   {/* CONTACT */}
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
