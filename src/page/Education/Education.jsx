import React from 'react';

const Education = () => {
    return (
        <div id='education'>
            <div className='flex justify-center'>
                <div>
                    <h2 className='text-center text-4xl font-bold text-[#15295f] dark:text-[#416fee] py-10'>MY Education</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:mx-16'>
                        <div className="card card-compact w-80 pt-4 border bg-base-100 shadow" data-aos="flip-left">
                            <div className="card-body"><div className="d-flex px-3"><div className="pl-4"><h5 className="text-[#fd6e0a] text-lg">Institute of Science and Technology</h5><h6>BSc in Computer Science and Engineering </h6><span className="mr-1 my-3 badge badge-outline">November 2019 -  November 2024</span><p className="description mt-3"></p><ul></ul></div></div></div>
                        </div>
                        <div className="card card-compact w-80 pt-4 border bg-base-100 shadow" data-aos="flip-right">
                            <div className="card-body"><div className="d-flex px-3"><div className="pl-4">
                                <h5 className="text-[#fd6e0a] text-lg">Trust College</h5>
                                <h6>HSC</h6>
                                <span className="mr-1 my-3 badge badge-outline">June 2017 -  Septembar 2019</span>
                                <p className="description mt-3"></p><ul></ul></div></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;