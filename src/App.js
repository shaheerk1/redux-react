import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>

          <Route path="/" exact element={<PostList />} />
          <Route path="/post/:postId" exact element={<PostDetail />} />
          <Route>404 Not Found !</Route>
        </Routes>

        <Footer />
      </Router>



    </div>
  );
}

export default App;
