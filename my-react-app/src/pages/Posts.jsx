
import { useEffect, useMemo, useState } from "react";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages"
import Pagination from "../components/UI/pagination/Pagination";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const soretdAndSearchedPosts = usePosts(posts, filter.sort, filter.query);



  const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
    const response = await PostService.getAll(limit, page);
      setPosts(response.data)
      const totalCount = (response.headers['x-total-count'])
      setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]) 
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p =>  p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }
 
  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
         <PostForm create={createPost}/>
      </MyModal>
     
      <hr style={{margin :'15px 0'}}/>
      <PostFilter
      filter={filter}
      setFilter={setFilter}
      />
            <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Amount of posts on page"
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'All posts'},
        ]} 
        />
      {postError &&
      <h1> Error: ${postError}</h1>}
      {isPostsLoading 
      ?
       <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
        <Loader /> 
      </div> 
      :
       <PostList remove={removePost} posts={soretdAndSearchedPosts} title="Lorem ipsum"/> 
      }
  <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;

