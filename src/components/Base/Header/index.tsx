import {FC} from 'react';
import { MdTimer } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import { SiGoogleanalytics } from 'react-icons/si';
import HeaderItem from './HeaderItem';
import GlassItem from './GlassItem';


const Header:FC = ():JSX.Element => {
    return (
    <header className="w-full">
        <div className='w-full flex justify-between items-center h-[100px] px-3'>
            {/* icon */}
            <HeaderItem>
                <MdTimer />
                <h3 className='font-bold text-md'>Pomodoro timer</h3>
            </HeaderItem>
            {/* header bars */}
            <div className='flex gap-3'>
                <GlassItem>
                    <HeaderItem>
                        <AiFillSetting />
                        <h3 className='font-bold text-md'>Setting</h3>
                    </HeaderItem>
                </GlassItem>
                <GlassItem>
                    <HeaderItem>
                        <SiGoogleanalytics />
                        <h3 className='font-bold text-md'>Reports</h3>
                    </HeaderItem>
                </GlassItem>
            </div>
        </div>
    </header>
    )
}

export default Header