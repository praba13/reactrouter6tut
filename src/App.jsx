import { Route, Routes, Outlet, useParams, useOutletContext } from "react-router-dom";
import Nav from "./Nav";


function App() {
  return (
    <div>
      <header>
        <h1>React Router DOM 6</h1>
      </header>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} >
          <Route path=':id' element={<User />} />
          <Route path='me' element={<UserMe />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes  >
    </div>
  );
}

function Home() {
  return (
    <main>
      <h2>Home Page</h2>
    </main>
  );
}

function Users() {
  return (
    <main>
      <h2>Users All Page</h2>
      {/*  <Outlet />*/}{/*wegen nested route */}
      <Outlet context={{ timmy: Date.now() }} />
    </main>
  );
}

function User() {
  const { id } = useParams();
  //const { params } = useParams();
  //console.log(params);
  const context = useOutletContext();
  const timmy = context ? context.timmy : '';
  //console.log(context);
  return (
    <main>
      <h2>User {id} Page</h2>
      <p>The timmy data is {timmy}</p>
    </main>
  );
}

function UserMe() {
  const context = useOutletContext();
  const timmy = context ? context.timmy : '';
  return (
    <main>
      <h2>User About me</h2>
      <p>The timmy data is {timmy}</p>
    </main>
  );
}

function NotFound() {
  return (
    <main>
      <h2>Not Found Page</h2>
    </main>
  );
}

export default App;
