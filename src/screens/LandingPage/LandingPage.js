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

const LandingPage = () => {
  // const [selectFoodCategory, setSelectFoodCategory] = useState(false);
  return (
    <>
      <StatusBar
        backgroundColor={colors.transparentBackgroundColor}
        barStyle="light-content"
      />
      <SafeAreaView backgroundColor={colors.transparentBackgroundColor} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.searchBarSection}>
            <View style={styles.searchBox}>
              <Image style={styles.icons2} source={imagePath.searchIcon} />
              <TextInput
                style={{marginLeft: 12, fontSize: 15}}
                placeholder={'Search for food'}
                placeholderTextColor={colors.darkGrey}></TextInput>
            </View>
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
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            justifyContent: 'space-evenly',
            // alignSelf: 'center',
            // marginHorizontal: 10,
            marginLeft: 5,
            marginTop: 20,
            // marginRight: 20,
          }}>
          {/* Type1 */}
          <View
            style={{
              height: 250,
              width: 170,
              backgroundColor: colors.white,
              borderWidth: 1,
              borderColor: colors.white,
              borderStyle: 'solid',
              borderRadius: 8,
            }}>
            <View
              style={{
                height: 120,
                width: 145,
                backgroundColor: colors.primaryColor,
                marginTop: 10,
                marginLeft: 12,
                borderWidth: 1,
                borderColor: colors.primaryColor,
                borderStyle: 'solid',
                borderRadius: 8,
              }}>
              <Image
                style={{
                  zIndex: 1,
                  height: 130,
                  width: 140,
                  // resizeMode: 'contain',
                }}
                source={imagePath.subSandwichImage}></Image>
            </View>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 13,
                marginTop: 5,
                fontWeight: '500',
              }}>
              Sub Sandwich
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 13,
                marginTop: 5,
                fontWeight: '500',
                color: colors.darkGrey,
              }}>
              Fastfood
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 18, width: 18, marginLeft: 10, marginTop: 2}}
                source={imagePath.startIcon}></Image>
              <Text style={{marginLeft: 2, marginTop: 4, fontSize: 12}}>
                (4.5)
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  marginLeft: 13,
                  marginTop: 8,
                  fontSize: 19,
                  fontWeight: '700',
                }}>
                $15.00
              </Text>
              <TouchableOpacity>
                <View style={styles.addButton}>
                  <Image
                    style={{height: 25, width: 25, marginTop: 4, marginLeft: 2}}
                    source={imagePath.addIcon}></Image>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* Type1 */}

          {/* Type2 */}
          <View
            style={{
              height: 250,
              width: 170,
              marginLeft: 14,
              backgroundColor: colors.darkBg,
              borderWidth: 1,
              borderColor: colors.white,
              borderStyle: 'solid',
              borderRadius: 8,
            }}>
            <View
              style={{
                height: 120,
                width: 145,
                backgroundColor: colors.primaryColor,
                marginTop: 10,
                marginLeft: 12,
                borderWidth: 1,
                borderColor: colors.primaryColor,
                borderStyle: 'solid',
                borderRadius: 8,
              }}>
              <Image
                style={{
                  zIndex: 1,
                  height: 130,
                  width: 140,
                  resizeMode: 'contain',
                }}
                source={imagePath.burgerImage}></Image>
            </View>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 13,
                marginTop: 5,
                fontWeight: '500',
                color: colors.white,
              }}>
              Cheese Burger
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 13,
                marginTop: 5,
                fontWeight: '500',
                color: colors.white,
              }}>
              Fastfood
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 18, width: 18, marginLeft: 10, marginTop: 2}}
                source={imagePath.startIcon}></Image>
              <Text
                style={{
                  marginLeft: 2,
                  marginTop: 4,
                  fontSize: 12,
                  color: colors.white,
                }}>
                (4.5)
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  marginLeft: 13,
                  marginTop: 8,
                  fontSize: 19,
                  fontWeight: '700',
                  color: colors.white,
                }}>
                $15.00
              </Text>
              <TouchableOpacity>
                <View style={styles.addButton}>
                  <Image
                    style={{height: 25, width: 25, marginTop: 4, marginLeft: 2}}
                    source={imagePath.addIcon}></Image>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* Type2 */}

          {/* ABOVE 2 VIEWS MUST BE PUT IN ITS PARENT VIEW WHICH INTURN SHOULD BE INSIDE A LIST VIEW AND DATA SHOULD BE RENDERED BASED ON EVEN INDEX CONDITION CHECKING */}
        </View>
        {/* Line 1 */}

        {/* Line 2  for trial*/}
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            justifyContent: 'space-evenly',
            // alignSelf: 'center',
            // marginHorizontal: 10,
            marginLeft: 5,
            marginTop: 20,
            // marginRight: 20,
          }}>
          {/* Type1 */}
          <View
            style={{
              height: 250,
              width: 170,
              backgroundColor: colors.white,
              borderWidth: 1,
              borderColor: colors.white,
              borderStyle: 'solid',
              borderRadius: 8,
            }}>
            <View
              style={{
                height: 120,
                width: 145,
                backgroundColor: colors.primaryColor,
                marginTop: 10,
                marginLeft: 12,
                borderWidth: 1,
                borderColor: colors.primaryColor,
                borderStyle: 'solid',
                borderRadius: 8,
              }}>
              <Image
                style={{
                  zIndex: 1,
                  height: 130,
                  width: 140,
                  resizeMode: 'contain',
                }}
                source={imagePath.potatoFries}></Image>
            </View>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 13,
                marginTop: 5,
                fontWeight: '500',
              }}>
              Potato Fries
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 13,
                marginTop: 5,
                fontWeight: '500',
                color: colors.darkGrey,
              }}>
              Fastfood
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 18, width: 18, marginLeft: 10, marginTop: 2}}
                source={imagePath.startIcon}></Image>
              <Text style={{marginLeft: 2, marginTop: 4, fontSize: 12}}>
                (4.5)
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  marginLeft: 13,
                  marginTop: 8,
                  fontSize: 19,
                  fontWeight: '700',
                }}>
                $15.00
              </Text>
              <TouchableOpacity>
                <View style={styles.addButton}>
                  <Image
                    style={{height: 25, width: 25, marginTop: 4, marginLeft: 2}}
                    source={imagePath.addIcon}></Image>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* Type1 */}

          {/* Type2 */}
          <View
            style={{
              height: 250,
              width: 170,
              marginLeft: 14,
              backgroundColor: colors.darkBg,
              borderWidth: 1,
              borderColor: colors.white,
              borderStyle: 'solid',
              borderRadius: 8,
            }}>
            <View
              style={{
                height: 120,
                width: 145,
                backgroundColor: colors.primaryColor,
                marginTop: 10,
                marginLeft: 12,
                borderWidth: 1,
                borderColor: colors.primaryColor,
                borderStyle: 'solid',
                borderRadius: 8,
              }}>
              <Image
                style={{
                  zIndex: 1,
                  height: 130,
                  width: 140,
                  resizeMode: 'contain',
                }}
                source={imagePath.frenchFries}></Image>
            </View>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 13,
                marginTop: 5,
                fontWeight: '500',
                color: colors.white,
              }}>
              French Fries
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 13,
                marginTop: 5,
                fontWeight: '500',
                color: colors.white,
              }}>
              Fastfood
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 18, width: 18, marginLeft: 10, marginTop: 2}}
                source={imagePath.startIcon}></Image>
              <Text
                style={{
                  marginLeft: 2,
                  marginTop: 4,
                  fontSize: 12,
                  color: colors.white,
                }}>
                (4.5)
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  marginLeft: 13,
                  marginTop: 8,
                  fontSize: 19,
                  fontWeight: '700',
                  color: colors.white,
                }}>
                $15.00
              </Text>
              <TouchableOpacity>
                <View style={styles.addButton}>
                  <Image
                    style={{height: 25, width: 25, marginTop: 4, marginLeft: 2}}
                    source={imagePath.addIcon}></Image>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* Type2 */}

          {/* ABOVE 2 VIEWS MUST BE PUT IN ITS PARENT VIEW WHICH INTURN SHOULD BE INSIDE A LIST VIEW AND DATA SHOULD BE RENDERED BASED ON EVEN INDEX CONDITION CHECKING */}
        </View>

        {/* ALSO DO PROPER STYLESHEET STYLING AND ADD ATRINGS TO STRINGS FILE */}
        {/* Line 2  for trial*/}
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
    width: 180,
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
});
export default LandingPage;
