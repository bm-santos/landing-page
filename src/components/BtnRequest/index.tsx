import { ForwardArrow } from "../Arrow";

interface BtnProps {
    children: string,
    backgroundColor: string,
    demo?: boolean,
    width?: string,
    padding?: string
}

export default function BtnRequest(props: any) {
    return (
        <>
            <button
                style={{
                    backgroundColor: "white",
                    height: "60px",
                    width: "210px",
                    borderRadius: "50px",
                    color: "#212353",
                    border: "none",
                    fontSize: "16px",
                    fontWeight: 400,
                    boxShadow: "0px 5px 5px rgba(75, 93, 104, 0.1)"
                }}
            >   Request demo<span
                style={{
                    paddingLeft: "15px"
                }}>
                    <ForwardArrow stroke="#9C69E2" />
                </span>
            </button>
        </>
    )
}
