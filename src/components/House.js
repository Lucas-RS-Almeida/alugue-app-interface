import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export function House({ cover, title, price }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={cover}
          style={styles.cover}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          {title}
        </Text>
        <Text style={styles.price}>R$ {price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 70,
    flexDirection: 'row',
    elevation: 2,
    padding: 6,
    marginVertical: 5,
    marginRight: 20,
    marginLeft: 2,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  cover: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  content: {
    width: '65%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 10,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
