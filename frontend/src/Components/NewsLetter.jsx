import React from 'react'

const NewsLetter = () => {
  return (
        <div className="newsletter w-[65%] mx-auto bg-gray-100 p-10 text-center mt-10" style={{
            background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
          }}>
            <h1 className="text-5xl font-semibold mb-5">Subscribe to our Newsletter</h1>
            <p className="mb-5">Get the latest updates on new products and upcoming sales</p>
            <form className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded-l-md w-1/3" />
            <button type="submit" className="bg-black text-white p-2 rounded-r-xl">Subscribe</button>
            </form>
        </div>
  )
}

export default NewsLetter