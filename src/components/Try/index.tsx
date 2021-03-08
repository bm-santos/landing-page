import BtnLearnMore from "../BtnLearnMore";
import BtnRequest from "../BtnRequest";
import Text from "../Text";

export default function Try() {
    return (
        <div className="container-try">
            <div className="text">
                <Text
                    text="Try for free!"
                    color="#212353"
                    fontSize="40px"
                    fontWeight="bold"
                />
                <Text
                    text="Get limited 1 week free try our features!"
                    color="#4B5D68"
                    fontSize="18px"
                    fontWeight="400"
                    lineHeight="160%"
                />
            </div>
            <div className="buttons">
                <BtnLearnMore bgColor="#F063B8" />
                <BtnRequest />
            </div>
        </div>
    )
}