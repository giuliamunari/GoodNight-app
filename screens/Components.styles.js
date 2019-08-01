import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    outerContainer: {
        flex: 1,
        color: 'white',
        justifyContent: 'center',
        padding:20,
        textAlign:'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign:'center',
        alignContent:'center',
        textAlign:'center',
    },
    title: {
        fontSize: 16,
        alignSelf: 'center',
        paddingBottom:30,
        textAlign:'center',
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#48BBEC',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        paddingTop:20,
        paddingBottom:20,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginRight:30,
        marginLeft:30
    },
    logo : {
        alignSelf: 'center',
        marginBottom: 30,

    },
    slide: { alignItems: 'center', flex: 1, 
    textAlign:'center', }


});