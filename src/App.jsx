// import CleanupMaster from './components/CleanupMaster'
// import ColorPicker from './components/ColorPicker'
// import Combined from './components/Combined'
// import CurrencyConvert from './components/CurrencyConverter'
// import ApiSimulation from './components/HookUseEffect'
// import ImageChange from './components/ImageChange'
// import Product from './components/Product'
// import ReactProps from './components/ReactProps'
// import SpecialChar from './components/SpecialChar'
// import StateHook from './components/StateHook'
// import ColorChange from './components/StateHook2'
// import FontWeight from './components/StateHook3'
import ThemeSwitcher from './components/ThemeSwitcher'
// import TimingWatch from './components/Timer'
// import TodoList from './components/TodoList'

function App() {
  const productItem = [
    {
      id: 1,
      name: 'Apple',
      description: 'Fruits',
      price: 100,
    },
    {
      id: 2,
      name: 'Banana',
      description: 'Fruits',
      price: 50,
    }
  ]
  return (
    <div>
      {/* <ReactProps /> */}
      {/* <Combined /> */}
      {/* <StateHook /> */}
      {/* <ColorChange /> */}
      {/* <FontWeight /> */}
      {/* <ApiSimulation /> */}
      {/* <TimingWatch /> */}
      {/* <Product productData={productItem} title="Product Details" /> */}
      {/* <ImageChange /> */}
      {/* <CleanupMaster /> */}
      {/* <CricketerMain /> */}
      {/* <CurrencyConvert /> */}
      {/* <SpecialChar /> */}
      {/* <ColorPicker /> */}
      {/* <TodoList /> */}
      <ThemeSwitcher />
    </div>
  )
}

export default App
