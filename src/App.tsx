import HeaderBar from './components/HeaderBar'
import Spreadsheet from './components/Spreadsheet'
import FooterTabs from './components/FooterTabs'

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The main app component.
 *
 * This component renders a Vite and React logo, a heading, and a button with a
 * count. It also renders a link to the Vite and React documentation.
 *
 * @returns {JSX.Element} The app component.
 */
/*******  ad2238e8-591e-46a0-bf67-1406cbaecfc7  *******/function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-sm text-gray-800">
      <HeaderBar />
      <div className="flex-1 overflow-auto p-4">
        <Spreadsheet />
      </div>
      <FooterTabs />
    </div>
  )
}

export default App
