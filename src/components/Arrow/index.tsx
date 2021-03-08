export function ForwardArrow(props: any) {
    return (
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 15L21 8L15 1" stroke={props.stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 8H1" stroke={props.stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
export function BackArrow() {
    return (
        <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 8L7 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M0.999998 8L41 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}