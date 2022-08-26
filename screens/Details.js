import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from "react-native"

import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants'
import {CircleButton, RectButton, SubInfo, 
FocusStatusBar, DetailsDesc, DetailsBid} from '../components'

const Details = ({route, navigation}) => {

    return(
        <SafeAreaView style={{flex: 1}}>
            <FocusStatusBar 
            barStyle="dark-content"
            backgroundColor="transparent"
            transLucent={true}
            />

            <View style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                paddingVertical: SIZES.font,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.5)",
                zIndex: 1
            }}>
                <RectButton minWidth={170} fontSize={FONTS.large} {...SHADOWS.dark} />
            </View>

            <FlatList 
            data={data.bids}
            renderItem={({item}) => <DetailsBid bids={item} />}
            keyExtractor={(item) => item.id}
            showVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
            />
        </SafeAreaView>
    )
}

export default Details