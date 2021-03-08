import BtnRequest from "../BtnRequest";
import { ForwardArrow } from "../Arrow";
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
                    <BtnRequest />
                </div>
            </div>
        </div>
    )
}