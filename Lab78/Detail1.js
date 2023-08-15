import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable } from 'react-native'
import React from 'react'
import Thongtin from './Thongtin'

const Detail1 = (props) => {
  const { navigation } = props
  return (
    <View style={styles.body}>
      <View style={styles.bodycon}>
        <View style={styles.contaitong}>
          <View style={styles.contaiinput}>
            <TextInput style={styles.txtinput} />
            <Image style={styles.imgfind} source={require('../media1/find.png')} />
            <Text style={styles.txtfind}>Fried Rice</Text>
          </View>
          <View>
            <Image style={styles.img} source={require('../media1/filter.png')} />
          </View>
        </View>
      </View>
      <View style={styles.scr}>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false} >
          <View style={styles.itemcon1}>
            <Text style={styles.itemcon}>Meal</Text>
          </View>
          <View style={styles.itemcon1}>
            <Text style={styles.itemcon}>Vergan</Text>
          </View>
          <View style={styles.itemcon1}>
            <Text style={styles.itemcon}>Sugar</Text>
          </View>
          <View style={styles.itemcon1}>
            <Text style={styles.itemcon}>100Cal</Text>
          </View>
          <View style={styles.itemcon1}>
            <Text style={styles.itemcon}>Popular</Text>
          </View>
          <View style={styles.itemcon1}>
            <Text style={styles.itemcon}>200Cal</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.container}>
        <ScrollView style={styles.scrview} horizontal={false} showsVerticalScrollIndicator={false}>
          <View style={styles.contaiItem}> 
            <Pressable  onPress={() => navigation.navigate('Thongtin')} >
              <View style={{ width: '100%', height: 280, borderRadius: 20, borderWidth: 1, backgroundColor: 'white', borderColor: 'white' }}>
                <Image style={styles.img1} source={require('../media1/menu.png')} />
                <View style={styles.contaitext}>
                  <View style={styles.contaitext1}>
                    <Text style={styles.txtSuhani}>Suhani Restaurant</Text>
                    <Text style={{ fontWeight: 'bold' }}>Chinesi, Nort india</Text>
                  </View>
                  <View style={styles.contaidanhgia}>
                    <Text style={styles.sogia}>4.5</Text>
                    <Image source={require('../media1/sao.png')} />
                  </View>
                </View>
                <View style={styles.contaigia}>
                  <View style={{ flexDirection: 'row' ,alignItems:'center'}}>
                    <Text>200</Text>
                    <Text style={styles.gia}>$100</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../media1/lua.png')} />
                    <Text style={{ marginLeft: 2 }}>145 cal</Text>
                  </View>
                </View>
                <View style={styles.gachngang}></View>
                <Text style={styles.txtcuoi}>Left over food and supplies are gathered and sold for 50% off!</Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
        <View>
          <Image style={styles.imgbottom} source={require('../media1/bottom.png')} />
        </View>
      </View>
    </View>

  )
}

export default Detail1

const styles = StyleSheet.create({
  imgbottom: {
    position: 'absolute',
    width: '100%',
    height: 100,
    backgroundColor: 'blue'

  },
  scrview: {
    width: '100%',
    height: 700,
  },

  contaiItem: {
    padding: 30,
  },
  pressItem:{
    marginTop:20,
  },
  vote1: {
    top: 210,
    position: 'absolute',
    width: 70,
    height: 30,
    fontSize: 20,
    borderRadius: 10,
    textAlign: 'center',
    left: 230
  },

  vote: {
    top: 170,
    position: 'absolute',
    backgroundColor: "green",
    width: 70,
    height: 30,
    color: 'white',
    fontSize: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    left: 230
  },

  contaitong: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  contaiinput: {
    marginTop: 40,
    width: '80%',
    height: 49,
    justifyContent: 'center',
  },
  contaitext: {
    marginLeft: 20,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '88%',
    alignItems: 'center'
  },
  contaitext1: {
    flexDirection: 'column'
  },

  txtSuhani: {
    fontSize: 19,
    fontWeight: 700,
    fontStyle: 'normal',
    color: '#333333',
  },

  contaidanhgia: {
    width: 54,
    height: 24,
    borderRadius: 20,
    backgroundColor: '#509807',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  sogia: {
    fontSize: 14,
    fontWeight: 700,
    fontStyle: 'normal',
    color: '#FFFFFF',
    marginRight: 5,
  },
  contaigia: {
    width: '83%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
  },
  gia:{
    fontSize: 18,
    fontWeight: 500,
    fontStyle: 'normal',
    letterSpacing: 0.12,
    color: '#F88922',
    paddingLeft:3,
  },
  gachngang: {
    marginTop: 7,
    width: '83%',
    height: 0,
    borderWidth: 1,
    borderColor: '#EDEDED',
    marginLeft: 20,
  },
  txtcuoi: {
    width: '85%',
    marginLeft: 20,
  },
  img1: {
    width: '100%',
    height: 141,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    width: '100%',
    flex: 0,
    borderRadius: 20,
    backgroundColor: '#FCF4F4',
    marginTop: 20
  },
  itemcon: {
    fontSize: 16,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: 'white'
  },
  itemcon1: {
    width: 79,
    height: 32,
    borderWidth: 0.8,
    borderRadius: 15,
    justifyContent: 'center',
    borderColor: 'white',
    alignItems: 'center',
    marginLeft: 7,
  },
  imgfind: {
    position: 'absolute',
    marginLeft: 20,
  },
  txtfind: {
    fontSize: 16,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4F4F4F',
    position: 'absolute',
    marginLeft: 60,
  },
  scr: {
    width: '100%',
    marginTop: 25,
    marginLeft: 7,
  },
  img: {
    marginTop: 40,
    marginLeft: 10,
  },
  txtinput: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bodycon: {
    width: '100%',
    flexDirection: 'row',

  },
  body: {
    width: '100%',
    height: '30%',
    backgroundColor: '#E34234',
  }
})