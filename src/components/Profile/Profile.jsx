import { useContext } from 'react';
import profile from '../../assets/Remove-bg.ai(1).png';
import ThemeContext from '../../providers/ThemeContext';

const Profile = () => {
    const { themeColor, darkMode } = useContext(ThemeContext);

    // Determine the profile background color based on themeColor
    const profileBgColor = themeColor.includes('blue') ? '#3b82f6' :
        themeColor.includes('pink') ? '#ec4899' :
            themeColor.includes('orange') ? '#f97316' : '#888';

    return (
        <div className="profile text-center space-y-4">
            <div
                style={{
                    backgroundColor: profileBgColor,
                    borderRadius: '50%',
                    width: '7rem',
                    height: '7rem',
                    overflow: 'hidden',
                    margin: '0 auto',
                }}
            >
                <img 
                    src={profile} 
                    alt="Profile" 
                    className="object-cover"
                />
            </div>
            <h2 className={`text-xl font-semibold ${themeColor}`}>
                Mahmudul Hasan Sarkar
                <br></br>
                <span className={`text-base font-medium ${darkMode === 'dark' ? 'text-[#de42fd]' : ''}`}>
                Web Developer and Data Analyst
            </span>
            </h2>
        </div>
    );
};

export default Profile;
