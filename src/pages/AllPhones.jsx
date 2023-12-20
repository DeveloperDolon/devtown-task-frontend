import { useState } from "react";
import { axiosSecure } from "../hooks/axiosSecure";
import {useQuery} from "@tanstack/react-query";

const AllPhones = () => {
    const [search, setSearch] = useState(null);

    const {data} = useQuery({
        queryKey: ["access-phones", search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-phones?searchQuery=${search}`);
            return res.data;
        }
    })

    const setSearchQuery = (e) => {
        setSearch(e);
    }

    console.log(data);

    return (
        <div className="container mx-auto">
            <div className=" mt-8">
                <div className="pt-10 pb-5 relative flex">
                    <input onChange={(e) => setSearchQuery(e.target.value)} type="text" name="search" className="w-full md:py-5 py-3 md:text-base text-sm md:px-6 px-3 rounded-l-lg shadow-lg" placeholder="Search Food..." />
                    <button type="submit" className="md:py-4 py-3 md:px-8 px-4 md:text-lg text-base font-semibold rounded-r-lg text-white bg-lime-500 shadow-lg">Search</button>
                </div>
            </div>

        </div>
    );
};

export default AllPhones;