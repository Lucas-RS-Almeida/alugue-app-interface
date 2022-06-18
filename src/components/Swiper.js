import {
  View,
  Title,
  Image,
  StyleSheet,
} from 'react-native';

import Swiper from 'react-native-swiper';

export function SwiperComponent({ item }) {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{
        width: 10,
        height: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#000',
        borderColor: '#000',
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        width: 10,
        height: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
      }}
    >
      {item.cover.map((image) => (
        <View
          key={image.id}
          style={styles.slide}
        >
        <Image
          source={image.image}
          style={{ width: '100%', height: 400 }}
        />
      </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
