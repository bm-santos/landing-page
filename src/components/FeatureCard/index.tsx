import FowardArrow from "../FowardArrow";
import FeatureImage from "../ImagesSVG/FeatureImage";
import Text from "../Text";
import Trapezoid from "./Trapezoid";

export default function FeatureCard(props: any) {
    return (
        <div className="container-feature-card">
            <div className="img">
                <FeatureImage image={props.image} />
            </div>
            <div className="text">
                <Text
                    text={props.title}
                    fontSize="24px"
                    fontWeight="400"
                    color="#212353"
                    height="50px"
                    width="200px"
                    lineHeight="130%"
                />
                <Text
                    text={props.text}
                    fontSize="16px"
                    fontWeight="normal"
                    color="#4B5D68"
                    height="160px"
                    width="220px"
                    lineHeight="130%"
                />
                <a href={props.link}>
                    Learn more<span><FowardArrow stroke="#9C69E2" /></span>
                </a>
            </div>
            <div className="bg">
                <Trapezoid bgcolor={props.bgcolor} />
            </div>
        </div >
    )
}