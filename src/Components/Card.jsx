import PropTypes from "prop-types";

const Card = ({card,handleSelect}) => {
    const {title,cover_img,details,price,credit_hour} = card;

    return (
        <div>
            <div className="card  bg-base-100 h-[402px] shadow-xl md:max-w-sm lg:max-w-sm ">
                <figure className="w-full items-center  h-2/5 p-4">
                    <img src={cover_img} alt="" className="rounded-xl w-full h-full   " />
                </figure>
                {/* <img className="w-full h-2/5 rounded-2xl overflow-hidden p-4" src={cover_img} alt="" /> */}
                <div className="px-4 pb-4 h-3/5	">
                    <h2 className="text-start text-lg whitespace-normal font-semibold mb-3">{title}</h2>
                    <p className='text-start text-sm font-normal text-[#1c1b1b99] mb-3'>{details.slice(0,130)}</p>

                    <div className='flex justify-between mb-6'>
                        <div className='flex'>
                            <img src="./src/assets/dollar-sign 1.svg" alt="" />
                            <p className='text-base font-medium text-[#24232399]'>Price : {price}</p>
                        </div>
                        <div className='flex'>
                            <img className='mr-2' src="/src/assets/Frame (4).svg" alt="" />
                            <p className='text-base font-medium text-[#24232399]'>Credit : {credit_hour}hr</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>handleSelect(card)} className="btn bg-[#2F80ED] text-white normal-case text-lg font-semibold w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card : PropTypes.object.isRequired,
    handleSelect : PropTypes.func.isRequired
}
export default Card;