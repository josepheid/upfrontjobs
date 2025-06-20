import { JobDetails } from "@/components/JobDetails";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building, Link as LinkIcon, FileText } from "lucide-react";

export default function PostJob() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Post a New Job
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Fill out the form below to find your next great hire.
                    </p>
                </div>

                <form className="space-y-8">
                    <JobDetails />

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Building className="w-6 h-6 mr-3 text-blue-600" />
                                Company Information
                            </CardTitle>
                            <CardDescription>
                                Tell us about the company offering this
                                position.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="company-name">
                                    Company Name
                                </Label>
                                <Input
                                    id="company-name"
                                    placeholder="e.g. Acme Inc."
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company-website">
                                    Company Website
                                </Label>
                                <div className="relative">
                                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="company-website"
                                        type="url"
                                        placeholder="https://example.com"
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                                Job Description
                            </CardTitle>
                            <CardDescription>
                                Provide a detailed description of the job
                                responsibilities and requirements.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Textarea
                                id="job-description"
                                placeholder="Describe the role, responsibilities, qualifications, and benefits..."
                                className="min-h-[200px]"
                            />
                        </CardContent>
                    </Card>

                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            Post Job
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
