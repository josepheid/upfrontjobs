import JobCard from "./JobCard";

// Sample job data
const sampleJobs = [
    {
        id: "1",
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120k - $160k",
        description:
            "We're looking for a senior frontend developer to join our growing team. You'll work on cutting-edge web applications using React, TypeScript, and modern development tools.",
        postedTime: "2 days ago",
        isRemote: true,
        isPremium: true,
    },
    {
        id: "2",
        title: "Product Manager",
        company: "StartupXYZ",
        location: "New York, NY",
        type: "Full-time",
        salary: "$90k - $130k",
        description:
            "Join our product team to drive the strategy and execution of our core platform. Experience with B2B SaaS products preferred.",
        postedTime: "1 day ago",
        isRemote: false,
        isPremium: false,
    },
    {
        id: "3",
        title: "UX Designer",
        company: "Design Studio",
        location: "Austin, TX",
        type: "Contract",
        salary: "$80k - $100k",
        description:
            "We need a talented UX designer to help create intuitive and beautiful user experiences for our client projects.",
        postedTime: "3 days ago",
        isRemote: true,
        isPremium: false,
    },
    {
        id: "4",
        title: "DevOps Engineer",
        company: "CloudTech Solutions",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$130k - $170k",
        description:
            "Looking for a DevOps engineer to help scale our infrastructure. Experience with AWS, Kubernetes, and CI/CD pipelines required.",
        postedTime: "1 week ago",
        isRemote: true,
        isPremium: true,
    },
    {
        id: "5",
        title: "Marketing Specialist",
        company: "GrowthCo",
        location: "Chicago, IL",
        type: "Part-time",
        salary: "$50k - $70k",
        description:
            "Join our marketing team to drive customer acquisition and engagement. Experience with digital marketing and analytics preferred.",
        postedTime: "4 days ago",
        isRemote: false,
        isPremium: false,
    },
    {
        id: "6",
        title: "Data Scientist",
        company: "AI Innovations",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$110k - $150k",
        description:
            "We're seeking a data scientist to help build machine learning models and derive insights from large datasets.",
        postedTime: "5 days ago",
        isRemote: true,
        isPremium: false,
    },
];

const JobList = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Latest Jobs
                    </h2>
                    <p className="text-gray-600 mt-1">
                        {sampleJobs.length} jobs found
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <select className="border border-gray-300 rounded-md px-4 py-2 text-sm">
                        <option>Most Recent</option>
                        <option>Salary: High to Low</option>
                        <option>Salary: Low to High</option>
                        <option>Company Name</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-6">
                {sampleJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
                <button className="bg-[var(--upfront)] hover:bg-[var(--upfront-hover)] text-white px-8 py-3 rounded-md font-medium transition-colors">
                    Load More Jobs
                </button>
            </div>
        </div>
    );
};

export default JobList;
