import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
    return (
        <header className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
            
            <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="md:inline-flex h-20 w-20 border-0"
            >
                <Icon name="menu" size="3xl" color="gray"/>
            </Button>
            <Icon name="description" size="5xl" color="blue"/>
            <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>
            <div className ="mx-5 md:mx-20 flex flex-grow items-center px- py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="gray" className="ml-10"/>
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none"/>
            </div>
            <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className=" ml-5 h-20 w-20 border-0"
            >
                <Icon name="apps" size="3xl" color="gray"/>
            </Button>
            <img 
            loading="lazy" 
            className="cursor-pointer h-12 w-12 rounded-full ml-2"
            src="https://lh3.googleusercontent.com/__AZ4N1kMG-NXA0VXSwCbiXysAwTPatHb0QLvD6p3UsIMJicASEniil0ny1tI7zMhyMHw2Wr6PSi3mW8ZC1IURFsRPkK-L0tHKbZ8pK_H-Tdk-05Cva_6tB3mCaprfEdOfYzMOstjqNxWFVUKYIcvnnowxKxutlez-S9g9GIjjA1bDRZ-LJW4131jHgqgesCnwUXMuB1snfA3fga5QaI1htaSr2yiY2BCrxNacVO9hVA1R_1bPjvxhVLbRcND_DvEeDQ4Le8FZR2IpJs40dNTM8ALOpTqiQW9D729jMTPmgdrNiGGkL4Da9nSDNl3jJwm-6zjkR9ymqO22xJd7nK3IpG5jb0kxZpAE6Er8l06ETcBDZ9gMGIg1579WlFaQVS5kmz6Sdrnt6mnQ099lZUZovVcAIpH5xBhtl1WJrC-k9qZTGRHUwBMTYi1hskAk8Sf3L8xH9b8zuMBEjHgVYVAETCdYOQ0IOpzVeTeYRMtnCVYgUjogbDs0w-x7IzybSv79XBkTyQbn9Vu1-v1ZBJ-expXFQaDuDSgbSlnk3TkSgwBO7aAAoKw-wObZ1_5PuVywdYDAaTd8K3EZudAC_tcr8JDCHunuimAzIvD6eiym0vEHN1upwIkXshri2ZslViAivmhNYAiS6fETZI9P1OaWvL9xuc2nM5f_AJFGHY2CgU1bQLDTdPaDVKFzuVlv7aR-TafI8FS_6oCrkD_GRO5Io=w681-h731-no?authuser=0" 
            alt=""
            />

        </header>
    )
}

export default Header;
