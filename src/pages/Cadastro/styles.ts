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
          marginTop: 30,
      },  
      scrollView:{
        backgroundColor: '#1C1C1C',
      },
      cadastro:{
        textAlign:'center',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        color:'#19cdce',
        fontSize:30,
        marginTop:50
      },
      intro:{
        textAlign:'center',
        alignItems:'center',
        justifyContent:'flex-start',
        color:'white',
        fontSize:15,
        marginTop:20,
      },
      intro2:{
        textAlign:'center',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        color:'white',
        fontSize:15,
        marginTop:3
      },
      nome:{
        height: 40, 
        width: 260,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
        marginTop: 28
      },
      cpf:{
        height: 40, 
        width: 260,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
        marginTop: 20,
      },
      telefone:{
        height: 40,
        width: 260,
        paddingLeft: 10,
        marginTop: 20,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10
      },
      email:{
        height: 40,
        width: 260,
        paddingLeft: 10,
        marginTop: 20,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10
      },
      senha:{
        height: 40,
        width: 260,
        paddingLeft: 10,
        marginTop: 20,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10
      },
});
  export default styles;