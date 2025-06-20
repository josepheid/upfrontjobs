import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Building2 } from "lucide-react";

interface JobCardProps {
    job: {
        id: string;
        title: string;
        company: string;
        location: string;
        type: string;
        salary: string;
        description: string;
        postedTime: string;
        isRemote: boolean;
        isPremium: boolean;
    };
}

const JobCard = ({ job }: JobCardProps) => {
    return (
        <Card
            className={`hover:shadow-lg transition-shadow duration-200 cursor-pointer ${
                job.isPremium
                    ? "border-yellow-300 bg-gradient-to-r from-yellow-50 to-orange-50"
                    : ""
            }`}
        >
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 hover:text-[var(--upfront)]">
                                {job.title}
                            </h3>
                            {job.isPremium && (
                                <Badge className="bg-yellow-500 text-white text-xs">
                                    Featured
                                </Badge>
                            )}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                                {job.isRemote && (
                                    <Badge
                                        variant="secondary"
                                        className="ml-1 text-xs"
                                    >
                                        Remote
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{job.postedTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {job.description}
                </p>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Badge
                            variant="outline"
                            className="text-[var(--upfront)] border-blue-200"
                        >
                            {job.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-green-600 font-medium">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                        </div>
                    </div>

                    <Button
                        size="sm"
                        className="bg-[var(--upfront)] hover:bg-[var(--upfront-hover)]"
                    >
                        Apply Now
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default JobCard;
