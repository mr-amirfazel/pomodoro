import {FC} from 'react';
import { MdTimer } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import { SiGoogleanalytics } from 'react-icons/si';


const Header:FC = ():JSX.Element => {
    return (
    <header className="w-full">
        <div className='w-full flex justify-between items-center h-[100px] px-3'>
            {/* icon */}
            <div className='cursor-pointer flex gap-2 justify-center items-center' >
                <MdTimer />
                <h3 className='font-bold text-md'>Pomodoro timer</h3>
            </div>
            {/* header bars */}
            <div className='flex gap-3'>
                <div className='bg-slate-300 p-2 rounded-md'>
                    <div className='cursor-pointer flex gap-2 justify-center items-center'>
                        <AiFillSetting />
                        <h3 className='font-bold text-md'>Setting</h3>
                    </div>
                </div>
                <div className='bg-slate-300 p-2 rounded-md'>
                    <div className='cursor-pointer flex gap-2 justify-center items-center'>
                        <SiGoogleanalytics />
                        <h3 className='font-bold text-md'>Reports</h3>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header