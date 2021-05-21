import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch, SwitchProps } from 'react-native';

interface HeaderProps extends SwitchProps{
  isEnabled: boolean;
}

export function Header({ isEnabled, onValueChange }: HeaderProps) {
  return (
    <View style={[styles.header,{backgroundColor:isEnabled ? "#282B5A" : '#273FAD'}]}>
      <View>        
        <Switch
          trackColor={{ false: "#767577", true: "#413A6F" }}
          thumbColor={isEnabled ? "#9347CA" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onValueChange}
          value={isEnabled}
        />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    left:-18,
    fontFamily: 'Poppins-Regular',
  },
  headerTitle:{
    flex:1,
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
