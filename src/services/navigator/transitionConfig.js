import { Easing, Animated } from 'react-native'

const transitionConfig = () => ({
  transitionSpec: {
    duration: 500,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: ({ layout, position, scene }) => {
    const thisSceneIndex = scene.index
    const width = layout.initWidth

    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    })

    return { transform: [{ translateX }] }
  },
})

export default transitionConfig
