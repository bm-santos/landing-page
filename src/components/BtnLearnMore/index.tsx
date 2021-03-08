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
                    fontSize: "18px",
                    textAlign: "center",

                }}
            >
                Learn More
            </button>
        </>
    )
}
