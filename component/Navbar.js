import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Touchable,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import AntDesign from 'react-native-vector-icons/AntDesign'


const Navbar =()=>{
    return(
        <>
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity>
            <Image
            style={styles.logo}
            source={require('./YouTube.png')}
            />
            </TouchableOpacity>
                
            <View style={styles.moveright}>
                <TouchableOpacity>
                <Icon name = "search" size={27} style={styles.icons}/> 

                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons name = "account" size={27} style={styles.icons}/>
                </TouchableOpacity>

            </View>

            </View>
        </View>



        </>
    )
};

export default Navbar;


const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor: '#FFF',
        

    },

navbar:{
    marginTop:15,
    height:55,
    backgroundColor: '#FFF',
    paddingHorizontal:15,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'

},

logo:{
    width:120,
    height:23
},

moveright:{
    flexDirection:'row',

},

icons:{
    padding:5,
    marginLeft:15,

}


})