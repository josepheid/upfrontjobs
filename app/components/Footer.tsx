const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Upfront</h3>
                        <p className="text-gray-400 text-sm">
                            Connecting talented professionals with amazing
                            opportunities worldwide.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">For Job Seekers</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Browse Jobs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Career Advice
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Resume Builder
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Salary Guide
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">For Employers</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Post a Job
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Pricing Plans
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Talent Search
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Employer Resources
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; 2025 Upfront. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
