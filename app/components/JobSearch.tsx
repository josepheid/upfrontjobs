"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Filter } from "lucide-react";
import { useState } from "react";

const JobSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState("");

    return (
        <div className="bg-gradient-to-r from-[var(--upfront)] to-[var(--upfront-dark)] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Where Salary Matters
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Discover thousands of job opportunities where{" "}
                        <b>salaries are always listed</b>, from top companies
                        worldwide.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-5">
                                <div className="relative">
                                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        placeholder="Job title, keywords, or company"
                                        className="pl-10 h-12 text-gray-900"
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-4">
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        placeholder="City, state, or remote"
                                        className="pl-10 h-12 text-gray-900"
                                        value={location}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-3 flex gap-2">
                                <Button className="flex-1 h-12 bg-[var(--upfront)] hover:bg-[var(--upfront-hover)]">
                                    <Search className="w-4 h-4 mr-2" />
                                    Search
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-12 border-gray-300"
                                >
                                    <Filter className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                        <span className="text-blue-100 text-sm">
                            Popular searches:
                        </span>
                        {[
                            "Remote",
                            "Full-time",
                            "Part-time",
                            "Frontend",
                            "Backend",
                            "Marketing",
                        ].map((tag) => (
                            <Button
                                key={tag}
                                variant="ghost"
                                size="sm"
                                className="text-blue-100 hover:text-white hover:bg-[var(--upfront-hover)] h-8"
                            >
                                {tag}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSearch;
