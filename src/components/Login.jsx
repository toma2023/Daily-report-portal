import React from 'react';
import img from "../../public/images/image 1.png"


const Login = () => {
   
    return (

        <div className='flex items-center justify-center w-[100%] h-[100vh] text-[#FFFFFF] bg-[#0C1427]'>

            <div className=' mx-auto w-[908px] h-[573px] bg-[#090D2B]'>
                <h2 className='text-center text-[42px] mt-[38px]'>NTMC DAILY REPORT</h2>
                <div className=' mt-[43px] flex '>
                    <div className='w-[50%] flex items-center justify-center'>
                        <img className='w-[90%]' src={img} alt="" />

                    </div>
                    <div className=' w-[50%] '>
                        <div className=' flex justify-center items-center'>
                            <input
                                type="text"
                                className="mx-auto inline-block w-[90%] h-50 px-4 py-2 text-[#363D58] text-[16px]  bg-[#090D2B] border border-[#363D58] rounded-md"
                                placeholder="user name__"
                            />

                        </div>
                        <div className=' flex justify-center items-center'>
                            <input
                                type="text"
                                className="mt-[22px] mx-auto inline-block w-[90%] h-50 px-4 py-2 text-[#363D58] text-[16px]  bg-[#090D2B] border border-[#363D58] rounded-md"
                                placeholder="password__"
                            />

                        </div>

                        <div className="w-full mt-[22px] flex justify-center items-center">
                            <button
                                type="submit"
                                className="w-[90%] h-50 px-4 py-2 bg-[#2BB3C0] text-white rounded-md"
                            >
                                Login
                            </button>
                        </div>

                        <div className='flex justify-center items-center mt-[22px]'>
                            <div className='w-[90%]  h-[170px] text-[#FFFFFF] text-[16px] bg-[#090D2B] border border-[#FFFFFF] rounded-md'>
                                <p className=' p-[21px] mx-auto'>WARNING! The use of publicly accessible computers (e.g. libraries, airports, cafes, hotels, Public Wi-Fi etc.) to access the System is unauthorized. This type of usage may result in the involuntary dissemination..</p>
                            
                               
                                
                                </div>
                        </div>
                        {/* <input
                            type="text"
                            className=" mx-auto inline-block w-[90%] h-50 px-4 py-2 text-[#363D58] text-[16px]  bg-[#090D2B] border border-[#363D58] rounded-md"
                            placeholder="MG Rakib’s Entry_"
                        />

                        <input
                            type="text"
                            className=" mx-auto inline-block w-[90%] h-50 px-4 py-2 text-[#363D58] text-[16px]  bg-[#090D2B] border border-[#363D58] rounded-md"
                            placeholder="MG Rakib’s Entry_"
                        />

                        <input
                            type="text"
                            className=" mx-auto inline-block w-[90%] h-50 px-4 py-2 text-[#363D58] text-[16px]  bg-[#090D2B] border border-[#363D58] rounded-md"
                            placeholder="MG Rakib’s Entry_"
                        /> */}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;