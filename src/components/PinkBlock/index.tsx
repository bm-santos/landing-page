import Text from "../Text";
import DescriptionImage from "./DescriptionImage";

export default function PinkBlock() {
    return (
        <div className="container-pink-block">
            <div className="image">
                <DescriptionImage />
            </div>
            <div className="text">
                <Text
                    text="We are a high-level data storage bank"
                    fontSize="40px"
                    fontWeight="bold"
                    color="#212353"
                    height="100px"
                    width="475px"
                    lineHeight="130%"
                />
                <Text
                    text="The place to store various data that you can access at any time through the 
                    internet  and where you can carry it. This very flexible storage area has a high 
                    level of security. To enter into your own data you must enter the password that you 
                    created when you registered in this Data Warehouse."
                    fontSize="18px"
                    fontWeight="500"
                    color="#4B5D68"
                    height="170px"
                    width="474px"
                    lineHeight="160%"
                />
            </div>
        </div>
    )
}