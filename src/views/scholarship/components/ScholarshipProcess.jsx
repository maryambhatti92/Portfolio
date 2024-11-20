import { FiPenTool, FiUsers, FiSend } from 'react-icons/fi'; 

const ProcessSection = () => {
    return (
        <section className="relative bg-cover bg-center bg-process">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto px-12 py-12">
                <div className="text-center">
                    <h2 className="text-white text-4xl font-bold">Application Stages</h2>
                </div>
                <div className="mt-12 mx-10 grid grid-cols-3 md:grid-cols-3 gap-3 justify-center">
                   
                    <div className="text-center text-white relative">             
                        <div className="inline-block ml-4 mt-6 w-16 h-16 bg-transparent rounded-full border-2 border-white flex items-center justify-center">
                            <FiPenTool className="h-12 w-12 text-white" /> 
                        </div>
                      
                        <div className="absolute left-1 transform -translate-x-1 -ml-px h-40 w-0.5 md:h-20 lg:h-24">
                            <div className="absolute top-0 w-4 h-4 rounded-full blue-color left-1/2 transform -translate-x-1/2"></div> 
                            <div className="h-full w-0.5 blue-color mt-2"></div>
                        </div>

                        <div className="ml-4 text-left">
                            <h3 className="text-xl font-bold text-main">First Step</h3>
                            <p className="mt-2">Register your initiatives (Student/University)</p>
                        </div>
                    </div>
                    
                    
                    <div className="text-center text-white relative">
                        <div className="ml-4 mt-6 w-16 h-16 bg-transparent rounded-full border-2 border-white flex items-center justify-center">
                            <FiUsers className="h-12 w-12 text-white" /> 
                        </div>
                        
                        <div className="absolute left-1 transform -translate-x-1 -ml-px h-40 w-0.5 md:h-20 lg:h-24">
                            <div className="absolute top-0 w-4 h-4 rounded-full blue-color left-1/2 transform -translate-x-1/2"></div>
                            <div className="h-full w-0.5 blue-color mt-2"></div>
                        </div>

                        <div className="ml-4 text-left">
                            <h3 className="text-xl font-bold text-main">Second Step</h3>
                            <p className="mt-2">Engage with our Ambassador</p>
                        </div>
                    </div>
                    
                    
                    <div className="text-center text-white relative">
                        
                       
                        
                        <div className="inline-block ml-4 mt-6 w-16 h-16 bg-transparent rounded-full border-2 border-white flex items-center justify-center">
                            <FiSend className="h-12 w-12 text-white" /> 
                        </div>
                        <div className="absolute left-1 transform -translate-x-1 -ml-px h-40 w-0.5 md:h-18 lg:h-20">
                            <div className="absolute top-0 w-4 h-4 rounded-full blue-color left-1/2 transform -translate-x-1/2"></div> 
                            <div className="h-full w-0.5 blue-color mt-2"></div> 
                        </div>
                        
                        <div className="ml-4 text-left">
                            <h3 className="text-xl font-bold text-main ">Third Step</h3>
                            <p className="mt-2">Submit your application (Student)</p>
                            <p>Partner with us (University)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProcessSection;
