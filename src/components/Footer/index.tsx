import { Chat, Facebook, Instagram, Twitter } from "../ImagesSVG/Footer";
import Logo from "../Logo";

export default function Footer() {
    return (
        <div className="container-footer">
            <div className="main">
                <div className="category">
                    <div className="title">
                        <strong><Logo /> DataWarehouse</strong>
                    </div>
                    <div className="items">
                        <p><strong>Warehouse Society, 234</strong></p>
                        <p><strong>Bahagia Ave Street PRBW 29281</strong></p>

                        <p>info@warehouse.project</p>
                        <p>1-232-3434 (Main)</p>
                    </div>
                </div>
                <div className="category">
                    <div className="title">
                        <p><strong>About</strong></p>
                    </div>
                    <div className="items">
                        <li>Profile</li>
                        <li>Features</li>
                        <li>Careers</li>
                        <li>DW News</li>
                    </div>
                </div>
                <div className="category">
                    <div className="title">
                        <p><strong>Help</strong></p>
                    </div>
                    <div className="items">
                        <li>Support</li>
                        <li>Sign up</li>
                        <li>Guide</li>
                        <li>Reports</li>
                        <li>Q&A</li>
                    </div>
                </div>
                <div className="category">
                    <div className="title">
                        <p><strong>Social Media</strong></p>
                    </div>
                    <div className="items">
                        <div className="logos">
                            <Facebook />
                            <Twitter />
                            <Instagram />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <p>© Datawarehouse™, 2021. All rights reserved.</p>
                    <p>Company Registration Number: 21479524.</p>
                </div>
                <div className="chat">
                    <Chat />
                </div>
            </div>
        </div>
    )
}