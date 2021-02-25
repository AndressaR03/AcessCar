import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1C',
        flex: 1,
        alignItems: "center",
        paddingTop: 30,
    },
    cadastro: {
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#19cdce',
        fontSize: 30,
        marginTop: 50,
        marginBottom: 17,
    },
    intro: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
        fontSize: 15,
        marginTop: 2,
        flexDirection: 'row',
        marginBottom:39,
    },
    viagens: { 
        flexDirection: "column",
        alignItems: "center",
        marginTop:50,
        flex:1,
        padding:20,

    },
    endereco:{
        height: 50, 
        width: 320,
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderRadius:2,
        color:'#1c1c1c',
        fontSize:16,
        marginBottom:20,
        justifyContent:'center',
        textAlignVertical:'center',
        fontWeight:'bold',
    },
    footer:{
        position:'absolute',
        bottom:0,
        flexDirection: 'row',
        paddingBottom:20,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
      },
      list:{
        marginBottom:40,
      },
    button: {
        width: 320,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
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
        width: 320,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
        marginBottom:30

      },  
      fechar: {
        width: 40,
        height: 40,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 100,
        
      },  

});
export default styles;