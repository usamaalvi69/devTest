import { StyleSheet } from 'react-native';

export const createStyles = (colors) => StyleSheet.create({
  container: {
    height: 85,
    backgroundColor: colors.primary,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tabItem: {
    padding: 3,
    alignItems: 'center',
    marginBottom: 10
  },
  tabIcon: (id) => ({
    height: id !== 4 ? 20 : 17,
    width: 30,
  }),
  tabLabel: (id, colors) => ({
    marginTop: 5,
    fontSize: 12,
    color: id !== 2 ? colors.subText : colors.white,
  }),
});
