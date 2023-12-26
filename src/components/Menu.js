import {View, Text, Pressable, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from '../styles';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBoxes,
  faCartShopping,
  faCheck,
  faCheckCircle,
  faChevronRight,
  faHeart,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import Svg, {Path} from 'react-native-svg';

const Menu = ({navigationRef}) => {
  console.log(navigationRef.current?.getCurrentRoute());

  return (
    <View style={styles.menu}>
      <View style={styles.menuTop}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        <Image
          source={require('../../assets/icons/logo.png')}
          style={{ width: 120, height: 30 }}
        />
          {/* <Text style={{...styles.headerText, fontSize: 24}}>Habittt</Text> */}
        </View>
      </View>

      <View style={styles.menuOptions}>
        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigationRef.navigate('Dashboard')}>
          <FontAwesomeIcon icon={faHome} />
          <Text style={styles.menuText}>Home</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigationRef.navigate('Wishlist')}>
          <FontAwesomeIcon icon={faHeart} />
          <Text style={styles.menuText}>Wishlist</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigationRef.navigate('Cart')}>
          <FontAwesomeIcon icon={faCartShopping} />
          <Text style={styles.menuText}>Cart</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigationRef.navigate('Category')}>
          <FontAwesomeIcon icon={faBoxes} />
          <Text style={styles.menuText}>Categories</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigationRef.navigate('Orders')}>
          <FontAwesomeIcon icon={faCheckCircle} />
          <Text style={styles.menuText}>Orders</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
