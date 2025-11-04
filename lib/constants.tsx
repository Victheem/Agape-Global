import { details } from "motion/react-client";
import Image from "next/image"

export const navItems = [
    { name: "Home", href: "#"},
    { name: "Programs", href: "#"},
    { name: "About", href: "#"},
    { name: "Pricing", href: "#"},
    { name: "Contact", href: "#"},
]

export const programs = [
    {
        title: "Educational Loan",
        description:
        "Students who need financial assistance to afford higher education, undergraduate to professional levels.",
        image: "/strength.jpg",
    },
    {
        title: "Salary Advance Loan",
        description:
        "Students who need financial assistance to afford higher education, undergraduate to professional levels.",
        image: "/yoga.jpg",
    },
    {
        title: "Asset Loan",
        description:
        "Students who need financial assistance to afford higher education, undergraduate to professional levels.",
        image: "/cardio.jpg",
    },
    {
        title: "Small Scale Business Loan",
        description:
        "Students who need financial assistance to afford higher education, undergraduate to professional levels.",
        image: "/nutrition.jpg",
    },

];


 export const testimonials = [
    {
        name: "Sarah A",
        story: "I lost 20lbs in 3 months with his program!",
        details:
        "personalized training and nutrition plan made all the differnce. i feel stronger and more confident than EvalError.",
        image: "/Sarah.jpg",
        rating: 5,
    },
    {
        name: "Segun J",
        story: "I lost 20lbs in 3 months with his program!",
        details:
        "personalized training and nutrition plan made all the differnce. i feel stronger and more confident than EvalError.",
        image: "/john.jpg",
        rating: 4,
    },
    {
        name: "Seyi M.",
        story: "I lost 20lbs in 3 months with his program!",
        details:
        "personalized training and nutrition plan made all the differnce. i feel stronger and more confident than EvalError.",
        image: "/emily.jpg",
        rating: 5,
    },
];


export const plans = [
    {
        name: "Basic",
        period: "month",
        description: " perfect for getting started with fitness",
        faetures: [
            "Gymn Acess",
            "Basic Equipment",
            "Locker room access",
            "Mobile App Access",
            "Progress Tracking"

        ],
        cta: "Join now ",
    }
]