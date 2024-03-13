

const Card1 = (props) => {
    return (
        <div className='flex flex-col w-[290px] border shadow-lg rounded-lg items-center py-5 my-2'>
            <div>
                <img className="w-[124px] h-[124px]" src={props.image} alt="" />
            </div>
            <div>
                <h2 className="font-semibold text-20px " >{props.heading}</h2>
            </div>
            <div>
                <p className="p-2 text-center">{props.description}</p>
            </div>

        </div>
    )
}

export default Card1