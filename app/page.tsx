import Image from "next/image";
import Header from "./components/Header";
import JobSearch from "./components/JobSearch";
import JobList from "./components/JobList";
import Stats from "./components/Stats";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <JobSearch />
            <Stats />
            <JobList />
        </div>
    );
}
