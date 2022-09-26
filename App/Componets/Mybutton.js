import * as React from 'react';
import {
    Text, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const onBtnPress = ()=>{
    alert('asdf')
}

export const PrimaryButton = ({customeStyle={}})=>{
    return (
        <TouchableOpacity onPress={onBtnPress} style={[style.btnPrimary, customeStyle]}>
            <Text style={{ color:'white'}}>LOGIN</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    btnPrimary:{
        borderRadius:40,
        marginTop:10,
        padding:15,
        alignItems:'center',
        backgroundColor:'#A03E82'
    }
})