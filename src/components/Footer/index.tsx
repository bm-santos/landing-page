import { flattenDiagnosticMessageText } from "typescript";
import Logo from "../Logo";
import Text from "../Text";

export default function Footer() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column"
            }}>
            <div>
                <Logo />
                <Text
                    text="DataWarehouse"
                />

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>

        </div>
    )
}