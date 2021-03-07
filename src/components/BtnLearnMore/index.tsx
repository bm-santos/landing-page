export default function BtnLearnMore(props: any) {
    return (
        <>
            <button
                style={{
                    backgroundColor: props.bgColor,
                    height: "60px",
                    width: "170px",
                    borderRadius: "50px",
                    border: 0,

                    color: "white",
                    fontSize: "16px",
                    textAlign: "center",

                }}
            >
                Learn More
            </button>
        </>
    )
}
