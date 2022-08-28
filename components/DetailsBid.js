import { View, Text, Image } from "react-native";
import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
import React from "react";

const DetailsBid = ({ bids }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bids.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bids.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          Bid placed by {bids.date}
        </Text>
      </View>

      <EthPrice price={bids.price} />
    </View>
  );
};

export default DetailsBid;
