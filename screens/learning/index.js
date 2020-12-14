import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Button,
  SectionList,
  TextInput,
  Switch,
  ImageBackground,
} from 'react-native';

const Learning = ({ navigation }) => {
  const logo = {
    uri: 'https://miro.medium.com/max/3200/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg',
    width: '100%',
    height: 300,
  };

  const sections = [
    { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
    { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
  ];

  const dataItems = [{ name: 'Mike' }, { name: 'Dev' }, { name: 'Other' }, { name: 'Another' }];

  const [toggle, setToggle] = useState(false);

  const toggleSwitch = useCallback(() => {
    setToggle((state) => !state);
  }, [toggle]);

  console.log(toggle);

  const imageBg2 = 'https://i.pinimg.com/originals/8d/29/11/8d291189ea4144be3c5eb5a015559c8e.jpg';
  const imageBg = 'https://reactjs.org/logo-og.png';
  return (
    <View>
      <ImageBackground source={{ uri: imageBg2 }} style={styles.imageBg}>
        <ScrollView
          style={{
            width: '90%',
            margin: 'auto',
          }}
        >
          <View
            style={{
              marginTop: 10,
              flex: 1,
              flexDirection: 'row',
              gap: 1,
            }}
          >
            <Button
              color="#444"
              style={{ flex: 1 }}
              title="Form"
              onPress={() => navigation.navigate('Form', { name: 'Mike' })}
            />
            <Button color="#444" style={{ flex: 1 }} title="Modal" onPress={() => navigation.navigate('Modal')} />
          </View>
          <View style={styles.header}>
            <Text style={styles.titleText}> My first App </Text>
          </View>
          <View style={styles.card}>
            <Image source={logo} style={styles.cardImage} />
            <Text style={styles.cardText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsam, nisi repellat corrupti hic quo
              aspernatur nesciunt illum adipisci earum sed accusamus, harum architecto commodi ducimus? Modi, enim!
              Deserunt, voluptatum.
            </Text>
            <Button
              // style={styles.cardButton}
              color="#054e38"
              title="Learn more!"
              accessibilityLabel="learn more about this red button"
              onPress={() => alert('click this button')}
            />
          </View>

          <View>
            <FlatList data={dataItems} renderItem={({ item }) => <Text>{item.name}</Text>} />

            <SectionList
              style={styles.sectionList}
              sections={sections}
              renderItem={({ item }) => <Text>{item}</Text>}
              renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            />
          </View>

          <Switch
            trackColor={{ false: 'tomato', true: 'green' }}
            thumbColor={toggle ? 'green' : 'black'}
            value={toggle}
            onValueChange={toggleSwitch}
          />
          <TextInput style={styles.inputTest} placeholder="Entry a text" />
          <StatusBar style="auto" />
        </ScrollView>

        <View style={{ flex: 1, justifyContent: 'center', minHeight: 150, marginTop: 20 }}>
          <ImageBackground source={{ uri: imageBg }} style={styles.imageBg}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                backgroundColor: '#83d0e755',
                padding: 2,
              }}
            >
              Testing images
            </Text>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width: '95%',
    margin: 'auto',
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    minHeight: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#444',
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#666',
    shadowOpacity: 0.5,
    elevation: 1,
  },
  card: {
    padding: 25,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  cardText: {
    marginTop: 10,
    marginBottom: 10,
    color: '#444',
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 18,
  },
  cardImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
  },
  cardButton: {
    padding: 4,
    backgroundColor: '#43cea4',
    color: 'red',
  },
  sectionList: {
    marginTop: 10,
    marginBottom: 10,
    padding: 4,
  },
  sectionHeader: {
    backgroundColor: '#35bfd1',
    color: 'white',
    padding: 4,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  inputTest: {
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderColor: '#444',
    borderWidth: 2,
  },
});

export default Learning;
