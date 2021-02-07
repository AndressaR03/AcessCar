import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1C',
        flex: 1,
        alignItems: "center",
        paddingTop: 70,
    },
    visao: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: "center",
        borderBottomColor:'#fff',
        borderBottomWidth:2,


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
      },
    cadastro: {
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#19cdce',
        fontSize: 30,
        marginTop: 50,
        marginBottom: 10,
    },
    selecao: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
        fontSize: 16,
        marginTop: 60,
        flexDirection: 'row',
    },
    selecao2: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
        fontSize: 16,
        marginTop: 10,
        flexDirection: 'row',
    },
    intro: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
        fontSize: 15,
        marginTop: 20,
        flexDirection: 'row',
        paddingLeft: 15

    },
    intro2: {
        textAlign: 'center',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        color: 'white',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 40,

    },
   
});
export default styles;