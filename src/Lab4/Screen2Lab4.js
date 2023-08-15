import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Screen2Lab4 = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 40, height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginLeft: 13 }}>
          <Image style={styles.imgBack} source={require('../../media/iconback.png')} />
        </View>
        <Text style={styles.txtHeader}>My Orders</Text>
        <Image source={require('../../media/imgDaiDien-removebg-preview.png')} />
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 32 }}>
        <View style={styles.nav}>
          <View style={styles.navChild} >
            <Text style={styles.txtNav1}>Upcoming</Text>
          </View>
          <View style={{ width: 160 }}>
            <Text style={styles.txtNav2}>History</Text>
          </View>
        </View>

      </View>
      <ScrollView>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={styles.item1}>
            <Image style={styles.item1ImgSB} source={require('../../media/imgStarbuck.png')} />
            <View style={styles.item1View1}>
              <Text style={styles.item1View1txt1} >3 Items</Text>
              <Text style={styles.item1View1txt2} >Starbuck</Text>
            </View>
            <Text style={styles.txtID}>#264100</Text>
            <View style={styles.item1View2}>
              <Text style={{ fontSize: 10 }}>Estimated Arrival</Text>
              <View style={{ flexDirection: 'row', height: 20 }}>
                <Text style={[styles.item1View2txt2, { marginRight: 10, }]}>25</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: '#000000' }}>min</Text>
              </View>
            </View>
            <View style={styles.item1View3}>
              <Text style={{ marginLeft: 70 }}>Now</Text>
              <Text style={styles.food}>Food on the way</Text>
            </View>
            <Pressable style={styles.btnCancel}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.btnTrack}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>Track oder</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.Lasted}>Lasted Odders</Text>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={styles.item2}>
            <View style={styles.ViewImgJimy}>
              <Image style={styles.imgJimy} source={require('../../media/imgJimy.png')} />
            </View>
            <Text style={styles.txt20}>
              20 Jun, 10:30 * 3 Items
            </Text>
            <Text style={styles.txt17}>$17.10 </Text>
            <Text style={styles.txtJimy}>Jimmy John’s </Text>
            <View style={{ width: 7, height: 7, backgroundColor: 'green', borderRadius: 3.5, top: 74, left: 100 }}></View>
            <Text style={styles.txtOder}>Order Delivered</Text>
            <Pressable style={styles.btnCancel}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>Rate</Text>
            </Pressable>
            <Pressable style={styles.btnTrack}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>Re-oder</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
        <View style={styles.item2}>
            <View style={styles.ViewImgJimy}>
              <Image style={styles.imgJimy} source={require('../../media/imgitem3.png')} />
            </View>
            <Text style={styles.txt20}>
            19 Jun, 11:50
            </Text>
            <Text style={styles.txt17}>$20.50</Text>
            <Text style={styles.txtJimy}>Subway </Text>
            <View style={{ width: 7, height: 7, backgroundColor: 'green', borderRadius: 3.5, top: 74, left: 100 }}></View>
            <Text style={styles.txtOder}>Order Delivered</Text>
            <Pressable style={styles.btnCancel}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>Rate</Text>
            </Pressable>
            <Pressable style={styles.btnTrack}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>Re-oder</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Screen2Lab4

const styles = StyleSheet.create({
  txtOder: {
    position: 'absolute',
    right: 121,
    top: 74,
    color: 'green',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
  },
  txtJimy: {
    position: 'absolute',
    left: 100,
    top: 47,
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,

  },
  txt17: {
    position: 'absolute',
    right: 19,
    top: 25,
    color: '#FE724C',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
  },
  txt20: {
    position: 'absolute',
    left: 100,
    top: 25,
    color: '#9e9da7',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,

  },
  ViewImgJimy: {
    top: 25,
    left: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    position: 'absolute',
    width: 65,
    height: 65,
    borderRadius: 10,
    borderWidth: 0.3,
  },

  Lasted: {
    marginTop: 32,
    marginLeft: 19,
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,
  },
  item2: {
    position: 'relative',
    marginTop: 32,
    width: 325,
    height: 170,
    borderWidth: 1,
    borderRadius: 25,
  },
  btnTrack: {
    backgroundColor: '#Fe724c',
    flexDirection: 'row',
    position: 'absolute',
    width: 135,
    height: 43,
    right: 18,
    bottom: 18,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderRadius: 25,
  },
  btnCancel: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    position: 'absolute',
    width: 135,
    height: 43,
    left: 18,
    bottom: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
  },
  food: {
    width: 110,
    height: 24,
    fontWeight: '600',
    color: '#000000',
    fontSize: 14,
    lineHeight: 16,
  },
  item1View3: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    width: 110,
    height: 52,
    right: 18,
    top: 104,
  },
  item1View2txt2: {
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 16,
  },
  item1View2: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    width: 110,
    height: 52,
    // borderWidth: 1,
    top: 104,
    left: 18,
  },
  txtID: {
    position: 'absolute',
    right: 19,
    top: 23,
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,
  },
  item1View1txt2: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,
    color: '#000000'
  },
  item1View1txt1: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#9796A1'
  },
  item1View1: {
    flexDirection: 'column',
    justifyContent: 'space-between',

    position: 'absolute',
    top: 39,
    left: 101,
    width: 80,
    height: 38,
    // borderWidth: 1,
  },
  item1ImgSB: {
    top: 18,
    left: 18,
    position: 'absolute'
  },
  item1: {
    position: 'relative',
    marginTop: 32,
    width: 325,
    height: 238,
    borderWidth: 1,
    borderRadius: 25,

  },
  txtNav1: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 14,
    color: '#fefefe'
  },
  txtNav2: {
    textAlign: 'center',
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 14,
    color: '#fe724c'
  },
  navChild: {
    backgroundColor: '#fe724c',
    width: 160,
    height: 47,
    borderWidth: 1,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    width: 323,
    height: 55,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#F2EAEA'
  },
  txtHeader: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    color: '#000000'
  },
  imgBack: {
    width: 25,
    height: 25
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 16
  }
})