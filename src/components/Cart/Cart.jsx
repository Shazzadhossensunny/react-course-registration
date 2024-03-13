import PropTypes from 'prop-types';
export default function Cart({cart, price, credit, remainingCredit}) {
  return (
    <div className="bg-white rounded-xl p-6">
        <h3 className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining <span>{remainingCredit}</span> hr</h3>
        <div className="border-b border-[#1C1B1B33] my-4"></div>
         <div>
            <h2>Course Name</h2>
            <ul className="text-base font-normal text-[#1C1B1B99] list-decimal list-inside space-y-2 mt-5">
                {
                    cart.map((c, index)=> <li key={index}>{c.name}</li>)
                }
            </ul>
         </div>
         <div className="border-b border-[#1C1B1B33] my-4"></div>
         <p className="text-base font-medium text-[#1C1B1BCC]">Total Credit Hour : <span>{credit}</span></p>
         <div className="border-b border-[#1C1B1B33] my-4"></div>
         <p className="text-base font-medium text-[#1C1B1BCC]">Total Price : <span>{price}</span> USD</p>
    </div>
  )
}

Cart.propTypes = {
    cart: PropTypes.array,
    price: PropTypes.number,
    credit: PropTypes.number,
    remainingCredit: PropTypes.number
}
