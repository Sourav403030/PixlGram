import Post from "../components/Post"

const Feed = () => {
  return (
    <div className="h-screen w-ful">
        <div className="feed m-auto w-160 h-full">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
  )
}

export default Feed