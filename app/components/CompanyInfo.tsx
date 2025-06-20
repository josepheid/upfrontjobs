import { Building, LinkIcon } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export const CompanyInfo = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Building className="w-6 h-6 mr-3 text-[var(--upfront)]" />
                    Company Information
                </CardTitle>
                <CardDescription>
                    Tell us about the company offering this position.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="e.g. Acme Inc." />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company-website">Company Website</Label>
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
    );
};
