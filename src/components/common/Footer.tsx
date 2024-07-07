const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 px-8 mt-auto">
            <div className="container mx-auto text-center text-xs leading-2 ">
                <p>
                    &copy; {new Date().getFullYear()} N.Com Website. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
