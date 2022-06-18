import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export function New({
  cover, name, description, onPress, price,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={cover} style={styles.cover} />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>

        <View style={styles.dot}></View>

        <Text style={styles.badge}>Novo</Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.footer}>
        <View style={{ width: '80%' }}>
          <Text style={styles.price}>R$ {price}</Text>
        </View>

        <View style={{ width: '20%' }}>
          <Ionicons name="ios-add-circle" size={24} color="#000" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 200,
    height: 280,
    borderRadius: 10,
    elevation: 2,
    padding: 15,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
    backgroundColor: '#FFF',
  },
  cover: {
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#4F4A4A',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#F00',
  },
  badge: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#F00',
  },
  description: {
    fontSize: 9,
    color: '#4F4A4A',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 15,
  },
});
