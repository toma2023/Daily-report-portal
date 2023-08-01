

const Summary = () => {
    return (
        <div className=" text-[#FFFFFF] mx-20 mt-10 grid  gap-4 grid-cols-2">
            <div className="p-6 bg-[#090D2B] w-[416px] h-[466px] rounded-md">

                <p className="text-2xl">Summary_</p>
                <hr className="border-[#2A2649] my-2 " />
                <p className="text-lg text-[#CBCACE]">Yesterday's Report_</p>
                <hr className="border-[#2A2649] my-2 " />
                <div className="flex ">
                    <p className="text-lg flex-1 text-[#7D7997]">Entry:</p>
                    <p className="text-lg  flex-2 text-[#7D7997]">30</p>
                </div>
                <hr className="border-[#2A2649] my-2 " />
                <div className="flex ">
                    <p className="text-lg flex-1 text-[#7D7997]">Release:</p>
                    <p className="text-lg  flex-2 text-[#7D7997]">30</p>
                </div>
                <hr className="border-[#2A2649] my-2 " />
                <p className="text-lg text-[#CBCACE]">Last 30 Days’ Report_</p>
                <hr className="border-[#2A2649] my-2 " />
                <div className="flex ">
                    <p className="text-lg flex-1 text-[#7D7997]">Entry:</p>
                    <p className="text-lg  flex-2 text-[#7D7997]">30</p>
                </div>
                <hr className="border-[#2A2649] my-2 " />
                <div className="flex ">
                    <p className="text-lg flex-1 text-[#7D7997]">Release:</p>
                    <p className="text-lg  flex-2 text-[#7D7997]">30</p>
                </div>
                <hr className="border-[#2A2649] my-2 " />
                <p className="text-lg text-[#CBCACE]">Average</p>
                <hr className="border-[#2A2649] my-2 " />
                <div className="flex ">
                    <p className="text-lg flex-1 text-[#7D7997]">Entry:</p>
                    <p className="text-lg  flex-2 text-[#7D7997]">30</p>
                </div>
                <hr className="border-[#2A2649] my-2 " />
                <div className="flex ">
                    <p className="text-lg flex-1 text-[#7D7997]">Release:</p>
                    <p className="text-lg  flex-2 text-[#7D7997]">30</p>
                </div>
                <hr className="border-[#2A2649] my-2 pb-4  " />

            </div>
            <div >
                <p className="text-[32px] mb-3 ">Daily Report_</p>
                <div className="mt-6 flex ">
                    <input
                        type="text"
                        className="w-[50%] h-50 px-4 py-2 text-[#363D58] text-[16px]  bg-[#090D2B] border border-[#363D58] rounded-md"
                        placeholder="MG Rakib’s Entry_"
                    />
                    <input
                        type="text"
                        className="w-[50%] h-50 px-4 py-2 text-[#363D58] text-[16px] ml-6 bg-[#090D2B] border border-[#363D58] rounded-md"
                        placeholder="MG Rakib’s Release_"
                    />
                </div>
                <div className="mt-8 flex">
                    <input
                        type="text"
                        className="w-[50%] h-50 px-4 py-2 text-[#363D58] text-[16px]  bg-[#090D2B] border border-[#363D58] rounded-md"
                        placeholder="Jail Warder’s Entry_"
                    />
                    <input
                        type="text"
                        className="w-[50%] h-50 px-4 py-2 text-[#363D58] text-[16px] ml-6 bg-[#090D2B] border border-[#363D58] rounded-md"
                        placeholder="Jail Warder’s Release_"
                    />
                </div>
                <div className="my-10">
                    <h2 className="text-[32px] ">Daily Active_</h2>
                    <div className="mt-6 flex">
                        <input
                            type="text"
                            className="w-[50%] h-50 px-4 py-2 text-[#363D58] text-[16px]  bg-[#090D2B] border border-[#363D58] rounded-md"
                            placeholder="Active"
                        />
                        <input
                            type="text"
                            className="w-[50%] h-50 px-4 py-2 text-[#363D58] text-[16px] ml-6 bg-[#090D2B] border border-[#363D58] rounded-md"
                            placeholder="Locap"
                        />

                       
                    </div>
                    <div className="w-full mt-10">
                            <button
                                type="submit"
                                className="w-[100%] h-50 px-4 py-2 bg-[#2BB3C0] text-white rounded-md"
                            >
                                Submit
                            </button>
                        </div>

                </div>

            </div>
        </div>
    );
};

export default Summary;