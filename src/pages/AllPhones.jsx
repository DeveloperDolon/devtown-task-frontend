import { useState } from "react";
import { axiosSecure } from "../hooks/axiosSecure";
import { useQuery } from "@tanstack/react-query";
import MobileCard from "../components/MobileCard";

const AllPhones = () => {
    const [search, setSearch] = useState(null);

    const { data, isLoading } = useQuery({
        queryKey: ["access-phones", search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-phones?searchQuery=${search}`);
            return res.data;
        }
    })

    const setSearchQuery = (e) => {
        setSearch(e);
    }


    return (
        <div className="container mx-auto">
            <div className=" mt-8">
                <div className="pt-10 pb-5 relative flex">
                    <input onChange={(e) => setSearchQuery(e.target.value)} type="text" name="search" className="w-full md:py-5 py-3 md:text-base text-sm md:px-6 px-3 rounded-l-lg shadow-lg" placeholder="Search with price, name, type, processor, memory, OS" />
                    <button type="submit" className="md:py-4 py-3 md:px-8 px-4 md:text-lg text-base font-semibold rounded-r-lg text-white bg-lime-500 shadow-lg">Search</button>
                </div>
            </div>
            {
                isLoading ? 
                    <div className="min-h-screen w-full flex justify-center items-center">
                        <span className="loading loading-ring loading-lg"></span>
                    </div>
                :

                <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-14 gap-7">
                {
                    data?.map(item => <MobileCard key={item?._id} data={item}></MobileCard>)
                }
            </div>
            }

        </div>
    );
};

export default AllPhones;