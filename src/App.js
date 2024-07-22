import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/main_layout';
import HomePage from './pages/Home';
import RandomRecipie from './pages/RandomRecipie';
import SearchItem from './pages/SearchItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/recipe/:id' element={<RandomRecipie />} />
          <Route path='/random-recipie' element={<RandomRecipie />} />
          <Route path='/search' element={<SearchItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
