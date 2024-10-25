import Container from "../../components/Container";
import logo from '../../assets/images/logo2.png';
import { MdLightMode, } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

function Header() {
  let [theme, setTheme] = useState(false);

  let themeHandler = () => {
    setTheme(!theme)

    localStorage.setItem('darkTheme', !theme)
  }

  useEffect(() => {
    if (localStorage.getItem('darkTheme') == 'true') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')

    }
  }, [theme])

  return (
    <div className="border dark:border-[#666]">
      <Container className="flex justify-between items-center p-4">
        <img className="sm:w-40 w-24" src={logo} alt="Brand Logo" />



        {localStorage.getItem('darkTheme') == 'true'
          ?
          <MdLightMode onClick={themeHandler} className={`sm:text-2xl cursor-pointer ${localStorage.getItem('darkTheme') == 'true' && 'text-white'} `} />
          :
          <MdDarkMode onClick={themeHandler} className={`sm:text-2xl cursor-pointer  `} />}


      </Container>
    </div>
  )
}

export default Header