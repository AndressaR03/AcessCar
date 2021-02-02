import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1C',
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
      },
      button:{
        width:260,
        height:50,
        backgroundColor:'#19cdce',
        alignItems:"center",
        padding:10,
        borderRadius:2,
        marginTop: 25,
    },   
      scrollView:{
        backgroundColor: '#1C1C1C',
      },
      link:{
          fontSize:14,
          color:'#19cdce',
          paddingTop: 23,
          textDecorationLine:"underline"
      },
      nome:{
        height: 45, 
        width: 260,
        paddingLeft: 10,
        backgroundColor: '#31343d',
        borderWidth: 1,
        borderRadius:1,
        marginTop: 28,
        borderBottomColor: '#19cdce',
        color:'white',
        borderColor:'#1c1c1c',
      },      
      senha:{
        height: 45, 
        width: 260,
        paddingLeft: 10,
        backgroundColor: '#31343d',
        borderWidth: 1,
        borderRadius:1,
        marginTop: 28,
        borderBottomColor: '#19cdce',
        color:'white',
        borderColor:'#1c1c1c',
      }
});
export default styles;