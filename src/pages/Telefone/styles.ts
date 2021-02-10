import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1C',
        flex: 1,
        alignItems: "center",
        paddingTop: 70,
      },
      campos:{
        alignItems: "center",
        paddingTop: 100,
      },
      telefone:{
        height: 50, 
        width: 320,
        paddingLeft: 10,
        backgroundColor: '#31343d',
        borderRadius:1,
        borderBottomColor: '#19cdce',
        borderBottomWidth:1,
        color:'white',
        fontSize:16,
      },
      footer:{
        flex:1,
        position:'absolute',
        bottom:0,
        flexDirection: 'row',
        paddingBottom:20,      
      },
      button1: {
        width: 150,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
      },
      button2: {
        width: 150,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
        marginLeft:20,
        color:'black'
      },
});
  export default styles;