import { Text, TouchableOpacity, Image  } from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const CircleButton = ({imgUrl, HandlePress, ...props}) => {
  return (
    <TouchableOpacity style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props
        }} onPress={HandlePress}>
            <Image
            source={imgUrl}
            resizeMode="contain"
            style={{width: 24, height: 24}}
            />
        
    </TouchableOpacity>
  )
}

export const RectButton = ({handlePress, minWidth, fontSize, ...props}) => {
    return (
      <TouchableOpacity style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.small,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props
        }} onPress={handlePress}>
        
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center"
        }}>Place a bid</Text>
    </TouchableOpacity>
    )
  }
  

