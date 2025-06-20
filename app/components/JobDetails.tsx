import { Briefcase, DollarSign, MapPin } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";

export const JobDetails = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Briefcase className="w-6 h-6 mr-3 text-[var(--upfront)]" />
                    Job Details
                </CardTitle>
                <CardDescription>
                    Provide the essential information about the job role.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input
                        id="job-title"
                        placeholder="e.g. Senior Software Engineer"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="location">Location(s)</Label>
                    <div className="relative">
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                id="location"
                                placeholder="e.g. London, UK"
                                className="pl-10"
                            />
                        </div>
                        <div className="flex items-center gap-2 ">
                            <Checkbox id="remote" />
                            <Label htmlFor="remote">Remote?</Label>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="job-type">Job Type</Label>
                    <Select>
                        <SelectTrigger id="job-type">
                            <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem
                                value="full-time"
                                className="hover:bg-gray-100"
                            >
                                Full-time
                            </SelectItem>
                            <SelectItem
                                value="part-time"
                                className="hover:bg-gray-100"
                            >
                                Part-time
                            </SelectItem>
                            <SelectItem
                                value="contract"
                                className="hover:bg-gray-100"
                            >
                                Contract
                            </SelectItem>
                            <SelectItem
                                value="internship"
                                className="hover:bg-gray-100"
                            >
                                Internship
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="salary">Salary Range (Optional)</Label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            id="salary"
                            placeholder="e.g. $120,000 - $150,000"
                            className="pl-10"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
