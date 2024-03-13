import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SellNowPopup from "../screens/sellNowPopup";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Icon from "react-native-vector-icons/Entypo";
import SyncStorage from "sync-storage"
import FilterSearchCar from "../screens/filterSearchCar";
const MainHeader = ({
  onPressHome,
  onPressMyAds,
  onPressSellNow,
  onPressMore,
}) => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();
  const handleHomePress = () => {
    // Replace this with your actual logic for the Home button press
    // console.log('Home button pressed');
  };

  const handleMyAdsPress = () => {
    // Replace this with your actual logic for the My Ads button press
    navigation.navigate("myAds");
    // navigation.navigate('sellItMyself');
    console.log("presed")
  };

  const [sellNowPopupVisible, setSellNowPopupVisible] = React.useState(false);

  const handleSellNowPress = () => {
    // Replace this with your actual logic for the Sell Now button press
    // console.log('Sell Now button pressed');

    setSellNowPopupVisible(true);
  };

  const handleMorePress = () => {
    // Replace this with your actual logic for the More button press
    console.log("More button pressed");
    navigation.navigate("more");
  };

  const handleBuyNowPress = () =>{
    navigation.navigate("buyNow");
  };

  const handleFilterPress = () =>{
    console.log(SyncStorage.get("token"))
    navigation.navigate('filterSearchCar');
  };

  // return (
  //   <View style={styles.headerContainer}>
  //     {/* Home Button */}

  //     <Text style={styles.buttonText}>{user.name? user.name : "Profile"}</Text>

  //     {/* My Ads Button */}
  //     <TouchableOpacity style={styles.button} onPress={onPressMyAds || handleMyAdsPress}>
  //       <Text style={styles.buttonText}>My Ads</Text>
  //     </TouchableOpacity>

  //     {/* Sell Now Button */}
  //     <TouchableOpacity style={styles.button} onPress={onPressSellNow || handleSellNowPress}>
  //       <Text style={styles.buttonText}>Sell Now</Text>
  //     </TouchableOpacity>

  //     {/* More Button */}
  //     <TouchableOpacity style={styles.button} onPress={onPressMore || handleMorePress}>
  //       <Text style={styles.buttonText}> More </Text>
  //     </TouchableOpacity>

  //     <SellNowPopup
  //       visible={sellNowPopupVisible}
  //       onClose={() => setSellNowPopupVisible(false)}
  //       onSelectCategory={(category) => {
  //         console.log(`Selected category: ${category}`);
  //         setSellNowPopupVisible(false); // Close the popup
  //       }}
  //     />

  //   </View>
  // );

  

  return (
    <View>
      <View style={styles.headerContainer}>
        {/* User Name */}
        <View>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.userName}>
            {user.name ? user.name : "User"}
          </Text>
        </View>

        {/* More Button */}
        <TouchableOpacity
          style={styles.moreButton}
          onPress={onPressMore || handleMorePress}
        >
          <Icon name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonHolder}>
        <TouchableOpacity style={styles.buttons} onPress={handleMyAdsPress}>
          <Text style={styles.buttonText}>My ads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={handleSellNowPress}>
          <Text style={styles.buttonText}>Sell Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={handleBuyNowPress}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={handleFilterPress}>
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <SellNowPopup
        visible={sellNowPopupVisible}
        onClose={() => setSellNowPopupVisible(false)}
        onSelectCategory={(category) => {
          console.log(`Selected category: ${category}`);
          setSellNowPopupVisible(false); // Close the popup
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fc6f03",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15 + StatusBar.currentHeight,
    paddingBottom: 10,
    paddingHorizontal: 20,

  },
  userName: {
    color: "white",
    fontWeight: "900",
    fontSize: 22,
  },
  welcomeText: {
    color: "white",
  },
  button: {
    backgroundColor: "white",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",

  },
  buttonHolder:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:10,
    paddingHorizontal:10,
    width:"100%",
  },
  buttons:{
    backgroundColor:"white",
    width:"22%",
    height:40,
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    borderRadius:110,
    elevation: 5,
  },
  buttonText:{
    textAlign:"center",
    color : '#fc6f03',
    fontWeight: 'bold'
  }

});

export default MainHeader;
