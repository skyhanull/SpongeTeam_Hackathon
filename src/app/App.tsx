import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
// import '../style/style.scss';
import '../index.css';
import TopScroll from '../components/button/scrollButton';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// 페이지 컴포넌트 로드
// const DefaultLayout = React.lazy(
//   () => import('../components/layout/DefaultLayout')
// );
const Dashboard = React.lazy(() => import('../page/dashboard/dashboard'));
const MyPage = React.lazy(() => import('../page/mypage/mypage'));
const WritePage = React.lazy(() => import('../page/write/write'));
const Loading = React.lazy(() => import('../page/dashboard/google'));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 로그인 상태를 가져옵니다
    const session = localStorage.getItem('session');
    setIsAuthenticated(!!session);
  }, []);

  return (
    <HashRouter>
      <Header />
      <Suspense fallback={loading}>
        <div className="mx-56">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/mypage"
              element={
                // <PrivateRoute authenticated={isAuthenticated}>
                <MyPage />
                // </PrivateRoute>
              }
            />
            <Route
              path="/write"
              element={
                // <PrivateRoute authenticated={isAuthenticated}>
                <WritePage />
                // </PrivateRoute>
              }
            />
            <Route
              path="/loading"
              element={
                // <PrivateRoute authenticated={isAuthenticated}>
                <Loading />
                // </PrivateRoute>
              }
            />
            {/* <Route
            path="*"
            element={
              <Navigate to={isAuthenticated ? '/dashboard' : '/login'} />
            }
          /> */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </Suspense>
      <TopScroll />
      <Footer />
    </HashRouter>
  );
};

// const PrivateRoute = ({ authenticated, children }) => {
//   return authenticated ? children : <Navigate to="/dashboard" />;
// };

export default App;
