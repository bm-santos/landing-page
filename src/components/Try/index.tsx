import BtnLearnMore from "../BtnLearnMore";
import Button from "../Button";
import Text from "../Text";

export default function Try() {
    return (
        <div className="container-try">
            <div className="text">
                <Text
                    text="Try for free!"
                />
                <Text
                    text="Get limited 1 week free try our features!"
                />
            </div>
            <div className="buttons">
                <BtnLearnMore bgColor="#F063B8" />
                <Button />
            </div>

        </div>
    )
}