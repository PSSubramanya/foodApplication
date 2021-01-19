import React, {useState} from 'react';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';
import foodAPIMockData from '../../constants/foodAPIMockData';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
  ImageBackground,
  Platform,
} from 'react-native';
import {color} from 'react-native-reanimated';

const BETWEEN_GRID_WIDTH = Platform.OS === 'ios' ? 14 : 9;

const LandingPage = ({navigation}) => {
  // const [selectFoodCategory, setSelectFoodCategory] = useState(false);
  const itemdata = foodAPIMockData[0].menu;
  return (
    <>
      <StatusBar
        backgroundColor={colors.transparentBackgroundColor}
        barStyle="light-content"
      />
      <SafeAreaView backgroundColor={colors.transparentBackgroundColor} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.searchBarSection}>
            <View style={styles.searchBox}>
              <Image style={styles.icons2} source={imagePath.searchIcon} />
              <TextInput
                style={{marginLeft: 12, fontSize: 15}}
                placeholder={'Search for food'}
                placeholderTextColor={colors.darkGrey}></TextInput>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FoodDisplayPage');
              }}>
              <View style={styles.bagButton}>
                <View style={styles.orderCountContainer}>
                  <Text
                    style={{
                      color: colors.white,
                      fontWeight: '600',
                      marginLeft: 5,
                      marginTop: 1,
                      fontSize: 12,
                    }}>
                    0
                  </Text>
                </View>
                <Image style={styles.icons} source={imagePath.bagIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <ImageBackground
            style={styles.headerImage}
            imageStyle={{borderRadius: 10}}
            source={imagePath.backgrounImage1}>
            <View style={styles.headerFoodDisplay}>
              <View style={styles.foodInfoSection}>
                <Text style={styles.foodName}>Cheese Burger</Text>
                <View style={styles.timeStampDisplay}>
                  <View style={styles.timeBlock}>
                    <Text style={styles.timeColor}>23</Text>
                  </View>
                  <View style={styles.timeBlock}>
                    <Text style={styles.timeColor}>18</Text>
                  </View>
                  <View style={styles.timeBlock}>
                    <Text style={styles.timeColor}>41</Text>
                  </View>
                  <Text style={{marginTop: 17, marginLeft: 5}}>hrs.</Text>
                </View>
                <TouchableOpacity>
                  <View style={styles.orderButton}>
                    <Text style={{fontSize: 17, marginTop: 9}}>Order Now</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.foodImageSection}>
                <Image
                  source={imagePath.burgerImage}
                  style={styles.imageDisplay}></Image>
                <View style={styles.offerDisplay}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: colors.secondaryGold,
                      // marginLeft: 5,
                      marginTop: 14,
                      textAlign: 'center',
                      fontWeight: '600',
                    }}>
                    SPECIAL <Text style={{color: colors.white}}>OFFER</Text>
                  </Text>
                  {/* <Text>OFFER</Text> */}
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <ScrollView style={{marginTop: 53, height: 100}} horizontal={true}>
          <View style={styles.foodScrollView}>
            <FlatList
              // showsVerticalScrollIndicator={false}
              data={foodAPIMockData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              renderItem={({item, index}) => (
                <View key={index} style={styles.foodType}>
                  <Text style={{fontSize: 16, fontWeight: '600'}}>
                    {foodAPIMockData[index].categoryName}
                  </Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
        <Text style={{fontSize: 30, fontWeight: '500', marginLeft: 23}}>
          Available to you
        </Text>
        {/* Line 1 */}
        <FlatList
          style={{
            marginLeft: 9,
          }}
          data={itemdata}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          numColumns={2}
          renderItem={({item, index}) => (
            <View
              style={
                index % 2 === 0
                  ? [styles.gridViewBg1, {backgroundColor: colors.white}]
                  : [styles.gridViewBg1, {backgroundColor: colors.darkBg}]
              }>
              <View style={styles.gridImage}>
                <Image
                  style={{
                    zIndex: 1,
                    height: 130,
                    width: 140,
                    resizeMode: 'contain',
                  }}
                  source={itemdata[index].image}></Image>
              </View>
              <Text
                style={
                  index % 2 === 0
                    ? styles.gridFoodName1
                    : [styles.gridFoodName1, {color: colors.white}]
                }>
                {/* Sub Sandwich */}
                {itemdata[index].itemName}
              </Text>
              <Text
                style={
                  index % 2 === 0
                    ? [styles.gridFoodType1, {color: colors.darkGrey}]
                    : [styles.gridFoodType1, {color: colors.white}]
                }>
                {/* Fastfood */}
                {itemdata[index].type}
              </Text>
              <View style={{flexDirection: 'row', marginTop: 3}}>
                <Image
                  style={{
                    height: 18,
                    width: 18,
                    marginLeft: 10,
                    marginTop: 2,
                  }}
                  source={imagePath.startIcon}></Image>
                <Text
                  style={
                    index % 2 === 0
                      ? styles.gridRating
                      : [styles.gridRating, {color: colors.white}]
                  }>
                  {/* (4.5) */}
                  {itemdata[index].rating}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={
                    index % 2 === 0
                      ? styles.gridCost
                      : [styles.gridCost, {color: colors.white}]
                  }>
                  {/* $15.00 */}${itemdata[index].cost}
                </Text>
                <TouchableOpacity>
                  <View style={styles.addButton}>
                    <Image
                      style={{
                        height: 25,
                        width: 25,
                        marginTop: 4,
                        marginLeft: 2,
                      }}
                      source={imagePath.addIcon}></Image>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        {/* Line 1 */}
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  headerImage: {
    width: '94%',
    // height: '65%',
    height: '95%',
    resizeMode: 'cover',
    marginTop: 20,
    marginHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerFoodDisplay: {
    height: '74%',
    width: '85%',
    marginTop: 25,
    marginLeft: -22,
    borderWidth: 1,
    borderColor: colors.transparentColor,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: colors.transparentColor,
    flexDirection: 'row',
  },
  timeStampDisplay: {
    flexDirection: 'row',
    marginLeft: 7,
  },
  searchBarSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor: colors.deepBlue,
    // borderWidth: 1,
    // borderStyle: 'solid',
    marginTop: 10,
    // marginBottom: 10,
    marginLeft: 5,
    height: 45,
  },
  foodName: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.6,
    marginTop: 10,
    marginLeft: 13,
  },
  foodInfoSection: {
    flexDirection: 'column',
    // justifyContent: 'space-evenly',
  },
  orderButton: {
    height: 45,
    width: 113,
    marginLeft: 15,
    marginTop: 15,
    borderWidth: 2,
    borderColor: colors.transparentColor,
    borderStyle: 'solid',
    borderRadius: 10,
    justifyContent: 'center',
    // fontSize: 25,
    // textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: colors.secondaryGold,
  },
  orderCountContainer: {
    height: 22,
    width: 22,
    backgroundColor: colors.darkBg,
    borderWidth: 2,
    borderColor: colors.transparentColor,
    borderStyle: 'solid',
    borderRadius: 5,
    zIndex: 1,
    marginTop: -10,
    marginLeft: 35,
  },
  timeBlock: {
    height: 35,
    width: 35,
    marginLeft: 6,
    marginTop: 10,
    backgroundColor: colors.darkBg,
    borderColor: colors.secondaryGold,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    // marginTop:5,
    flexDirection: 'row',
    // alignSelf: 'center',
    // textAlign: 'center',
  },
  timeColor: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 6,
    paddingLeft: 1,
    // textAlign: 'center',
  },
  imageDisplay: {
    height: 140,
    // width: 180,
    width: 170,
  },
  offerDisplay: {
    height: 65,
    width: 65,
    backgroundColor: colors.darkBg,
    borderColor: colors.secondaryGold,
    borderWidth: 5,
    borderStyle: 'solid',
    borderRadius: 35,
    // zIndex: 1,
    marginTop: -65,
    // marginLeft: -5,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 45,
    width: '75%',
    borderColor: colors.white,
    // borderColor: colors.grey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    marginLeft: 20,
    paddingTop: 5,
    paddingLeft: 10,
  },
  bagButton: {
    height: 45,
    width: 45,
    backgroundColor: colors.secondaryGold,
    borderColor: colors.gold,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    marginRight: 24,
    alignItems: 'center',
  },
  addButton: {
    height: 35,
    width: 35,
    backgroundColor: colors.secondaryGold,
    borderColor: colors.gold,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    marginRight: 12,
    alignItems: 'center',
  },
  icons: {
    // marginLeft: 5,
    marginTop: -5,
    height: 30,
    width: 30,
  },
  icons2: {
    // marginLeft: 5,
    marginTop: 4,
    height: 30,
    width: 30,
  },
  foodScrollView: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingLeft: 16,
  },
  foodType: {
    backgroundColor: colors.white,
    height: 45,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.transparentColor,
    borderStyle: 'solid',
    borderRadius: 10,
    // backgroundColor: colors.secondaryGold,
  },
  gridViewBg1: {
    height: 250,
    width: 170,
    borderWidth: 1,
    borderColor: colors.white,
    borderStyle: 'solid',
    borderRadius: 8,
    marginHorizontal: BETWEEN_GRID_WIDTH,
    marginTop: 20,
  },
  gridFoodName1: {
    fontSize: 16,
    marginLeft: 13,
    marginTop: 5,
    fontWeight: '600',
  },
  gridFoodType1: {
    fontSize: 12,
    marginLeft: 13,
    marginTop: 5,
    fontWeight: '500',
  },
  gridRating: {
    marginLeft: 2,
    marginTop: 4,
    fontSize: 12,
  },
  gridCost: {
    marginLeft: 13,
    marginTop: 8,
    fontSize: 19,
    fontWeight: '700',
  },
  gridImage: {
    height: 120,
    width: 145,
    backgroundColor: colors.primaryColor,
    marginTop: 10,
    marginLeft: 12,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    borderStyle: 'solid',
    borderRadius: 8,
  },
});
export default LandingPage;
