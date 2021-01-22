import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Touchable,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'


const Tabbar =()=>{
  return(
    <>
    <View>
        
       <TouchableOpacity>
           <Icon name='home' size={25} />
           <Text style = {styles.mytext}>Home</Text>
       </TouchableOpacity>
    
    </View>

    </>
  )
}



export default Tabbar;



const styles = StyleSheet.create({
    tabbar:{
        backgroundColor:'#FFF',
        height:60,
        borderTopWidth:2,
        borderColor:'#e5e5e5',
        flexDirection:'row',
        justifyContent:'space-around',
        
        
    }
})