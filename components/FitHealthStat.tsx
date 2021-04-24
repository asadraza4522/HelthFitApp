import React from "react";
import { Text, View } from "react-native";
import { Ionicons , FontAwesome , FontAwesome5  } from "@expo/vector-icons";

interface HealthStatProps {
  doubleIcon?: boolean;
  heartIcon?: boolean;
  iconBackgroundColor: string;
  iconColor: string;
  actual: string;
  over: string;
  type: string;
}

const FitHealthStat = (props: HealthStatProps) => {
  const {
    doubleIcon,
    iconBackgroundColor,
    iconColor,
    actual,
    over,
    heartIcon,
    type,
  } = props;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: iconBackgroundColor,
          marginRight: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
        {
               heartIcon && (
                <FontAwesome name="heartbeat" size={22} color={iconColor} />   
          )}
        
               {
               doubleIcon && (
                <FontAwesome5 name="walking" size={24} color={iconColor} />
          )}
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: "#9a9ba1", fontSize: 30, fontWeight: "600" }}>
            {actual}
          </Text>
          <Text style={{ color: "#9a9ba1", fontSize: 20 }}>{over}</Text>
        </View>
        <Text style={{ color: "#9a9ba1", fontSize: 15 }}>{type}</Text>
      </View>
    </View>
  );
};

export default FitHealthStat;
