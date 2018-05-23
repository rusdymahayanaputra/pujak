import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert, Image, TouchableOpacity, YellowBox, ListView  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';
import MainActivity from './Modules/MainActivity' ;
import SecondActivity from './Modules/SecondActivity' ;
import ThirdActivity from './Modules/ThirdActivity' ;
import Hospital from './Modules/Hospital' ;
import Hotel from './Modules/Hotel' ;
import SPBU from './Modules/SPBU' ;
import AddActivity from './Modules/AddActivity' ;
import EditActivity from './Modules/EditActivity' ;

class HamburgerIcon extends Component {

  toggleDrawer=()=>{

    console.log(this.props.navigationProps);

    this.props.navigationProps.navigate('DrawerOpen');

  }

  render() {

    return (

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

          <Image
            source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
            style={{ width: 25, height: 25, marginLeft: 5}}
          />

        </TouchableOpacity>

      </View>

    );


  }
}


const SecondActivity_StackNavigator = StackNavigator({
      Second: {
        screen: SecondActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'Kategori',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

          headerStyle: {
            backgroundColor: '#FFFFFF'
          },
          headerTintColor: '#000000',
        })
      },
});

const ThirdActivity_StackNavigator = StackNavigator({
      Third: {
        screen: ThirdActivity,
        navigationOptions: ({ navigation }) => ({
          title: '',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

          headerStyle: {
            backgroundColor: '#FFFFFF'
          },
          headerTintColor: '#000000',
        })
      },
});

const Hospital_StackNavigator = StackNavigator({
      Hospital: {
        screen: Hospital,
        navigationOptions: ({ navigation }) => ({
          title: '',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

          headerStyle: {
            backgroundColor: '#FFFFFF'
          },
          headerTintColor: '#000000',
        })
      },
});

const Hotel_StackNavigator = StackNavigator({
      Hotel: {
        screen: Hotel,
        navigationOptions: ({ navigation }) => ({
          title: '',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

          headerStyle: {
            backgroundColor: '#FFFFFF'
          },
          headerTintColor: '#000000',
        })
      },
});

const SPBU_StackNavigator = StackNavigator({
      SPBU: {
        screen: SPBU,
        navigationOptions: ({ navigation }) => ({
          title: '',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

          headerStyle: {
            backgroundColor: '#FFFFFF'
          },
          headerTintColor: '#000000',
        })
      },
});

const AddActivity_StackNavigator = StackNavigator({
      Add: {
        screen: AddActivity,
        navigationOptions: ({ navigation }) => ({
          title: '',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

          headerStyle: {
            backgroundColor: '#FFFFFF'
          },
          headerTintColor: '#000000',
        })
      },
});

const EditActivity_StackNavigator = StackNavigator({
      Edit: {
        screen: EditActivity,
        navigationOptions: ({ navigation }) => ({
          title: '',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

          headerStyle: {
            backgroundColor: '#FFFFFF'
          },
          headerTintColor: '#000000',
        })
      },
});



export default Project = DrawerNavigator(
  {
    Dashboard: {screen : MainActivity},
    // MainStack: { screen: FirstActivity_StackNavigator},
    SecondStack: {
    screen: SecondActivity_StackNavigator
    },
    ThirdStack: {
    screen: ThirdActivity_StackNavigator
    },
    HospitalStack: {
    screen: Hospital_StackNavigator
    },
    HotelStack: {
    screen: Hotel_StackNavigator
    },
    SPBUStack: {
    screen: SPBU_StackNavigator
    },
    AddStack: { screen: AddActivity_StackNavigator},
    EditStack: { screen: EditActivity_StackNavigator},
  }
)


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
