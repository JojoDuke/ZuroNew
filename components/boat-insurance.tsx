import uploadIcon from '../public/page4/uploadIcon.svg'
import cancelIcon from '../public/page4/cancel.svg'
import deleteIcon from '../public/page4/delete.svg'
import upload from '../public/page4/upload.svg'
import Image from 'next/image'

const BoatInsurance = () => {
    return(
        <>
            {/* model & make */}
            <input type="text" placeholder='Boat Make &amp; Model' className='w-[80%] px-5 bg-[#181818] h-[60px] rounded-xl my-5 outline-none'/>

            {/* year */}
            <input type="text" placeholder='Which year is this boat' className='w-[80%] px-5 bg-[#181818] h-[60px] rounded-xl my-5 outline-none'/>

            {/* type */}
            <input type="text" placeholder='What type of boat is it' className='w-[80%] px-5 bg-[#181818] h-[60px] rounded-xl my-5 outline-none'/>

        {/* other info */}
            <input type="text" placeholder='Include other information here' className='w-[80%] px-5 bg-[#181818] h-[60px] rounded-xl my-5 outline-none'/>

        {/* boat records */}
            <h3>Boat Records</h3>
            <div className='flex flex-col items-center gap-5 justify-center p-10 my-5 bg-[#181818] w-[80%]' style={{border: 'dashed 2px #9750EF'}}>
                <Image src={uploadIcon} />
                <span>Drag and drop files or <label htmlFor="browse" className='text-[#9750EF] underline cursor-pointer'>Browse</label></span>
                <input type="file" id='browse' style={{display: 'none'}}/>
                <p className='text-center text-[12px] text-[#BEBEBE]'>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
            </div>

        {/* uploading files */}
            <h4>Uploading - 3/3 files</h4>
            <div className='bg-[#181818] w-[80%] flex items-center rounded px-3 my-5'>
                <input type="text" placeholder='your-file-here.PDF' className='outline-none w-[100%] h-[37px]' style={{background: 'none'}}/>
                <Image src={cancelIcon} />
            </div>
            
            {/* uploaded files */}
            <h4>Uploaded</h4>
            <div className='bg-[#181818] w-[80%] flex items-center rounded px-3 my-5'>
                <input type="text" placeholder='document-name.PDF' className='outline-none w-[100%] h-[37px]' style={{background: 'none'}}/>
                <Image src={deleteIcon} />
            </div>

        {/* upload button */}
            <button className='bg-[#1DCD6D] rounded flex items-center justify-center gap-4 w-[80%] h-[60px]'>
                <Image src={upload} />
                Upload Documents
            </button>
        </>
    )
}

export default BoatInsurance