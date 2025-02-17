import "../assets/Navbar.css";
import {motion} from "framer-motion";

const navigation = [
    {name: "HOME", href: "#", current: true},
    {name: "BIO", href: "#", current: false},
    {name: "PROJECTS", href: "#", current: false},
    {name: "BLOG", href: "#", current: false},
    {name: "CONNECT", href: "#", current: false},
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{opacity: 0, y: -20, scale: 0.9}} // Start slightly smaller & above
            animate={{opacity: 1, y: 0, scale: 1}} // Animate to normal
            transition={{duration: 0.6, ease: "easeOut"}} // Smooth entry
            className="navbar"
        >
            <ul className="navbar-menu">
                {navigation.map((item, index) => (
                    <motion.li
                        key={index}
                        className={`navbar-item ${item.current ? "active" : ""} cursor-pointer`}
                        whileHover={{
                            scale: 1.1,   // Slight zoom
                            y: -5,       // Moves up a little
                            color: "#990604", // Light hover color
                            transition: {duration: 0.3, ease: "easeInOut", type: "spring", stiffness: 150}
                        }}

                        animate={{
                            scale: 1,     // Ensures smooth zoom-out instead of a drop
                            y: 0,
                            transition: {duration: 0.4, ease: "easeOut"}
                        }}
                    >
                        <a href={item.href}>{item.name}</a>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    );
}
