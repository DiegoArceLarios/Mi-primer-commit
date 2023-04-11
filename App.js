import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image , Alert} from 'react-native';
import{ Header } from 'react-native-elements'
import walle from './Localdb'
import PhonicSoundButtom from './PhonicSoundButtom';




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    };
  }
  render(){
  return (
    <View style={styles.container}>
      <Header
        backgroundColor='#FFD966'
        centerComponent={{
          text: 'Mono Fragmentado',
          style:{
            color: '#843C0C',
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 25,
            paddingBottom: 25
          }
          
        }}
        
      />
      
        <Image
          style={styles.imageIcon} source={{uri:'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/02553-monito-safari-png-.png?fit=1000%2C1000&ssl=1'}}
        />
        <Text style={styles.texto}>escribe tu palabra</Text>
        

      
      
      <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
            onPress={()=>{
              var word = this.state.text.toLowerCase().trim();
              walle[word]!==undefined ?
              (this.setState({chunks: walle[word].chunks}),
              this.setState({phonicSounds: walle[word].phones}))
              :
              Alert.alert("Esta palabra no existe en base de datos");
              
              }
            }>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item,index)=>{
            return(
            <PhonicSoundButtom
              phonesChunk={
                this.state.phonicSounds[index]
              }
              wordChunk={
                this.state.chunks[index]
              }
            />
            )
          })}
        </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
    inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  imageIcon: {
    width: 200,
    height: 200,
    marginLeft: 20,
  },
  texto: {
    fontWeight: 'bold',
    textSize: 10,
    paddingLeft: 15,
  },


});
