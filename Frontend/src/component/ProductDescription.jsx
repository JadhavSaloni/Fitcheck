import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
        <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero iste vitae ratione dicta, vero porro maiores officia blanditiis fugiat ipsum doloremque necessitatibus amet numquam dolores quae labore et suscipit, voluptatem hic tempora quo tempore odit rerum tenetur. Cupiditate ipsum eum ad, voluptatum saepe accusamus blanditiis, animi in sed, explicabo necessitatibus rerum perferendis aspernatur quibusdam architecto.</p>
        </div>
    </div>
  )
}

export default ProductDescription