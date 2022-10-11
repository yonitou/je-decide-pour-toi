import { humorType } from "@Types/humor.types";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface HumorIconProps {
	humor: humorType;
	fill: string;
	width?: number;
	height?: number;
	style?: StyleProp<ViewStyle>;
}

const HumorIcon = ({ humor, fill, width = 24, height = 24, style }: HumorIconProps): JSX.Element => {
	if (!humor?.icon) return null;
	return <SvgXml xml={humor.icon} fill={fill} width={width} height={height} style={style} />;
};

export default HumorIcon;
