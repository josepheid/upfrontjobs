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
                    <Label htmlFor="salary">Salary Range (required)</Label>
                    <div className="inline-flex items-center gap-1">
                        <Select value="GBP">
                            <SelectTrigger id="currency" className="w-[30%]">
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent className="bg-white">
                                <SelectItem
                                    value="GBP"
                                    className="hover:bg-gray-100"
                                >
                                    GBP (£)
                                </SelectItem>
                                <SelectItem
                                    value="USD"
                                    className="hover:bg-gray-100"
                                >
                                    USD ($)
                                </SelectItem>
                                <SelectItem
                                    value="EUR"
                                    className="hover:bg-gray-100"
                                >
                                    EUR (€)
                                </SelectItem>

                                <SelectItem
                                    value="CAD"
                                    className="hover:bg-gray-100"
                                >
                                    CAD (C$)
                                </SelectItem>
                                <SelectItem
                                    value="AUD"
                                    className="hover:bg-gray-100"
                                >
                                    AUD (A$)
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <Input
                            id="min-salary"
                            type="number"
                            placeholder="Minimum"
                            className="w-[35%]"
                            required
                        />
                        <Input
                            id="max-salary"
                            type="number"
                            placeholder="Maximum"
                            className="w-[35%]"
                            required
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
