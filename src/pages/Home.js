import { View, Text, StyleSheet } from 'react-native';

import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { New } from '../components/New';
import { House } from '../components/House';
import { Recommended } from '../components/Recommended';

import { list } from '../mock/list';

export function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#FFF' }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="#000" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        {list.map((item) => (
          <New key={item.id}
            cover={item.cover[0].image}
            name={item.title}
            description={item.description}
            price={item.value}
            onPress={() => navigation.navigate('detail', { item })}
          />
        ))}
      </ScrollView>

      <View style={styles.contentNew}>
        <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        {list.map((item) => (
          <House
            key={`h${item.id}`}
            cover={item.cover[0].image}
            title={item.title}
            price={item.value}
          />
        ))}
      </ScrollView>

      <View style={styles.contentNew}>
        <Text style={[styles.title, { marginTop: 20 }]}>Dica do dia</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        {list.map((item) => (
          <Recommended
            key={`r${item.id}`}
            cover={item.cover[0].image}
            title={item.title}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  inputArea: {
    width: '98%',
    height: 37,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    elevation: 2,
    borderRadius: 5,
  },
  input: {
    width: '90%',
    paddingHorizontal: 10,
    fontSize: 13,
  },
  contentNew: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4F4A4A',
  },
});
