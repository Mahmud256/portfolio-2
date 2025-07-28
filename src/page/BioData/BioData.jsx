import React from 'react';
import useTheme from '../../hook/useTheme';

const BioData = () => {
    const { darkMode } = useTheme();

    return (
        <div id='biodata'>
            <div className='flex justify-center p-20' data-aos="zoom-in">
                <div
                    className={`max-w-full w-[820px] mx-auto p-4 border shadow-md ${darkMode === 'dark'
                        ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
                        : 'bg-gradient-to-br from-white via-gray-100 to-gray-200'
                        } shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl`}
                >
                    <h2
                        className={`text-4xl text-center font-bold pb-4 ${darkMode === 'dark' ? 'text-white' : 'text-[#15295f]'
                            }`}
                    >
                        Bio Data
                    </h2>

                    <div className={`text-base space-y-2 ${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>

                        {/* Personal Information */}
                        <p><strong>Full Name:</strong> Mahmudul Hasan Sarkar</p>
                        <p><strong>Nickname:</strong> Mahmud</p>
                        <p><strong>Date of Birth:</strong> (Paper: May 14, 2001) (Orginal: May 14, 1999)</p>
                        <p><strong>Height:</strong> 5 feet 10 inches</p>
                        <p><strong>Weight:</strong> 75 kg</p>
                        <p><strong>Blood Group:</strong> O+</p>
                        <p><strong>Religion:</strong> Islam</p>
                        <p><strong>Nationality:</strong> Bangladeshi</p>
                        <p><strong>Marital Status:</strong> Unmarried</p>
                        <p><strong>Email:</strong> mahmudul.hasan.mailbox@gmail.com</p>
                        <h3 className="pt-6 font-semibold text-lg underline">Contact Addresses:</h3>
                        <table className="table-auto w-full text-left border mb-4">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-2 border">Type</th>
                                    <th className="p-2 border">Village</th>
                                    <th className="p-2 border">Word No</th>
                                    <th className="p-2 border">Union</th>
                                    <th className="p-2 border">Thana</th>
                                    <th className="p-2 border">District</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 border">Current</td>
                                    <td className="p-2 border">Nurbag Puran CNG Stand</td>
                                    <td className="p-2 border">5</td>
                                    <td className="p-2 border">Kutubpur</td>
                                    <td className="p-2 border">Futalla</td>
                                    <td className="p-2 border">Narayanganj</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border">Permanent</td>
                                    <td className="p-2 border">Maizchar</td>
                                    <td className="p-2 border">5</td>
                                    <td className="p-2 border">Chandarchar</td>
                                    <td className="p-2 border">Homna</td>
                                    <td className="p-2 border">Cumilla</td>
                                </tr>
                            </tbody>
                        </table>
                       
                        {/* Education */}
                        <h3 className="pt-6 font-semibold text-lg underline">Educational Qualification:</h3>
                        <table className="table-auto w-full text-left border mt-2">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-2 border">Degree</th>
                                    <th className="p-2 border">Institution</th>
                                    <th className="p-2 border">Group</th>
                                    <th className="p-2 border">Board</th>
                                    <th className="p-2 border">Year</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="p-2 border">B.Sc</td>
                                    <td className="p-2 border">Institute OF Science and Technology</td>
                                    <td className="p-2 border">Computer Science and Engineering</td>
                                    <td className="p-2 border">NU</td>
                                    <td className="p-2 border">2025</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border">HSC</td>
                                    <td className="p-2 border">Trust College</td>
                                    <td className="p-2 border">Science</td>
                                    <td className="p-2 border">Dhaka</td>
                                    <td className="p-2 border">2019</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border">SSC</td>
                                    <td className="p-2 border">Gouripur S.A High School</td>
                                    <td className="p-2 border">Science</td>
                                    <td className="p-2 border">Cumilla</td>
                                    <td className="p-2 border">2017</td>
                                </tr>
                            </tbody>
                        </table>


                        {/* Profession */}
                        <h3 className="pt-6 font-semibold text-lg underline">Professional Background:</h3>
                        <p><strong>Occupation:</strong> Web Developer and Data Analyst</p>
                        <p><strong>Experience:</strong> 2 years</p>
                        <p><strong>Future Goal:</strong> Build a career in Software Engineering and Entrepreneurship</p>

                        {/* Family */}
                        <h3 className="pt-6 font-semibold text-lg underline">Family Information:</h3>
                        <p><strong>Father’s Name:</strong> Main Uddin (Businessman)</p>
                        <p><strong>Mother’s Name:</strong> Nurjahan (Housewife)</p>
                        <p><strong>Siblings:</strong> 3 brothers, no sisters</p>
                        <p><strong>Family Type:</strong> Middle-class, religious</p>

                        {/* About Me */}
                        <h3 className="pt-6 font-semibold text-lg underline">About Me:</h3>
                        <ul className="list-disc list-inside">
                            <li>Calm, Responsible, Ambitious</li>
                            <li>Enjoys reading, programming, and traveling</li>
                            <li>Non-smoker, Non-alcoholic</li>
                            <li>Practicing Muslim</li>
                        </ul>

                        {/* Partner Preference */}
                        {/* <h3 className="pt-6 font-semibold text-lg underline">Preferred Life Partner:</h3>
                        <ul className="list-disc list-inside">
                            <li>Age: 20–25 years</li>
                            <li>Height: 5’2” – 5’6”</li>
                            <li>Education: At least Bachelor’s Degree</li>
                            <li>Religious, modest, respectful family background</li>
                            <li>Occupation: Student / Homemaker / Working (optional)</li>
                        </ul> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BioData;
