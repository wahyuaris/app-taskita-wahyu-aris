import * as React from 'react';
import {View,
     Text, 
     SafeAreaView, 
     StyleSheet,
      TextInput , 
      StatusBar, 
      Button, 
     TouchableOpacity} from 'react-native';
import {
    IconMail,
    IconLock
} from '../../assets'

const onPress=()=>{
    alert('asdf')
}

export default LoginScreen =  () => {

    const LoginButton = ()=>{
        return (
        
            <View style={{
                borderRadius:40,
                marginTop:10,
                padding:15,
                alignItems:'center',
                backgroundColor:'#A03E82'
            }}>
                <Text style={{ color:'white'}}>LOGIN</Text>
            </View>
        
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                animated={true}
                backgroundColor="#131B63" />

            <Text style={styles.HeaderText}>Login</Text>
            <Text style={styles.BodyText}>Please login to your account</Text>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="useless placeholder"
                inlineImageLeft='IconMail'
            />
            <TextInput style={styles.inputStyle} placeholder="useless dddd"/>
            

            <TouchableOpacity onPress={onPress}>
                <LoginButton/>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:15,
        alignContent:'center',
        backgroundColor:'#131B63'
    },
    HeaderText:{
        marginTop:10,
        fontSize:73,
        fontFamily:'Roboto-Light',
        color:'white'
    },
    BodyText:{
        marginTop:10,
        fontSize:18,
       fontFamily:'Roboto-Light',
        color:'white'
    },
    inputStyle:{
        height: 50,
        marginTop: 12,
        borderWidth: 1,
        paddingLeft:30,
        borderRadius:50,
        borderColor:'#695D91',
        fontSize:16,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#695D91'
    }
});