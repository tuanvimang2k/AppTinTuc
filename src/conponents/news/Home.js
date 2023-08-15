import { StyleSheet, Text, View, FlatList, Pressable, Image, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getNews } from './NewService'
const Home = (props) => {
  const { navigation } = props;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const onGetNews = async () => {
    setLoading(true);
    const news = await getNews();
    setNews(news);
    setLoading(false);
  }
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate('Detail', { id: item._id })}>
        <View style={styles.container2_1} >
          <View style={{ width: '25%' }} >
            <Image style={styles.imgitem} source={{ uri: item.image }} />
          </View>
          <View style={[styles.info2, { width: '75%', }]}>
            <Text style={styles.address2}>Europe</Text>
            <Text style={styles.titleif2}>{item.title} </Text>
            <View style={styles.timename2}>
              <View style={styles.timename2}>
                <Image source={require('../../../media/NewsAuthor.png')} />
                <Text style={styles.name2}>BBC News</Text>
                <Image source={require('../../../media/time.png')} />
                <Text style={styles.time2}>4h ago</Text>
              </View>
              <View>
                <Image source={require('../../../media/3cham.png')} />
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    )
  }

  useEffect(() => {
    console.log('27 useEffect running');
    onGetNews();
  }, []);
  return (
    <View style={styles.body}>
      <View style={styles.title}>
        <Image source={require('../../../media/title.png')} />
        <Image source={require('../../../media/chuong.png')} />
      </View>
      <View style={styles.trendall}>
        <Text style={styles.trend}>Trending</Text>
        <Text style={styles.see}>See all</Text>
      </View>
      {loading ? <Text>Loading...</Text> :
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={onGetNews}
            />
          }

        />}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  imgitem: {
    borderRadius: 8,
    width: 96,
    height: 96,
  },

  body: {
    padding: 10,
    width: '100%',
    height: '100%',
    color: 'black',
    position: 'relative'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 12,
    paddingRight: 12
  },
  trendall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,

  },
  trend: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
    letterSpacing: 0.12,

  },
  see: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    color: "#4E4B66",
    letterSpacing: 0.12,
  },
  container1: {
    marginTop: 8,
    // borderColor: 'black',
    // borderWidth:1,
    padding: 8
  },
  img1: {
    width: '100%',
    padding: 8
  },
  timename: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderColor: 'black',
    // borderWidth: 1,
    marginLeft: 0
  },
  time: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 20,
    color: "#4E4B66",
    marginRight: 12,
    marginLeft: 4
  },
  name: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 13,
    lineHeight: 20,
    color: "#4E4B66",
    marginRight: 12,
    marginLeft: 4

  },
  address: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 20,
    color: "#4E4B66"
  },
  titleif: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#000000"
  },
  container2: {
    marginTop: 16
  },
  scroll: {
    width: '100%',
    marginTop: 16,
  },
  textScroll: {
    color: 'black',
    marginRight: 10
  },
  container2_1: {
    // backgroundColor: 'red',
    width: '100%',
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info2: {
    flexDirection: 'column',
    margin: 4,
  },
  timename2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderColor: 'black',
    // borderWidth: 1,
    marginLeft: 0
  },
  time2: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 20,
    color: "#4E4B66",
    marginRight: 12,
    marginLeft: 4
  },
  name2: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 13,
    lineHeight: 20,
    color: "#4E4B66",
    marginRight: 12,
    marginLeft: 4,

  },
  address2: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 20,
    color: "#4E4B66",
    width: '60%',


  },
  titleif2: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",


  },
  end: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: 78,
    // position: 'absolute',
    bottom: 0,
    // justifyContent: 'space-between',
    // backgroundColor: '#FFFFFF'
  },
  end2: {

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textend: {
    color: 'black',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    color: "#4E4B66",
  },
  end3: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'black',
    // borderWidth: 1
  }
})



