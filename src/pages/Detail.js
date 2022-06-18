import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Feather, Ionicons } from '@expo/vector-icons';

import Stars from 'react-native-stars';

import { SwiperComponent } from '../components/Swiper';

export function Detail({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent item={item} />
      </View>

      <View style={styles.headerContent}>
        <View style={{ width: '65%' }}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        <View style={{ width: '35%' }}>
          <Text style={styles.rating}>Avaliação</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Stars
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={<Ionicons name="md-star" size={24} style={styles.starStyle}  />}
              emptyStar={<Ionicons name="md-star-outline" size={24} style={styles.starStyle}  />}
              halfStar={<Ionicons name="md-star-half" size={24} style={styles.starStyle}  />}
            />
          </View>
        </View>
      </View>

      <Text style={styles.price}>R$ {item.value}</Text>

      <Text style={styles.description}>{item.description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15, marginVertical: 20 }}
      >
        {item.cover.map((image) => (
          <View
            key={`slid${image.id}`}
            style={styles.slide}
          >
            <Image
              source={image.image}
              style={{ width: 90, height: 90, borderRadius: 8 }}
            />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  swiperContent: {
    width: '100%',
    height: 340,
    flexDirection: 'row',
  },
  headerContent: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4F4A4A',
  },
  rating: {
    fontSize: 9,
    color: '#4F4A4A',
  },
  starStyle: {
    backgroundColor: 'transparent',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: '#000',
    color: '#E7A74E',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 15,
    paddingHorizontal: 20,
    lineHeight: 20,
    marginTop:20,
    color: '#B3AEAE',
  },
  slide: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginRight: 20,
    backgroundColor: '#FFF',
  },
});
