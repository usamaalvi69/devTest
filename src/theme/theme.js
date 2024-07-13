import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#2E2739',
      secondary: '#2E27391A',
      error: '#D32F2F',
      subText: '#827D88',
      text: '#FFF',
      global: '#61C3F2',
      bg:'#F2F2F6',
      black: '#000',
      placeHolder: '#202C434D',
      white:'#FFF',
      genre: ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F','#61C3F2', '#29434E'],
    },
  },
  
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#212121',
      secondary: '#29434E',
      error: '#D32F2F',
      subText: '#827D88',
      text: '#FFFFFF',
      global: '#FFFFFF',
      bg:'#F2F2F6',
      black: '#000',
      placeHolder: '#202C434D',
      white:'#FFF',
      genre: ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F','#61C3F2', '#29434E'],
    },
  },
};
