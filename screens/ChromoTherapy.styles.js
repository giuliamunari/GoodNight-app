import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        paddingTop:20,
        paddingBottom:20,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
});