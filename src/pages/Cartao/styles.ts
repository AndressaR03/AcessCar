import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1C',
        flex: 1,
        alignItems: "center",
        paddingTop: 70,
    },
    numero:{
        height: 50, 
        width: 320,
        paddingLeft: 10,
        backgroundColor: '#31343d',
        borderRadius:15,
        color:'white',
        fontSize:16,
        marginBottom:20,
        justifyContent:'center',
        textAlignVertical:'center',
        textAlign:'center',
        
    },
    nome:{
        height: 50, 
        width: 320,
        paddingLeft: 10,
        backgroundColor: '#31343d',
        borderRadius:15,
        color:'white',
        fontSize:16,
        marginBottom:20,
        textAlignVertical:'center',
        textAlign:'center' 
    },
    link:{
        fontSize:18,
        color:'#19cdce',
        paddingTop: 5,
        textDecorationLine:"underline",
        paddingBottom:200
    },
    footer:{
        position:'absolute',
        bottom:0,
        flexDirection: 'row',
        paddingBottom:20,
      },
      button2: {
        width: 320,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
        marginLeft:20,
      },
    validade:{
        height: 50, 
        width: 150,
        backgroundColor: '#31343d',
        borderBottomColor: "#19cdce",
        borderRadius:15,
        color:'white',
        fontSize:16,
        marginBottom:20,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        borderColor:'#1c1c1c',
        textAlignVertical:'center',
        textAlign:'center' 

    },
    cod:{
        height: 50, 
        width: 150,
        backgroundColor: '#31343d',
        borderRadius:15,
        color:'white',
        fontSize:16,
        marginBottom:20,
        justifyContent:'space-between',
        marginLeft:20,
        borderBottomColor: "#19cdce",
        borderColor:'#1c1c1c',   
        textAlignVertical:'center',
        textAlign:'center'  
    },
    pagamento: { 
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 75,
    },
    pagamento2: { 
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 0,

    },
    card: {          
        alignItems: "center",
        justifyContent: "flex-start",
        borderColor:'#1c1c1c',
        backgroundColor:'red'
    },
    card1: {     
        flex:1,
        flexDirection:'column',
        alignItems: "center",
        borderColor:'#1c1c1c',
        backgroundColor:'blue',
        width:320,
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
    datacod:{    
        flexDirection: 'row',

    }
});
export default styles;