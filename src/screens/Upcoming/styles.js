import {StyleSheet} from 'react-native';

export const createStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    width: '91%',
    alignSelf: 'center',
  },

  titleContainer: {
    height: 75,
    // width: 300,
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  poster: {
    // width: '90%',
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
    // overflow: 'hidden',
    // // position: 'relative',
  },
  posterImage: {
    borderRadius: 10,
  },

  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    // fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 5,
  },
});
