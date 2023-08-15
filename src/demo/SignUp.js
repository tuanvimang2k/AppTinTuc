import {
  View, Text, StyleSheet, TextInput, Image, Pressable
} from 'react-native'
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPass, setIsShowPass] = useState(false)
  return (
    <View style={myStyles.body}>
      <View style={myStyles.helloAgain}>
        <Text style={[myStyles.txt, { color: '#1877f2' }]}>Hello</Text>
      </View>
      <Text style={myStyles.welcome}>Signup to get Started</Text>
      <View style={myStyles.username}>
        <Text style={myStyles.usernameLabel} >Username*</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={myStyles.useInput}
          placeholder='Enter your username' />
      </View>
      <View style={myStyles.pass}>
        <Text style={myStyles.usernameLabel} >Password*</Text>
        <View style={myStyles.inputContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={myStyles.useInput}
            secureTextEntry={!isShowPass}
            placeholder='Enter your password' />
          {/* <Image style={myStyles.eyeicon} source={require('../../media/eyeIcon.png')} /> */}
          <Text style={myStyles.eyeicon} onPress={() => setIsShowPass(!isShowPass)}>
            {isShowPass ? 'Hide' : 'Show'}
          </Text>
        </View>
      </View>
      <View style={myStyles.saveFogotPass}>
        <View style={myStyles.savePass}>
          <Text style={myStyles.rememberPass}>Remember me</Text>
        </View>
      </View>
      <Pressable style={myStyles.btnLogin}>
        <Text style={myStyles.txtLogin}>Register</Text>
      </Pressable>
      <View style={{ alignItems: 'center' }}>
        <Text style={myStyles.txtLuachon}>or continue with</Text>
      </View>
      <View style={myStyles.faceGG}>
        <Pressable style={myStyles.facebook}>
          <Image style={myStyles.iconFacebook} source={require('../../media/iconFacebook.png')}></Image>
          <Text style={myStyles.txtFacebook}>Facebook</Text>
        </Pressable>
        <Pressable style={myStyles.facebook}>
          <Image style={myStyles.iconFacebook} source={require('../../media/IconGoogle.png')}></Image>
          <Text style={myStyles.txtFacebook}>Google</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login
const myStyles = StyleSheet.create({
  txtSignUp: {
    color: '#1877F2',
    fontWeight: '600',

  },
  txtFacebook: {
    width: 81,
    height: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#667080'
  },
  iconFacebook: {
    marginRight: 10,
    width: 24,
    height: 24
  },
  facebook: {
    backgroundColor: '#eef1f4',
    width: 174,
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingRight: 24,
    paddingLeft: 16,
    borderRadius: 6
  },
  faceGG: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 48
  },
  txtLuachon: {
    marginTop: 15,
    width: 114,
    height: 21,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4e4b66'

  },
  txtLogin: {
    width: 64,
    height: 24,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: 'white'
  },
  btnLogin: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 24,
    width: '100%',
    backgroundColor: '#1877f2',
    height: 50,
    borderRadius: 6
  },

  rememberPass: {
    width: 107,
    height: 21,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4e4b66'

  },
  savePass: {
    marginTop: 8
  },
  saveFogotPass: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  eyeicon: {
    position: 'absolute',
    right: 10,
    top: 19,
    width: 50,
    height: 24

  },
  inputContainer: {
    position: 'relative'
  },
  pass: {
    marginTop: 16
  },
  useInput: {
    width: '100%',
    height: 48,
    marginTop: 8,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4e4b66',
    backgroundColor: '#f5f5f5',

  },
  usernameLabel: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4e4B66'
  },
  username: {
    marginTop: 65,

  },
  welcome: {
    width: 222,
    marginTop: 4,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.12,
    color: '#4E4B66'
  },
  txt: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 48,
    lineHeight: 72,
    letterSpacing: 0.12,
  },
  helloAgain: {
    width: 143,
    height: 72,
  },
  body: {
    width: '100%',
    height: '100%',
    padding: 16

  }
})