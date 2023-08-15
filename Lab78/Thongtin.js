import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Lab7_2 = () => {
  return (
    <View style={styles.body}>
      <Image source={require('../media1/anhhe.png')} style={styles.imgheader} />
      <View style={styles.container}>
        <View>
          <View style={styles.btninfo}>
            <Text style={styles.fr}>Fried Rice</Text>
            <Text style={styles.pi}>Pista House, Kukatpally</Text>
          </View>
          <Image style={styles.imgtim} source={require('../media1/tim.png')} />
        </View>
        <View style={styles.center}>
          <View style={styles.center_1}>
            <Text style={styles.de}>Description</Text>
            <Text style={styles.our}>Our fried rice is made from the finest ingredients and veggies. single dish is made with fresh vegetables, rescued.</Text>
            <View style={styles.center_2}>
              <Text style={styles.text}>Rescued</Text>
              <Text style={styles.text}>Vegan </Text>
              <Text style={styles.text}>30 min</Text>
            </View>
          </View>

          <View style={styles.center_1}>
            <Text style={styles.nu2}>Nutritional Value</Text>
            <View style={styles.gam}>
              <View >
                <Text style={styles.our}>Protein</Text>
                <Text style={styles.our}>Carbohydrates</Text>
                <Text style={styles.our}>Sodium</Text>
                <Text style={styles.our}>Potassium</Text>
                <Text style={styles.our}>Rich in Vitamin A, C and B3</Text>
              </View>
              <View>
                <Text style={styles.our}>10g</Text>
                <Text style={styles.our}>20g</Text>
                <Text style={styles.our}>700mg</Text>
                <Text style={styles.our}>500mg</Text>
              </View>
            </View>
            <View style={styles.center_3}>
              <Text style={styles.our}>
                145 cal
              </Text>
              <Text style={styles.our}>*Daily value</Text>
            </View>
          </View>
        </View>
        <View style={styles.ketieo}>
          <Text style={styles.inte}>Ingredients</Text>
          <View>
            <Image source={require('../media1/anh1.png')} />
          </View>
        </View>

        <View style={styles.to}>
          <View style={styles.select}>
            <Text style={{color:'#5E5959',fontSize:17,fontWeight:500,}}>Select User  -</Text>
            <Text>User 1</Text>
            <Image source={require('../media1/down.png')} />
          </View>
          <Text>Edit</Text>
        </View>
        <Text style={{color:'#5E5959',fontSize:17,fontWeight:500,marginTop:10,marginLeft:20,}}>Additions</Text>
        <View style= {styles.viewbao}>
          <Text style={{color:'#5E5959',fontSize:10,fontWeight:400,marginLeft:20,}}>Paneer</Text>
          <Image style={{marginRight:20,}} source={require('../media1/xuongne.png')}></Image>
        </View>
        <View style={styles.btn}>
          <Text style={styles.textbtn}>₹100</Text>
          <Pressable style={styles.Pressable}>
            <Text style={styles.textbtn}>-    1    +</Text>
          </Pressable>
          <Image source={require('../media1/buy.png')} />
        </View>
      </View>
    </View>
  )
}

export default Lab7_2

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,

  },
  imgheader: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    position: 'relative',
  },
  btninfo: {
    paddingLeft:20,
    width:171,
    position: 'absolute',
    top: -20,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 32,
    height: 50,
    elevation: 5,
  },
  imgtim: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: -15,
    right: 20,
  },
  fr: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pi: {
    fontSize: 12,
    color: 'gray',
  },
  container: {
    borderRadius: 10,
    position: 'relative',
  },
  center_1: {
    top: 50,
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    // position: 'absolute',
    left: 1,
  },
  center_2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    // elevation: 5,
    width: '90%',
    padding: 10,
  },
  de: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  our: {
    fontSize: 9,
    color: 'gray',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 10,
    color: 'gray',
    padding: 0,
  },
  gam: {
    flexDirection: 'row',
  },
  nu2: {
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  center_3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderTopWidth: 1,
  },
  ketieo: {
    justifyContent: 'space-between',
    marginTop: 60,
    marginLeft:20,
    borderColor: 'gray',
    width: '100%',
    borderRadius: 10,

  },
  inte: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    marginLeft: 20,
    backgroundColor:'#A9A9A9',
    borderRadius:20,
  },
  to: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
    
  },
  viewbao:{
    marginLeft:20,
    marginTop:5,
    width:'85%',
    height:29,
    borderRadius:20,
    borderWidth:0.5,
    borderColor:'#FF785B',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // margin: 20,
    marginTop: 10,
    backgroundColor: '#F8774A',
    borderRadius: 20,
    padding: 10,
  },

  Pressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
   
    backgroundColor: '#F8774A',
    // backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    padding: 5,
    borderColor: 'white',
    borderWidth: 1,
  },
  textbtn: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },


})