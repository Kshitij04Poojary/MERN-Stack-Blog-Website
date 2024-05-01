
const Footer = () => {
  return (
    <>
    <div className="bg-black px-8 md:px-[300px] mt-8 w-full flex md:flex-row flex-col justify-between text-sm md:text-md py-8">
        <div className="flex flex-col space-y-2 text-white">
            <p>Featured Blogs</p>
            <p>Most Viewed</p>
            <p>Reader's Choice</p>
        </div>

        <div className="flex flex-col space-y-2 text-white">
            <p>Forum</p>
            <p>Support</p>
            <p>Recent Posts</p>
        </div>

        <div className="flex flex-col space-y-2 text-white">
            <p>Privacy Policy</p>
            <p>About Us</p>
            <p>Terms And Conditions</p>
            <p>Terms Of Services</p>
        </div>
    </div>
    <p className="py-2 pb-6 text-center text-white bg-black text-sm">All rights reserved &copy; BlogMarket 2024</p>
    </>
  )
}

export default Footer