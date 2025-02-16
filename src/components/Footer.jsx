export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className="bg-[#1e2939] rounded-lg shadow-sm m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © <span id="year">{year}</span> <a href="https://github.com/frankmathewsajan" className="hover:underline">Frank Mathew Sajan</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="https://www.linkedin.com/in/frankmathewsajan"
                               className="hover:underline me-4 md:me-6">LinkedIn</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="mailto:frankmathewsajan@gmail.com" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )}