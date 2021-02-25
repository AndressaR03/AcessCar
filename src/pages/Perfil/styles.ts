import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        flex: 1,
        alignItems: "center",
        paddingTop: 0,
    },
    info:{
        backgroundColor:'#19cdce',
        paddingTop:20,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        borderTopColor:'white',
        width:'100%',
        flexDirection:'row',
        height:150,
        borderRightColor:'#1C1C1C',
    },
    footer:{
        position:'absolute',
        bottom:0,
        flexDirection: 'row',
        paddingBottom:20,
      },
      botoes:{
        flexDirection:'column',
        marginTop:15

      },
      link:{
        fontSize:18,
        color:'#19cdce',
        textDecorationLine:"underline",
        width:'100%',
        textAlign:'center',
        paddingBottom:20,
        paddingTop:8
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
        width: 340,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,

      },
      button3: {
        width: 340,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
        marginBottom:20,
        marginTop:25
      },
      button4: {
        width: 340,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
        marginBottom:20

      },
      button5: {
        width: 340,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
        marginBottom:20
      },
      button6: {
        width: 340,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
      },
});
export default styles;