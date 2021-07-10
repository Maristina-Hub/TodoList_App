import './index.css'
import Header from './components/Layout/Header'



const data = {
    brandImg: '',
    brandName: 'My Todo List'
}


const App = () => (
    <div>
        <Header data={data} />
    </div>
)  

export default App
