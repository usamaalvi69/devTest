import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

import {createStyles} from './styles';
import {tabs} from './tabs';

export const BottomTabs = () => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  const TabItem = ({id, img, label}) => {
    return (
      <TouchableOpacity style={styles.tabItem} onPress={() => goto(id)}>
        <Image
          source={img}
          style={styles.tabIcon(id)}
          tintColor={id === 4 && colors.subText}
          resizeMode="contain"
        />
        <Text style={styles.tabLabel(id, colors)}>{label}</Text>
      </TouchableOpacity>
    );
  };
  const goto = id => console.log(id);
  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TabItem key={tab.id} {...tab} />
      ))}
    </View>
  );
};
