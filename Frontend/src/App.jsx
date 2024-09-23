import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/post' element={<Post />} />
      <Route path='/post/:id' element={<PostDetail />} />
    </Route>
  )
);
function App() {

  return <RouterProvider router={router} />;
}

export default App
