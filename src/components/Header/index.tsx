import Button from "../Button";
import FowardArrow from "../FowardArrow";
import Logo from "../Logo";
import Menu from "./Menu";
import '../../styles/index.css'
import Text from "../Text";
export default function Header() {
    return (
        <div className="div-header">
            <div className="container-header">
                <div className="logo">
                    <Logo />
                </div>
                <div>
                    <Menu />
                </div>
                <div className="button">
                    <Button
                        backgroundColor="white"
                        width="210 px"
                    >Request demo<span>
                            <FowardArrow stroke="#9C69E2" />
                        </span></Button>
                </div>
            </div>
        </div>
    )
}