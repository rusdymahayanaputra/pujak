import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert, Image, TouchableOpacity, YellowBox, ListView, AppRegistry, ActivityIndicator,   } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';

class SPBU extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      }
    }

  // GetItem(nama_lokasi, alamat) {
  //   Alert.alert(nama_lokasi, alamat);
  //   }


  GetItem=(id_lokasi, nama_lokasi, alamat, id_kategori)=>{

            this.props.navigation.navigate('Edit', {

              ID_LOKASI: id_lokasi,
              NAMA: nama_lokasi,
              ALAMAT: alamat,
              KATEGORI: id_kategori

            });

       }
    navigateAdd = () => {
     this.props.navigation.navigate('Add');

    }



    componentDidMount() {

      return fetch('http://api.ifreethink.net/Z1515051022/datas/get/4')
        .then((response) => response.json())
        .then((responseJson) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson),
          }, function () {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    ListViewItemSeparator = () => {
      return (
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#000',
          }}
        />
      );
    }

    renderFooter = () => {

        var footer = (
        <TouchableOpacity activeOpacity={0.5} onPress = { this.navigateAdd }>
        <View style={styles.header_footer_style}>

          <Text style={styles.textStyle}> Tambah </Text>

        </View>
        </TouchableOpacity>
        );

        return footer;
      };

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }

      return (

        <View style={styles.MainContainer}>

          <ListView

            dataSource={this.state.dataSource}

            renderSeparator={this.ListViewItemSeparator}

            renderFooter={this.renderFooter}

            // renderRow={(rowData) => <View style={styles.rowViewContainer} >
            //
            //           <TouchableOpacity onPress={this.GetItem.bind(this, rowData.nama_lokasi, rowData.alamat)} >
            //
            //               <Text style={styles.TextStyleBox} >{rowData.nama_lokasi}</Text>
            //
            //           </TouchableOpacity>
            //
            //         </View> }
            //
            // />

            renderRow={(rowData) => <Text style={styles.rowViewContainer}

                      onPress={this.GetItem.bind(
                        this,rowData.id_lokasi,
                         rowData.nama_lokasi,
                         rowData.alamat,
                         rowData.id_kategori,
                         )} >

                      {rowData.nama_lokasi}

                      </Text> }

          />

        </View>
      );
    }
  }

  const styles = StyleSheet.create({

  MainContainer :{

  // Setting up View inside content in Vertically center.
  justifyContent: 'center',
  flex:1,
  margin: 10

  },

     rowViewContainer: {
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
        },
        TextStyleBox:{
          fontSize: 20,
          marginBottom: 4,
          color: '#000000',
          alignItems:'center',
          justifyContent: 'center',
          fontWeight:'bold',
        },
        header_footer_style:{

           width: '100%',
           height: 45,
           backgroundColor: '#FF9800'

       },
       textStyle:{

         textAlign: 'center',
         color: '#fff',
         fontSize: 22,
         padding: 7

       },
  });

export default SPBU;
