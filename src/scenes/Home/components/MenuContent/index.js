import React, { useRef, useState, useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import DisciplineList from '../DisciplineList'
import AlertList from '../AlertList'
import Settings from '../Settings'
import { styles } from './styles'

const MenuContent = ({ menuSelected }) => {
  const [menu, setMenu] = useState(menuSelected)
  const animatable = useRef(null)

  useEffect(() => {
    if (menuSelected && menu !== menuSelected) {
      animatable.current.fadeOutLeft(200)
      setTimeout(() => {
        setMenu(menuSelected)
        animatable.current.fadeInRight(200)
      }, 200)
    }
  }, [menuSelected])

  return (
    <Animatable.View style={styles.content} ref={animatable}>
      {menu === 'classes' && <DisciplineList />}
      {menu === 'alerts' && <AlertList />}
      {menu === 'settings' && <Settings />}
    </Animatable.View>
  )
}

export default MenuContent
