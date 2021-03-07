interface BtnProps {
    children: string,
    backgroundColor: string,
    demo?: boolean,
    width?: string,
    padding?: string
}

export default function Button(props: any) {
    return (
        <>
            <button
                style={{
                    backgroundColor: props.backgroundColor,
                    height: "60px",
                    width: props.width,
                    borderRadius: "50px",
                    color: props.color
                }}
            >
                {props.children}
            </button>
        </>
    )
}
