import { Users, Building2, MapPin, TrendingUp } from "lucide-react";

const Stats = () => {
    const stats = [
        {
            icon: Users,
            number: "50K+",
            label: "Active Job Seekers",
            color: "text-[var(--upfront)]",
        },
        {
            icon: Building2,
            number: "2,500+",
            label: "Partner Companies",
            color: "text-green-600",
        },
        {
            icon: MapPin,
            number: "15K+",
            label: "Job Openings",
            color: "text-purple-600",
        },
        {
            icon: TrendingUp,
            number: "95%",
            label: "Success Rate",
            color: "text-orange-600",
        },
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join thousands of job seekers and employers who trust
                        our platform to connect talent with opportunity
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div
                                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4 ${stat.color}`}
                            >
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
