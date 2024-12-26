import profile from '../../assets/Remove-bg.ai(1).png';
import useTheme from '../../hook/useTheme';

const Profile = () => {
    const { themeColor, darkMode, bgColor } = useTheme();

    // Determine the profile background color based on themeColor
   

    return (
        <div className="profile text-center space-y-4">
            <div
                style={{
                    backgroundColor: bgColor,
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
