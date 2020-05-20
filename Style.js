import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:20,
    },
    search: {
        marginTop:40,
        marginHorizontal:20,
    },
    button:{
        color:'#EB6123',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 15,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
    },
    textInput: {
        height: 40,borderColor: 'red',
        borderWidth: 1,
        paddingHorizontal:20,
        marginBottom:20,
    },
    tinyLogo: {
        width: 300,
    },
    centerImg: {
        justifyContent: 'center',  
        alignItems: 'center',      
    }    
})