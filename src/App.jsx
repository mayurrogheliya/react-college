import Combined from './components/Combined'
import ApiSimulation from './components/HookUseEffect'
import Product from './components/Product'
import ReactProps from './components/ReactProps'
import StateHook from './components/StateHook'
import ColorChange from './components/StateHook2'
import FontWeight from './components/StateHook3'
import TimingWatch from './components/Timer'

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
      <Product productData={productItem} title="Product Details" />
    </div>
  )
}

export default App
