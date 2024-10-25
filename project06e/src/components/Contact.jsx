import Layout from "./Layout"
const Contact =()=>{
    return(
        <Layout>
            <div className="md:w-6/12 mx-auto md:my-16 md:shadow-2xl bg-white ">    
                <img src="/images/contact.jpg" className="w-full"/>
                <div className="p-8">
                    <form action="" className="md:mt-4 space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold text-lg mb-1">Your Name</label>
                            <input 
                                required
                                type="text" 
                                name = "name"
                                placeholder="Your Name"
                                className="p-3 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold text-lg mb-1">Email</label>
                            <input 
                                required
                                type="email" 
                                name = "email"
                                placeholder="example@email.com"
                                className="p-3 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold text-lg mb-1">Message</label>
                            <textarea 
                                required
                                name = "messgae"
                                placeholder="Enter Your Message"
                                className="p-3 border border-gray-300 rounded"
                                rows={4}
                            />
                        </div>

                        <button 
                            className="py-3 px-8 rounded bg-blue-600 text-white font-semibold hover:bg-rose-600">
                                Submit
                        </button>
                    </form>
                </div>
                
            </div>
        </Layout>
    )
}
export default Contact