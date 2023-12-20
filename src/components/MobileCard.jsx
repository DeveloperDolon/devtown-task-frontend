import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MobileCard = ({ data }) => {
    return (
        <div className="bg-slate-100 flex flex-col overflow-hidden shadow-xl rounded-xl">
            <div>
                <img className="w-full" src={data?.image} alt="" />
            </div>

            <div className="px-7 py-5 flex h-full flex-col border justify-between gap-5">
                <div>
                    <div className="pb-3 flex justify-between gap-5 flex-wrap items-center">
                        <h1 className="md:text-3xl text-xl font-semibold">{data?.name}</h1>
                        <p className="md:text-lg text-base font-medium bg-yellow-500 py-1 px-3 rounded-lg">{data?.type}</p>
                    </div>

                    <p className="md:text-lg text-base font-medium">Price : {data?.price} $</p>
                    <p className="md:text-lg text-base font-medium pt-1">OS : {data?.os}</p>
                    <p className="md:text-lg text-base font-medium pt-1">Processor : {data?.processor}</p>
                </div>

                <div>
                    <Link to={`/phone/${data?._id}`} className="md:btn btn btn-sm md:btn-neutral btn-neutral">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default MobileCard;

MobileCard.propTypes = {
    data: PropTypes.object
}