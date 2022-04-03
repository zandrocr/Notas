//css import
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//pages import
import Feed from './pages/Feed'
import Post from './pages/Post'
import Edit from './pages/Edit'
import Read from './pages/Read'
//router-dom import
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//componets import
import Navbar from './components/navbar'

function App() {

  return (
    //conteudo do navbar contido no browser
      <BrowserRouter>
        {/**navbar com os links do das paginas*/}
        <Navbar/>
        {/** rotas para fazer a ponte para as paginas*/}
        <Routes>
          <Route ex path='/' element={<Feed />} />
          <Route path='/post' element={<Post />} />
          {/** path='/endereço/:id para puxar o id referente a postagem' */}
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/read/:id' element={<Read />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
