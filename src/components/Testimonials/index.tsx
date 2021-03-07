import { useState } from "react";
import FowardArrow from "../FowardArrow";
import Text from "../Text";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    const testimonials =
        [{
            id: 1,
            name: "John Fang",
            title: "wordfaang.com",
            testimonial: "It has in its list of clients the largest companies in the world. The company's greatest asset is the real alignment of discourse with practice. They put customers and their employees first. An excellent example of valuing people."
        }, {
            id: 2,
            name: "Jeny Doe",
            title: "UX Engineer",
            testimonial: "Very flashy company. The day I visited I was having an event and I loved it. The headquarters is wonderful and produces comfort and freedom for its employees."
        }, {
            id: 3,
            name: "William",
            title: "Web Designer",
            testimonial: "A software development company that is committed to customers. Excellent infrastructure, peaceful and relaxed atmosphere. I think everyone should get to know it, as it is an inspiring place. Congratulations!"
        }]

    const [showTestimonial, setShowTestimonial] = useState<number>(0)
    const [nextTestimonial, setNextTestimonial] = useState<number>(1)
    const bringNextTestimonial = () => {
        if (showTestimonial === (testimonials.length - 1)) {
            setShowTestimonial(0)
            setNextTestimonial(1)
        } else {
            setShowTestimonial(showTestimonial + 1)
            if (nextTestimonial === (testimonials.length - 1)) {
                setNextTestimonial(0)
            } else {
                setNextTestimonial(nextTestimonial + 1)
            }
        }
    }

    return (
        <div className="container-testimonials">
            <div className="testimonial-title">
                <Text
                    text="Testimonials"
                    color="white"
                    fontSize="40px"
                    fontWeight="bold"
                // lineWeight="160%"
                />
            </div>
            <div className="testimonial-area">
                <div className="testimonial-card">
                    <TestimonialCard
                        name={testimonials[showTestimonial]?.name}
                        title={testimonials[showTestimonial]?.title}
                        testimonial={testimonials[showTestimonial]?.testimonial}
                    />
                </div>
                <div className="next-card">
                    <TestimonialCard
                        name={testimonials[nextTestimonial]?.name}
                        title={testimonials[nextTestimonial]?.title}
                        testimonial={testimonials[nextTestimonial]?.testimonial}
                    />
                </div>
            </div>
            <div className="testimonial-button">
                <span onClick={bringNextTestimonial} ><FowardArrow stroke="white" /></span>
            </div>
        </div>

    )
}