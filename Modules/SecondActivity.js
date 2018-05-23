import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert, Image, TouchableOpacity, YellowBox, ListView  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';

class SecondActivity extends Component {
  constructor(props) {
    super(props);
  }

  navigateThird = () => {
   this.props.navigation.navigate('Third');

  }

  navigateHospital = () => {
   this.props.navigation.navigate('Hospital');

  }

  navigateHotel = () => {
   this.props.navigation.navigate('Hotel');

  }

  navigateSPBU = () => {
   this.props.navigation.navigate('SPBU');

  }

  navigateMaps = () => {
   this.props.navigation.navigate('Maps');

  }

  render() {
    return (
      <View style = {styles.MainContainer2}>
        <View style = {styles.Slider}>
          <Image
           source={require('./singaraja.jpg')}
            style={styles.ImageSlider}
          />
        </View>
        <View style = {styles.BoxKategori}>
          <View style = {styles.Kategoribox}>
            <View style = {styles.KategoriboxIn}>
              <TouchableOpacity activeOpacity={0.5} onPress = { this.navigateMaps }>
                <Image
                 source={require('./bank.png')}
                 style={styles.ImageStyleBox}
                />
                <Text style = {styles.TextStyleBox}> Bank </Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.KategoriboxIn}>
              <TouchableOpacity activeOpacity={0.5} onPress = { this.navigateHotel }>
                <Image
                 source={require('./store.png')}
                 style={styles.ImageStyleBox}
                />
              </TouchableOpacity>
              <Text style = {styles.TextStyleBox}> Hotel </Text>
            </View>
          </View>

          <View style = {styles.Kategoribox}>
            <View style = {styles.KategoriboxIn}>
              <TouchableOpacity activeOpacity={0.5} onPress = { this.navigateHospital }>
                <Image
                 source={require('./RS.png')}
                 style={styles.ImageStyleBox}
                />
              </TouchableOpacity>
              <Text style = {styles.TextStyleBox}> Rumah Sakit </Text>
            </View>
            <View style = {styles.KategoriboxIn}>
              <TouchableOpacity activeOpacity={0.5} onPress = { this.navigateSPBU }>
                <Image
                 source={require('./spbu.png')}
                 style={styles.ImageStyleBox}
                />
              </TouchableOpacity>
              <Text style = {styles.TextStyleBox}> SPBU </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create(
{
  MainContainer:{

  justifyContent: 'center',
  flex:1,
  backgroundColor: '#2196F3',
  },

  Slider:{
  justifyContent: 'center',
  flex:1.5,
  backgroundColor: '#000000',
  },

  MainContainer2:{
  justifyContent: 'center',
  flex:1,
  backgroundColor: '#2196F3',
  flexDirection: 'column',
  },

  BoxKategori:{
  justifyContent: 'center',
  flex:3,
  backgroundColor: '#2196F3',
  flexDirection: 'row',
  },

  Buttonbox:{
    justifyContent: 'center',
    flex:1,
    backgroundColor: '#2196F3',
    margin: 160,
  },

  Kategoribox:{
    justifyContent: 'center',
    flex:1,
    backgroundColor: '#2196F3',
    margin: 20,
  },

  KategoriboxIn:{
    justifyContent: 'space-around',
    alignItems: 'center',
    flex:1,
    backgroundColor: '#FFFFFF',
    margin: 20,
    flexDirection: 'column',
    borderWidth: 2,
     borderColor: '#000000',
     borderRadius: 5 ,
  },


 textStyle:
 {
    fontSize: 22,
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
 },

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',

 // Set border Radius.
 borderRadius: 5 ,

},

 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center',
  marginBottom: 15
},

FacebookStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderWidth: .5,
  borderColor: '#fff',
  height: 40,
  borderRadius: 5 ,
  margin: 5,

},

ImageIconStyle: {
   padding: 10,
   margin: 5,
   height: 25,
   width: 25,
   resizeMode : 'stretch',
   justifyContent: 'center',
   alignItems:'center'

},

ImageSlider: {
   padding: 10,
   width: 600,
   height: 500,
   resizeMode : 'stretch',
   justifyContent: 'center',
   alignItems:'center'

},

ImageStyleBox: {
   padding: 10,
   marginLeft: 5,
   marginRight: 5,
   marginBottom: 5,
   marginTop: 10,
   width: 116,
   height: 116,
   resizeMode : 'stretch',
   justifyContent: 'center',
   alignItems:'center',
},

TextStyle :{

  marginBottom : 4,
  marginRight :20,
  fontSize: 28,
  color: '#000000'

},

TextStyleBox:{
  marginBottom : 4,
  fontSize: 20,
  color: '#000000',
  alignItems:'center',
  justifyContent: 'center',
  fontWeight:'bold',
},

MainText :{
  fontSize: 28,
  color: '#fff',
  alignItems: 'center',
  justifyContent: 'center'
},

MainText2 :{
  marginTop: 5,
  fontSize: 15,
  color: '#fff',
  alignItems: 'center',
  justifyContent: 'center'
},

MainTextBox:{

justifyContent: 'center',
flex:1,
backgroundColor: '#2196F3',
alignItems: 'center'
},

SeparatorLine :{

backgroundColor : '#000000',
width: 1,
height: 40

},

});

export default SecondActivity;
