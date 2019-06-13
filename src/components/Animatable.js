import React, { PureComponent } from 'react'
import * as Animatable from 'react-native-animatable'

class ViewAnimatable extends PureComponent {
  render() {
    const { style, type, children, iterationCount, duration } = this.props
    return (
      <Animatable.View
        style={style}
        animation={type}
        iterationCount={iterationCount}
        duration={duration}
        useNativeDriver={true}
        ref={ref => (this.ref = ref)}
      >
        {children}
      </Animatable.View>
    )
  }
}

ViewAnimatable.defaultProps = {
  styles: {},
  iterationCount: 1,
}

export default ViewAnimatable
