import { humorType } from "@Types/humor.types";
import { SvgXml } from "react-native-svg";

interface HumorIconProps {
	humor: humorType;
	fill: string;
	width?: number;
	height?: number;
}

const HumorIcon = ({ humor, fill, width = 24, height = 24 }: HumorIconProps): JSX.Element => {
	if (!humor?.icon) return null;
	return <SvgXml xml={humor.icon} fill={fill} width={width} height={height} />;
};

export default HumorIcon;
