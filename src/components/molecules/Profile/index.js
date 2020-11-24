import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser, IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Profile({name, desc, isRemove}) {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar} />
        {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  avatar: {height: 110, width: 110, borderRadius: 110 / 2},
  borderProfile: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
  removePhoto: {position: 'absolute', right: 6, bottom: 8},
});
