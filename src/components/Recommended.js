import {
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export function Recommended({ cover, title }) {
  return (
    <ImageBackground
      source={cover}
      style={styles.container}
      blurRadius={3}
    >
      <Text style={[styles.title, styles.shadow]}>{title}</Text>

      <Text style={[styles.off, styles.shadow]}>25% OFF</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 130,
    marginRight: 30,
    marginLeft: 3,
    marginTop: 20,
    marginBottom: 40,
    padding: 12,
    opacity: 0.8,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
  off: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
  shadow: {
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
    textShadowColor: '#000',
  },
});
