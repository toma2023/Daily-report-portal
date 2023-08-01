import Header from "./components/Header"
import NationalTelecommunication from "./components/NationalTelecommunication"
import Summary from "./components/Summary"
// text-[#FFFDFF]
function App() {


  return (
    <>
      <div className="p-6 max-w-screen-xl mx-auto bg-[#060B27]  min-h-screen">
        <Header></Header>
        <NationalTelecommunication></NationalTelecommunication>
        <Summary></Summary>
      </div>
    </>
  )
}

export default App
