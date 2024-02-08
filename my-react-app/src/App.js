
import { useRef, useState } from "react";
import Counter from './components/Counter'
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title:'Javascripts', body: 'Description'},
    { id: 2, title:'Javascripts 2', body: 'Description'},
    { id: 3, title:'Javascripts 3', body: 'Description'}
  ]) 
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }



  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title="Posts about JS"/>
    </div>
  );
}

export default App;
