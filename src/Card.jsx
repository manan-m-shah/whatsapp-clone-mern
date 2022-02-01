import React, { useState, useEffect } from 'react'

function Card(props) {

    const [data, setData] = useState(props.data)
    const [description, setDescription] = useState(data.shortDescription)

    function toggleDescription() {
        if (description === data.shortDescription) {
            setDescription(data.longDescription)
        } else {
            setDescription(data.shortDescription)
        }
    }


    return (
        <main className=''>
            <div className='bg-blue-200 p-4 mx-0 my-4 sm:mx-2 md:mx-4 max-w-[32rem]'>
                <div className='items-center flex'>
                    <img className='py-4 h-60 w-40 object-cover' src={data.thumbnailUrl} alt={data.title}></img>
                    <div className='p-4 tracking-wide'>
                        <h3 className='text-lg font-medium'>{data.title.substring(0, 100)}</h3>
                        <h4 className='text-md'>{data.authors}</h4>
                    </div>
                </div>
                <div className='text-sm'>
                    <p>{description}</p>
                </div>
            </div>
        </main >
    );
}

export default Card;