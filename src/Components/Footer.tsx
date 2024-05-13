 const Footer = () => {
    return (

  <div className="bg-[#E5E7EB]">
  <div className=" max-w-[37.5rem] mt-[2.5rem]">
    <p className="text-black mb-[1rem] px-10 text-base font-medium">Do you have any questions? contact us at <a className="text-[#F59E0B] text-base font-medium">Shuttred@gmail.com</a></p>
    <hr className="w-[32.375rem] bg-[#6B7280] my-[1rem]"></hr>
  </div>
  <div className="flex gap-24">
    <div>
        <img src="./Transparent Logo 3.png" alt="Logo" className="pl-4"/>
    </div>
    <div className="flex flex-col">
      <div className="flex gap-4 mb-[1rem]">
      <img src="./facebookicon.png" alt="Facebook" className="w-6 h-6"/>
      <img src="./twitter.png" alt="Twitter" className="w-6 h-6"/>
      <img src="./instagram.png" alt="Instagram" className="w-6 h-6"/>
      </div>
     <div className="text-[#6B7280] mb-[2.438rem]  text-base font-medium">
      <p className="mb-[1rem]">mail@example.com +123456789</p>
      <p>Copyright © 2020 Shiprocket Inc.</p>

     </div>   
    </div>
  </div>
  </div>  
    )
}
export default Footer
