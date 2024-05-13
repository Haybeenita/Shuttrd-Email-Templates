const VerifyEmail = ()=> {
    return (
        <div className=" max-w-[37.5rem]">
            <div className="flex flex-col pl-8">
                <h1 className="capitalize text-4xl font-bold text-black mb-[2.5rem] mt-[28px]">
                  verify your email
                </h1>
                <p className="text-lg text-black font-medium mb-[1rem]">Dear Cynthia</p>
                <p className="mb-[1.5rem] text-black font-medium text-md">Please verify your account, please enter the code into your account when prompted</p>

                <div className="bg-[#E5E7EB] w-[32.438rem] border-l-4 border-l-black py-[1.5rem] pl-[1.5rem] mb-[1.75rem]">
                    <p className="text-black font-semibold text-xl">Verification code: <span className="text-[#F59E0B]">890745</span></p>

                </div>
            </div>
        </div>
    )


}
export default VerifyEmail