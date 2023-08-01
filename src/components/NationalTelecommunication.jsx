import national from '../../public/images/image 1.png'

const NationalTelecommunication = () => {
    return (
        <div className='mt-6 text-[#FFFFFF] grid grid-cols-2 gap-4'>
            <div className='flex'>
                <img className=' h-14 w-14' src={national} alt="" />
                <h2 className='ml-6 text-2xl '>National Telecommunication_ <br />
                    Monitoring Center</h2>

            </div>




            <div className=''>
                <h2 className='text-2xl '>Kashimpur Central Jail -1 </h2>
                <p className='text-[#BBBBBB] text-lg'>Toma Akter Hashi</p>
            </div>



        </div>
    );
};

export default NationalTelecommunication;