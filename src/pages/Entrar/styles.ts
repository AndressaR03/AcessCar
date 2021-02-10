import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1C',
        flex: 1,
        alignItems: "center",
        justifyContent:'center',
      },
      campos:{
        flex: 1,
        alignItems: "center",

      },
      email:{
        height: 50, 
        width: 320,
        paddingLeft: 10,
        backgroundColor: '#333333',
        borderWidth: 1,
        borderRadius:1,
        marginTop: 40,
        borderBottomColor: '#19cdce',
        color:'white',
        borderColor:'#1c1c1c',
        fontSize:16
      },      
      senha:{
        height: 50, 
        width: 320,
        paddingLeft: 10,
        backgroundColor: '#333333',
        borderWidth: 1,
        borderRadius:1,
        marginTop: 20,
        borderBottomColor: '#19cdce',
        color:'white',
        borderColor:'#1c1c1c',
        fontSize:16
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
      button:{
        width: 320,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
    },
});
export default styles;