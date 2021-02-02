import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1C',
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
      },
      campos:{
        marginTop: 30,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      button: {
        width: 140,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
        marginTop: 206,
        justifyContent:'space-between',
        marginStart:15
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
        marginTop:50,
      },
      intro:{
        textAlign:'center',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        color:'white',
        fontSize:15,
        marginTop:20
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
      },
});
  export default styles;