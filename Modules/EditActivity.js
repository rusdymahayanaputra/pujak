import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert, Image, TouchableOpacity, YellowBox, ListView, Platform, Picker , ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';

class EditActivity extends Component {
  constructor(props) {

        super(props)

        this.state = {
          id_lokasi: '',
          nama_lokasi: '',
          alamat: '',
          id_kategori: ''
        }

      }


     static navigationOptions =
     {
        title: 'EditStudentRecordActivity',
     };

     componentDidMount(){

      // Received Student Details Sent From Previous Activity and Set Into State.
      this.setState({
        id_lokasi : this.props.navigation.state.params.ID_LOKASI,
        nama_lokasi: this.props.navigation.state.params.NAMA,
        alamat: this.props.navigation.state.params.ALAMAT,
        id_kategori: this.props.navigation.state.params.KATEGORI,
      })

     }

     UpdateStudentRecord = () =>{

             fetch('https://reactnativecode.000webhostapp.com/Student/UpdateStudentRecord.php', {
             method: 'POST',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({

               id_lokasi : this.state.id_lokasi,

               nama_lokasi : this.state.nama_lokasi,

               alamat : this.state.alamat,

               id_kategori : this.state.id_kategori,

             })

             }).then((response) => response.json())
                 .then((responseJson) => {

                   // Showing response message coming from server updating records.
                   Alert.alert(responseJson);

                 }).catch((error) => {
                   console.error(error);
                 });

       }


     DeleteStudentRecord = () =>{

           fetch('https://reactnativecode.000webhostapp.com/Student/DeleteStudentRecord.php', {
           method: 'POST',
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           },
           body: JSON.stringify({

             id_lokasi : this.state.id_lokasi

           })

           }).then((response) => response.json())
           .then((responseJson) => {

             // Showing response message coming from server after inserting records.
             Alert.alert(responseJson);

           }).catch((error) => {
              console.error(error);
           });

           this.props.navigation.navigate('Second');

       }

     render() {

       return (

    <View style={styles.MainContainer}>

           <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Student Record Form </Text>
           <Text>{ this.state.nama_lokasi }</Text>

           <TextInput

             placeholder="Student Name Shows Here"

             value={this.state.nama_lokasi}

             onChangeText={ TextInputValue => this.setState({ nama_lokasi : TextInputValue }) }

             underlineColorAndroid='transparent'

             style={styles.TextInputStyleClass}
           />

          <TextInput

             placeholder="Student Class Shows Here"

             value={this.state.alamat}

             onChangeText={ TextInputValue => this.setState({ alamat : TextInputValue }) }

             underlineColorAndroid='transparent'

             style={styles.TextInputStyleClass}
           />

          <TextInput

             placeholder="Student Phone Number Shows Here"

             value={this.state.id_kategori}

             onChangeText={ TextInputValue => this.setState({ id_kategori : TextInputValue }) }

             underlineColorAndroid='transparent'

             style={styles.TextInputStyleClass}
           />

           <TextInput

             placeholder="Student Phone Number Shows Here"

             value={this.state.id_lokasi}

             onChangeText={ TextInputValue => this.setState({ id_lokasi : TextInputValue }) }

             underlineColorAndroid='transparent'

             style={styles.TextInputStyleClass}
           />

          <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateStudentRecord} >

             <Text style={styles.TextStyle}> UPDATE STUDENT RECORD </Text>

          </TouchableOpacity>

          <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteStudentRecord} >

             <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>

          </TouchableOpacity>


    </View>

       );
     }

 }
  const styles = StyleSheet.create({

  MainContainer :{

  justifyContent: 'center',
  flex:1,
  margin: 10
  },

  AddButton: {
    marginTop : 10,
  },

  TextInputStyleClass: {

  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  // Set border Hex Color Code Here.
   borderColor: '#FF5722',

  // Set border Radius.
   //borderRadius: 10 ,
  }

  });
export default EditActivity;
