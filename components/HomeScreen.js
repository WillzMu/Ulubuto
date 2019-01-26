import React from 'react';
import Map from './Map'

import {Text,Container} from 'native-base'
import {View, Alert, Button, TouchableOpacity } from 'react-native'

 



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Set Trash Pickup Location',
  };

    constructor(props){
      super(props)
      this.state={
         
          address: '',
         
         
      } 
      
      this.handlebuttonClick = this.handlebuttonClick.bind(this)
      
    }

    handlebuttonClick=()=>{

      this.props.navigation.navigate('Details',{location:this.state.address,title:'Details'})
      console.log('button click')
      
    }
    

    
      
    render(){
        
           
                return(
                  <View style={{flex:1, paddingLeft:10,paddingRight:10}}>
                    <Map />
                    <View
        style={{
            position: 'absolute',//use absolute position to show button on top of the map
            top: '80%', //for center align
            alignSelf: 'center' //for align to right
        }}
    >
      <View>
      <TouchableOpacity style={{width:160,height:50}}>
      <Button  color='#008000' title='CONFIRM' onPress={()=> this.handlebuttonClick()}/>
      </TouchableOpacity>
      </View>
    
    
      </View>
                  </View>      
                )
          
       
    }
}

export default HomeScreen;