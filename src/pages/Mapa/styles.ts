import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    texto1:{
        color:"black",
        backgroundColor:"white",
        height:50,
        width:400,
        textAlign:"center",
        paddingTop:10,
        fontWeight:"300",
        fontSize: 20
    },
    container: {
        backgroundColor: '#000000',
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
      },
      bottom: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 36
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
        backgroundColor: '#ffffff',
      },
});
export default styles;