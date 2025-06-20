import { CompanyInfo } from "@/components/CompanyInfo";
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
                    <CompanyInfo />
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
