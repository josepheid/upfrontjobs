"use client";
import { useState, ChangeEvent } from "react";
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
    const [logoPreview, setLogoPreview] = useState<string | null>(null);

    const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setLogoPreview(null);
        }
    };

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
                    <Input
                        id="company-name"
                        placeholder="e.g. Acme Inc."
                        required
                    />
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
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="company-logo">Company Logo</Label>
                    <div className="flex flex-col items-start gap-3">
                        <div className="relative w-full max-w-xs">
                            <Input
                                id="company-logo"
                                type="file"
                                accept="image/*"
                                className="p-0 border-0 bg-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--upfront)]  file:text-white hover:file:bg-[var(--upfront-hover)]"
                                onChange={handleLogoChange}
                                required
                            />
                        </div>
                        {logoPreview && (
                            <div className="flex-shrink-0 border rounded-lg shadow-sm bg-white p-1 mt-2">
                                <img
                                    src={logoPreview}
                                    alt="Logo Preview"
                                    className="w-30 h-30 object-contain rounded-md"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
