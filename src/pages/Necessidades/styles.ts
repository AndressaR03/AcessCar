import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1C',
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    visao: {
        backgroundColor: '#1C1C1C',
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    button: {
        width: 140,
        height: 45,
        backgroundColor: '#19cdce',
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
        marginTop: 77,
        justifyContent:'space-between',
        marginStart:15
    },
    scrollView: {
        backgroundColor: '#1C1C1C',

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
    intro: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
        fontSize: 15,
        marginTop: 15,
        flexDirection: 'row'
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