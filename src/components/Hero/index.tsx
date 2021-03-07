import Button from "../Button";
import HeroImage from "../ImagesSVG/HeroImage";
import Text from "../Text";


export default function Hero() {
    return (
        <div className="container-hero">
            <div className="text">
                <Text
                    text="Save your data storage here."
                    fontSize="5rem"
                    fontWeight="bold"
                    color="#212353"
                    height="11.5rem"
                    width="40.3125rem"
                    lineHeight="110%"
                />
                <Text
                    text="Data Warehouse is a data storage area that has been tested for security, 
                    so you can store your data here safely but not be afraid of being stolen by others."
                    fontSize="1.125rem"
                    fontWeight="normal"
                    color="#4B5D68"
                    height="120"
                    width="380px"
                    lineHeight="160%"
                />
                <Button
                    backgroundColor="#9C69E2"
                    width="170 px"
                    color="white"
                ><span>Learn more</span></Button>
            </div>
            <div className="image-hero">
                <HeroImage />
            </div>


        </div>
    )
}