import React, {useState} from 'react'
import QRCode from '../assets/qrCode.png'
import ToggleIcon1 from '../assets/icons/lightModeIcon.svg'
import ToggleIcon2 from '../assets/icons/darkModeIcon.svg'
import { Link } from 'react-router-dom'
import { VscGithub } from "react-icons/vsc";
import { Switch } from '@headlessui/react'

const MainScreen = () => {
   const [hovered, setHovered] = useState(false);
   const [enabled, setEnabled] = useState(false)
   
   const githubUrl = 'https://github.com/mehmetenfa/qr-code-react'
   return (
	   <>
		  <nav className='h-[116px] w-full bg-lightBlue shadow-lg flex flex-row items-center justify-between'>
			 <div className='flex gap-[33px] items-center h-full p-[140px]'>
				<div className='w-[65px] h-[65px] bg-white2 flex items-center justify-center rounded-[10px] shadow-xl'>
				   <img draggable={false} src={QRCode} width={50} height={50} />
				</div>
				<h1 className='text-xl font-bold'>URL to QR Code</h1>
			 </div>
			 <div className='flex flex-row items-center gap-[45px] p-[120px]'>
				<div>
				   <Switch
					   checked={enabled}
					   onChange={setEnabled}
					   className={`${
						   enabled ? 'bg-gradient-to-r from-toggleBlue1 to-toggleBlue2' : 'bg-gradient-to-r from-toggleBlue1 to-toggleBlue2'
					   } relative inline-flex h-[40px] w-[100px] flex items-center rounded-full p-[4px] shadow-xl`}
				   >
					  {/*<span className="sr-only">Enable notifications</span>*/}
					  {enabled ?
						  <div
							  className={`${
								  enabled ? 'translate-x-[58px]' : 'translate-x-1'
							  } inline-block h-[30px] w-[30px] flex items-center justify-center transform rounded-full bg-black transition`}
						  >
							 <img src={ToggleIcon2} />
						  </div>
					   :
						  <div
							  className={`${
								  enabled ? 'translate-x-[58px]' : 'translate-x-1'
							  } inline-block h-[30px] w-[30px] flex items-center justify-center transform rounded-full bg-white transition`}
						  >
							 <img src={ToggleIcon1} />
						  </div>
					  }
				   </Switch>
				</div>
				<div
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					className='flex gap-3 items-center'
				>
				   {hovered &&
				   		<div className='items-center absolute w-[120px] border border-white1 right-28 top-[90px] bg-white p-2 rounded-lg shadow-lg'>
						   <p className='font-bold'>Source Code</p>
						</div>
				   }
				   <Link target={"_blank"} to={githubUrl}>
					  <VscGithub size={40} />
				   </Link>
				</div>
			 </div>
		  </nav>
		  <div>
			 content
		  </div>
	   </>
   )
}

export default MainScreen;
