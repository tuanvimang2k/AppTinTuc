import { StyleSheet, Text, View,Pressable, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React from 'react'

const Screen4_1 = () => {
  return (
    <View style={styles.container}>
      
    <View style={{position:'relative',}}>
        <Pressable style={styles.buttonback}>
        <Image 
        style={styles.back}
        source={require('../media/Lab4/back.png')}/>
        </Pressable>
        <Text style={styles.Title}> Cart</Text>
       
      
    </View>
    <View style={styles.container_food1}>
    <Image 
        style={styles.food1}
        source={require('../media/Lab4/food1.png')}/>
        <View style={styles.titlefood1}>
        <Text style={{fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:700,fontSize:18,lineHeight:18,color:'#000000'}}>
          Red n hot pizza
        </Text>
        <Text style={{fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:300,fontSize:14,lineHeight:14,color:'#8C8A9D'}}>
        Spicy chicken, beef
        </Text>
        <Text style={{fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:700,fontSize:16,lineHeight:16,color:'#FE724C'}}>
        $15.30
        </Text>
        </View>
        <View style={styles.food1choose}>
       
        <Text style={{textAlign:'right',fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:600,width:100,height:16,fontSize:16,lineHeight:16,color:'#FF3600'}}>x</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
          <Text style={styles.btnSize}>
            -
          </Text>
          <Text style={{ margin:10,fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:700,fontSize:17,lineHeight:17,color:'#000000'}}>
            02
            </Text>
            <Text style={styles.btnSize2}>
            +
          </Text>
        </View>
        </View>
    </View>
    <View style={styles.container_food1}>
    <Image 
        style={styles.food1}
        source={require('../media/Lab4/food2.png')}/>
        <View style={styles.titlefood1}>
        <Text style={{fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:700,fontSize:18,lineHeight:18,color:'#000000'}}>
          Greek salad
        </Text>
        <Text style={{fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:300,fontSize:14,lineHeight:14,color:'#8C8A9D'}}>
        with baked salmon
        </Text>
        <Text style={{fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:700,fontSize:16,lineHeight:16,color:'#FE724C'}}>
        $12.00
        </Text>
        </View>
        <View style={styles.food1choose}>
       
        <Text style={{textAlign:'right',fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:600,width:100,height:16,fontSize:16,lineHeight:16,color:'#FF3600'}}>x</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
          <Text style={styles.btnSize}>
            -
          </Text>
          <Text style={{ margin:10,fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:700,fontSize:17,lineHeight:17,color:'#000000'}}>
            02
            </Text>
            <Text style={styles.btnSize2}>
            +
          </Text>
        </View>
        </View>
    </View>

    <View style={styles.container_food2}>
      <Text style={{marginTop:25,marginLeft:5,fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:300,fontSize:14,lineHeight:14,color:'#BEBEBE'}}>
      Promo Code
      </Text>
      <Pressable style={{marginLeft:50,marginTop:8,backgroundColor:'#FE724C',borderRadius:29,width:97,height:45}}>
      <Text style={{marginTop:15,marginLeft:25,fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:500,fontSize:16,lineHeight:18,color:'#FFFFFF'}}>
      Apply
      </Text>
      </Pressable>
    </View>

    <View style={styles.decrip}>

    <View style={styles.decrip2}>

      <Text style={styles.menu}>
        Subtotal
      </Text>
      <View style={{flexDirection:'row', marginLeft:150}}>
        <Text style={styles.money}>$27.30</Text>
        <Text style={styles.usd}>USD</Text>
      </View>
    
    
    </View>
    <View style={styles.decrip2}>

<Text style={styles.menu}>
Tax and Fees
</Text>
<View style={{flexDirection:'row', marginLeft:160,width:90}}>
  <Text style={styles.money}>$5.30</Text>
  <Text style={styles.usd}>USD</Text>
</View>


</View>
<View style={styles.decrip2}>

<Text style={styles.menu}>
  Delivery
</Text>
<View style={{flexDirection:'row', marginLeft:150}}>
  <Text style={styles.money}>$1.00</Text>
  <Text style={styles.usd}>USD</Text>
</View>


</View>
<View style={styles.decrip2}>

<Text style={styles.menu}>
  Total
</Text>
<View style={{flexDirection:'row', marginLeft:150}}>
  <Text style={styles.money}>$27.30</Text>
  <Text style={styles.usd}>USD</Text>
</View>


</View>
    
    </View>
    
    <Pressable style={{marginLeft:50,marginTop:108,backgroundColor:'#FE724C',borderRadius:29,width:250,height:60}}>
      <Text style={{marginTop:20,textAlign:'center',fontFamily:'SofiaSansSemiCondensed-SemiBold',fontWeight:700,fontSize:16,lineHeight:18,color:'#FFFFFF'}}>
      Checkout
      </Text>
      </Pressable>
      
    </View>
  )
}

export default Screen4_1

const styles = StyleSheet.create({
  menu:{
    justifyContent:'flex-start',
    fontFamily:'SofiaSansSemiCondensed-SemiBold',
    fontWeight:'bold',
    
    fontSize:16,
    lineHeight:16,
    color:'#000000',
    width:100,
    textAlign:'left'
   
    
  },
  decrip2:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    borderBottomWidth:1,
    borderBottomColor:'#F1F2F3',
    paddingBottom:10,
    margin:10

  },
  usd:{
    fontFamily:'SofiaSansSemiCondensed-SemiBold',
    fontWeight:500,
    fontSize:14,
    lineHeight:14,
    color:'#9796A1',
    margin:4,


  },
  money:{
    fontFamily:'SofiaSansSemiCondensed-SemiBold',
    fontWeight:700,
    fontSize:19,
    lineHeight:19,
    color:'#000000'

  },
  decrip:{
    flexDirection:'column',
    justifyContent:'space-between',
    marginTop:30,
    marginLeft:10,
    
  },
  container_food2:{
      flexDirection:'row',
      justifyContent:'space-around',
      width:340,
      height:63,
     
      margin:10,
      borderColor:'#EEEEEE',
      borderRadius:100,
      borderWidth:1,

      
  },
  btnSize2:{
    width:29,
    height:29,
    borderRadius:14,
    borderColor:'#FE724C',
    backgroundColor:'#FE724C',
    borderWidth:1.1,
    color:'#FFFFFF',
    textAlign:'center',
    fontSize:24,
    lineHeight:29,
  },
  btnSize:{
    width:29,
    height:29,
    borderRadius:14,
    borderColor:'#FE724C',
    borderWidth:1.1,
    color:'#FE724C',
    textAlign:'center',
    fontSize:30,
    lineHeight:30,
  },
  food1choose:{
    flexDirection:'column',
    justifyContent:'space-between',

  },
  titlefood1:{
      flexDirection:'column',
      justifyContent:'space-evenly'

  },
  food1:{
    height:100,
    width:100,
  },
  container_food1:{
    height:85,
    width:340,
    
    margin:10,
    flexDirection:'row',
    justifyContent:'space-between',

    
  },

  Title:{
  fontSize:18,
  fontWeight:700,
  lineHeight: 18,
  position:'absolute',
  top:10,
  left:160,
  color:'#111719',
  fontFamily:'SofiaSansSemiCondensed-SemiBold'
  
  },
    back:{
        width:7,
        height:11,
        position:'absolute',
        top:12,
        left:10,
    },
    buttonback:{
        width:38,
        height:38,
        position:'relative',
        


    },
    container: {

       
        width: '100%',
        height: '100%',
        padding:15,
        backgroundColor:'#FCF4F4'

    
      }
})