import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
const { height, width } = Dimensions.get('window');

/*
  TODO
  larger font size

  DRY up this mess

  research react-native fontsize ems or rems, or even pt

  if there's nothing, make a library for it.

  // https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
*/

const fontLibrary = {
  emConstant: 123,
  // em = desired element pixel value / parent element font-size in pixels

  remConstant: 123,
  ptConstant: 123,

  em: (value) => {
    return value * emConstant;
  },
  rem: (value) => {
    return value * remConstant;
  },

  pt: (value) => {
    return value * ptConstant;
  },

  px: (value) => {
    return value;
  }
}

const primaryColor   = '#16a085';
const secondaryColor = '#e74c3c';
const black          = '#000';
const white          = '#fff';
// const todoFontSize   = 28

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    // margin: 4,
    // padding: 4,
    color: primaryColor
  },
  item: {
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  padded: {
    padding: 10
  },
  margined: {
    margin: 10
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
    textAlign: 'center'
  },
  spaceBetween: {
    flex: 1,
    justifyContent: 'space-between'
  },
  primaryColor: {
    color: primaryColor
  },
  secondaryColor: {
    color: secondaryColor
  },
  buttonPrimary: {
    // fontSize: 14,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: primaryColor,

    // paddingTop: 13,
    // paddingRight: 85,
    // paddingBottom: 13,
    // paddingLeft: 85,
  },
  // TODO: DRY these up
  buttonSecondary: {
    // fontSize: 14,
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
    fontSize: 14
  },
  buttonSecondaryText: {
    color: secondaryColor,
    fontSize: 14
  },
  backgroundPrimary: {
    backgroundColor: primaryColor
  },
  backgroundSecondary: {
    backgroundColor: secondaryColor
  },
  borderColorPrimary: {
    borderColor: primaryColor,
  },
  borderColorSecondary: {
    borderColor: secondaryColor,
  },
  backgroundTertiary: {
    backgroundColor: '#ccc'
  },
  white: {
    color: white
  },
  gray: {
    color: '#aaa',
  },
  strong: {
    fontWeight: 'bold'
  }
});
