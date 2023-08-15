import { View, Text, StyleSheet, TextInput, Image, input, Pressable,Alert } from 'react-native'
import React, { useState } from 'react'

import { Sigin } from './userSevice'


const Sign = (props) => {
  const { navigation } = props
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSignup = async () => {
    // kieem tra email, pass, confirm
    // const regexEmail = /^[a,z]{3,}ps[0,9]{5}@fpt.edu.vn/;
      // const regexPass = /^(?=.*[a-z])(?=/*[A-Z])(?=.*[0-9])(?=.*[@#!$&%^]).{8,}$/;
    if(email.trim().length === 0){
      Alert.alert("Không để trống email")
      return;
    }
    if(password.trim().length === 0){
      Alert.alert("Không để trống password")
      return;

    }
    if(confirmPassword.trim().length === 0){
      Alert.alert("Không để trống confirmPassword")
      return;

    }
    if(password !== confirmPassword){
      Alert.alert("Nhập lại mật khẩu không trùng")
      return;

    }
    // gọi api đăng kí
    const resurlt =  await Sigin(email, password);
    console.log('register: ',resurlt)
    if(resurlt.statusCode == 200){
      navigation.goBack();

    }else{
      Alert.alert('Không thành công')
    }
  }
  return (
    <View style={myStyles.body}>
      <Text style={myStyles.hello}>Hello</Text>
      <Text style={myStyles.again}>Again</Text>
      <Text style={myStyles.welcome}>Signup to get Started</Text>
      <View style={myStyles.username} >
        <Text style={myStyles.label}>Email*</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder='Enter your email'
          style={myStyles.input} />
      </View>
      <View style={myStyles.password} >
        <Text style={myStyles.label}>Password*</Text>
        <View style={myStyles.inputContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder='Enter your password'
            secureTextEntry={!isShowPassword}
            style={myStyles.input} />
          <Text onPress={() => setIsShowPassword(!isShowPassword)} style={myStyles.vectorIcon}>{isShowPassword ? '🙈' : '👁'}</Text>
        </View>
        <Text style={myStyles.label}>ConfirmPassword*</Text>
        <View style={myStyles.inputContainer}>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder='Enter your confirm password'
            secureTextEntry={true}
            style={myStyles.input} />
        </View>
      </View>
      <View style={myStyles.checkContainer}>
        <View style={myStyles.rememberContainer}>
          <Text style={myStyles.remember}>Remember me</Text>

        </View>
      </View>

      <Pressable onPressIn={onSignup} style={myStyles.pressable}>
        <Text style={myStyles.textPs}>Sign</Text>
      </Pressable>
      <Text style={myStyles.text}>or continue with</Text>
      <View style={myStyles.loginContainer}>
        <Pressable style={myStyles.loginfb}>
          <Image style={myStyles.face} source={require('../../../media/face.png')}></Image>
          <Text style={myStyles.logText}>Facebook</Text>
        </Pressable>
        <Pressable style={myStyles.logingg}>
          <Image style={myStyles.gg} source={require('../../../media/gg.png')}></Image>
          <Text style={myStyles.logText}>Google</Text>
        </Pressable>
      </View>
      <Text style={myStyles.text}>Already have an account ? <Text onPress={() => navigation.navigate("Login")} style={myStyles.txtlogin}>Login</Text> </Text>
    </View>
  )
}

export default Sign
const myStyles = StyleSheet.create({
  txtlogin: {
    color: 'red',
  },
  logText: {
    width: 81,
    height: 24,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#667080',
  },
  loginfb: {
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 16,
    backgroundColor: '#EEF1F4',
    width: 160,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    justifyContent: 'space-evenly'
  },
  logingg: {
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 16,
    backgroundColor: '#EEF1F4',
    width: 160,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    justifyContent: 'space-evenly'
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    height: 48,
    padding: 0,

  },
  text: {
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: '#4E4B66'
  },


  pressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    height: 50,
    width: '100%',
    backgroundColor: '#1877F2',
    borderRadius: 6,
  },
  textPs: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#FFFFFF',
    height: 24,
  },
  remember: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66'
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    // margin:4,
    width: '100%',
    height: 24,
    justifyContent: 'space-between',
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 9.5,
    // margin:4,
    width: '100%',
    height: 24,
    width: '100%'
  },
  vectorIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
    width: 24,
    height: 24,
  },
  inputContainer: {
    position: 'relative',
  },
  password: {

  },
  username: {
    width: '100%',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    Color: '#4E4B66'
  },
  input: {
    width: '100%',
    height: 48,
    marginTop: 4,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#4E4B66',
    backgroundColor: '#fff',
  },
  label: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
    paddingTop: 10,
  },
  hello: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 48,
    lineHeight: 72,
    letterSpacing: 0.12,
    color: '#050505'
  },
  again: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 48,
    lineHeight: 72,
    letterSpacing: 0.12,
    color: '#1877F2'
  },
  welcome: {
    width: 222,
    marginTop: 4,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.12,
    color: '#4E4B66',
    marginBottom: 50,
  },
  body: {
    width: '100%',
    // flex: 1,
    height: '100%',
    padding: 24,
  },

})