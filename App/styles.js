import { StyleSheet } from 'react-native';

/*
  TODO
  DRY up this mess
*/

const primaryColor = '#16a085';
const secondaryColor = '#e74c3c';
const black = '#000';
const white = '#fff';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    color: primaryColor,
  },
  item: {
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  padded: {
    padding: 10,
  },
  margined: {
    margin: 10,
  },
  bordered: {
    borderColor: black,
    borderWidth: 1,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  spaceBetween: {
    flex: 1,
    justifyContent: 'space-between',
  },
  primaryColor: {
    color: primaryColor,
  },
  secondaryColor: {
    color: secondaryColor,
  },
  buttonPrimary: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: primaryColor,
  },
  // TODO: DRY these up
  buttonSecondary: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: secondaryColor,
    paddingTop: 13,
    paddingRight: 85,
    paddingBottom: 13,
    paddingLeft: 85,
  },
  buttonPrimaryText: {
    color: primaryColor,
    fontSize: 14,
  },
  buttonSecondaryText: {
    color: secondaryColor,
    fontSize: 14,
  },
  backgroundPrimary: {
    backgroundColor: primaryColor,
  },
  backgroundSecondary: {
    backgroundColor: secondaryColor,
  },
  borderColorPrimary: {
    borderColor: primaryColor,
  },
  borderColorSecondary: {
    borderColor: secondaryColor,
  },
  backgroundTertiary: {
    backgroundColor: '#ccc',
  },
  white: {
    color: white,
  },
  gray: {
    color: '#aaa',
  },
  strong: {
    fontWeight: 'bold',
  },
});
