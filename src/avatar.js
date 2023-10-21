import React from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
        color='#bf7520'
      />
    </View>
  );
}

export function Avatarr() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.avatarRow}>
        <Avatar
          size={50}
          rounded
          title="P"
          containerStyle={{ backgroundColor: "#FA9203" }}
        />
        <Avatar
          size={50}
          rounded
          title="E"
          containerStyle={{ backgroundColor: "#E14F08" }}
        />
        <Avatar
          size={50}
          rounded
          title="T"
          containerStyle={{ backgroundColor: "#B31A15" }}
        />
        <Avatar
          size={50}
          rounded
          title="E"
          containerStyle={{ backgroundColor: "#6D0E4E" }}
        />
        <Avatar
          size={50}
          rounded
          title="R"
          containerStyle={{ backgroundColor: "#462969" }}
        />
      </ScrollView>
      <MyBackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 200,
  },
});
