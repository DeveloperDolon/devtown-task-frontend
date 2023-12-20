import {useQuery} from "@tanstack/react-query";
import { axiosSecure } from "../hooks/axiosSecure";
import MobileCard from "./MobileCard";
import { Link } from "react-router-dom";

const FeaturedItems = () => {
    const {data} = useQuery({
        queryKey: ["access-phones"],
        queryFn: async () => {
            const res = await axiosSecure.get("/all-phones");
            return res.data;
        }
    })
    console.log(data)
    return (
        <div className="md:mt-32 mt-24">
            <h1 className="md:text-6xl text-4xl font-bold text-center">Featured Items</h1>

            <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-14 gap-7">
                {
                    data?.slice(0, 6).map(item => <MobileCard key={item?._id} data={item}></MobileCard>)
                }
            </div>

            <div className="text-center py-16">
                <Link to={"/all-products"}
                className="md:btn btn md:btn-warning btn-warning btn-sm"
                >View All</Link>
            </div>
        </div>
    );
};



export default FeaturedItems;