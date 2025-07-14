

import './App.css'
import { Input } from './shared/ui/Input/Input'
import { OneХTwoСard } from './shared/ui/OneХTwoСard/OneХTwoСard'
import { PlaceBetBtn } from './shared/ui/PlaceBetBtn/PlaceBetBtn'
import PrimaryButton from './shared/ui/PrimaryButton/PrimaryButton'
import { WinnerCard } from './shared/ui/WinnerCard/WinnerCard'


function App() {


  return (
    <>
       {/* <PrimaryButton label="Update" />
      <Input title="Title" placeholder="Placeholder" />
      <PlaceBetBtn label="Place Bet" /> */}
       <WinnerCard label="Label" amount={100} players="Players" /> 
      {/* <OneХTwoСard label="Label" amount={100} /> */}
    </>
  )
}

export default App
