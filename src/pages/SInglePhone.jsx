import {
    useLoaderData,
  } from "react-router-dom";

const SInglePhone = () => {
    const phoneData = useLoaderData();


    return (
        <div className="container mx-auto md:px-0 sm:px-5 px-3 md:mt-14 mt-7">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                <img src={phoneData?.image} alt="" />

                <div>
                <h1 className="md:text-4xl text-2xl font-bold pb-6">{phoneData?.name}</h1>
                    <p className="md:text-base text-sm font-medium">Ram : {phoneData?.memory?.ram}</p>
                    <p className="md:text-base text-sm font-medium">Storage : {phoneData?.memory?.storage}</p>
                    <p className="md:text-base text-sm font-medium">Operating System : {phoneData?.os}</p>
                    <p className="md:text-base text-sm font-medium">Processor : {phoneData?.processor}</p>

                    <button className="btn btn-success mt-7">Add TO Cart</button>

                    <p className=" pt-6">
                        {phoneData?.details}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SInglePhone;