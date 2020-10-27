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
          borderRadius:10,
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
        height: 50,
        width: 260,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
        marginTop: 16
      },
      nome2:{
        height: 45,
        width: 260,
        paddingLeft: 10,
        backgroundColor: '#2E2E2E',
        borderRadius:8,
        marginTop: 16,
        color:'#abb2b9',
      },
      senha:{
        height: 50,
        width: 260,
        paddingLeft: 10,
        marginTop: 20,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
      }
});
export default styles;