export default function Text(props: any) {
    return (
        <p
            style={{
                fontSize: props.fontSize,
                fontWeight: props.fontWeight,
                color: props.color,

                height: props.height,
                width: props.width,

                lineHeight: props.lineHeight,
            }}
        > {props.text}</p >
    )
}