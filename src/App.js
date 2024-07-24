import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/main_layout';
import HomePage from './pages/Home';
import RandomRecipie from './pages/RandomRecipie';
import SearchResultPage from './pages/search_result_page';
import RecipieById from './pages/RecipieById';
import SearchByArea from './pages/SearchByArea';
import HomeLayout from './layouts/home_layout';
import Areas from './pages/Areas';
import Categories from './pages/Categories';
import SearchByCategory from './pages/SearchByCategory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path='/recipe/:id' element={<RecipieById />} />
          <Route path='/random-recipie' element={<RandomRecipie />} />
          <Route path='/search' element={<SearchResultPage />} />
          <Route path='/area/:area' element={<SearchByArea />} />
          <Route path='/area' element={<Areas />} />
          <Route path='/categories' element={<Categories />} />
          <Route
            path='/categories/:categories'
            element={<SearchByCategory />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
