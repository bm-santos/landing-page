import Avatar from "../../ImagesSVG/AvatarsSVG";
import Text from "../../Text";

export default function TestimonialCard(props: any) {
    return (
        <>
            <div className="avatar">
                <Avatar name={props.name} />
            </div>
            <div className="info">
                <Text
                    text={props.name}
                    color="#212353"
                    fontSize="18px"
                    fontWeight="900"
                // lineWeight="160%"
                />
                <Text
                    text={props.title}
                    color="#9C69E2"
                    fontSize="14px"
                    fontWeight="500"
                // lineWeight="160%"
                />
                <Text
                    text={props.testimonial}
                    color="#4B5D68"
                    fontSize="18px"
                    fontWeight="normal"
                // lineWeight="180%"
                />
            </div>
        </>
    )
}