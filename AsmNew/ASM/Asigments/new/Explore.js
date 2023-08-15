import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

const Explore = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.txtEx}>Explore</Text>
      <View style={styles.lates}>
        <Text style={styles.text}>Topic</Text>
        <Text>See all</Text>
      </View>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../media/Hea.png')} />
        <View style={styles.content}>
          <Text style={styles.textTitle}>Health</Text>
          <Text style={styles.textDoc}>Get energizing workout moves, healthy recipes...</Text>
        </View>
        <Pressable style={styles.presSave}>
          <Text style={styles.txtSaveTrang}>Save</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../media/Tec.png')} />
        <View style={styles.content}>
          <Text style={styles.textTitle}>Health</Text>
          <Text style={styles.textDocXanh}>Get energizing workout moves, healthy recipes...</Text>
        </View>
        <Pressable style={styles.presSaveXanh}>
          <Text style={styles.txtSaveXanh}>Save</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../media/art.png')} />
        <View style={styles.content}>
          <Text style={styles.textTitle}>Health</Text>
          <Text style={styles.textDocXanh}>Get energizing workout moves, healthy recipes...</Text>
        </View>
        <Pressable style={styles.presSaveXanh}>
          <Text style={styles.txtSaveXanh}>Save</Text>
        </Pressable>
      </View>
      <Text style={styles.txtPopu}>Popular Topic</Text>
      <View style={styles.containerduoi}>
        <Image style={styles.imageduoi} source={require('../../../media/tua.png')}></Image>
        <View style={styles.contentduoi}>
          <Text style={styles.textTitleduoi}>Travel</Text>
          <Text style={styles.textDocduoi}>Russian warship: Moskva sinks in Black Sea</Text>
          <View style={styles.containerSumduoi}>
            <View style={styles.containerbrandduoi}>
              <Image style={styles.ellipse} source={require('../../../media/ellipse.png')} />
              <Text style={styles.Bbcduoi}>BBC News</Text>
            </View>
            <View style={styles.containertimeduoi}>
              <Image style={styles.ellipse} source={require('../../../media/hour.png')} />
              <Text>1h ago</Text>
            </View>
          </View>
          <Image style={styles.cham} source={require('../../../media/cham.png')} />
        </View>
      </View>
      <View style={styles.containerduoi}>
        <Image style={styles.imageduoi} source={require('../../../media/dautroc.png')}></Image>
        <View style={styles.contentduoi}>
          <Text style={styles.textTitleduoi}>Travel</Text>
          <Text style={styles.textDocduoi}>Russian warship: Moskva sinks in Black Sea</Text>
          <View style={styles.containerSumduoi}>
            <View style={styles.containerbrandduoi}>
              <Image style={styles.ellipse} source={require('../../../media/ellipse.png')} />
              <Text style={styles.Bbcduoi}>BBC News</Text>
            </View>
            <View style={styles.containertimeduoi}>
              <Image style={styles.ellipse} source={require('../../../media/hour.png')} />
              <Text>1h ago</Text>
            </View>
          </View>
          <Image style={styles.cham} source={require('../../../media/cham.png')} />
        </View>
      </View>
    </View>
  )
}

export default Explore
const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    padding: 24,
    position: 'relative'
  },
  txtEx: {
    fontSize: 32,
    fontWeight: 700,
    fontStyle: 'normal',
    lineHeight: 48,
    letterSpacing: 0.12,
    color: '#000000'
  },
  text: {
    height: 24,
    width: 50,
    fontSize: 16,
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000'
  },
  lates: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    height: 24,
    marginBottom: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    width: '100%',
    justifyContent: 'center',

  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 4,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#000000'
  },
  textDoc: {
    width: 180,
    fontSize: 14,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66'

  },
  presSave: {
    width: 78,
    height: 35,
    backgroundColor: '#EEF1F4',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 20,
    borderColor: '#1877F2'
  },
  presSaveXanh: {
    width: 78,
    height: 35,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textDocXanh: {
    width: 180,
    fontSize: 14,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66'

  },
  txtSaveTrang: {
    fontSize: 16,
    fontWeight: 700,
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#1877F2'
  },
  txtSaveXanh: {
    fontSize: 16,
    fontWeight: 700,
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#FFFFFF'
  },
  txtPopu: {
    fontSize: 16,
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: 0.12,
    color: '#000000'
  },
  containerbrandduoi: {
    flexDirection: 'row',
    marginTop: 4,
    width: 74,
    height: 20,
  },
  Bbcduoi: {
    fontSize: 13,
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#4E4B66'
  },
  containertimeduoi: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    width: 91,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSumduoi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 173,
    height: 20,
  },
  textDocduoi: {
    fontSize: 16,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000'
  },
  textTitleduoi: {
    fontSize: 13,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#4E4B66'
  },
  containerduoi:{
    marginTop:20,
  },
})