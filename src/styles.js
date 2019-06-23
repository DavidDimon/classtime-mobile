import { Platform } from 'react-native'

export const Colors = {
  danger: '#ff6868',
  primary: '#1ca1e3',
  success: '#2ecc71',
  silver: '#b7b7b7',
  grayDark: '#383838',
  grayLight: '#e2e2e2',
  textColor: '#383838',
  textColorReverse: '#fff',
  white: '#fff',
  blue: '#3396F5',
  grayLightTransparent: 'rgba(111, 111, 112,0.4)',
  gradientDisabled: ['#e2e2e2', '#e2e2e2'],
  gradientDanger: ['#fc9c9c', '#ff6868'],
  gradientSuccess: ['#74e8a4', '#2ecc71'],
  gradientPrimary: ['#69b0f4', '#3396F5'],
  gradientHeader: ['#4f3a65', '#9974c1'],
  gradientOrange: ['#ff9966', '#ff5e62'],
}

export const borderShadow = {
  ...Platform.select({
    ios: {
      shadowColor: '#b3b3b3',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    android: {
      elevation: 4,
    },
  }),
}
