import React, { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import { useQuery } from 'react-query';
import { getPrincipalRequest } from '../apis/api/principal';
import RootSideMenuLeft from '../components/RootSideMenuLeft/RootSideMenuLeft';
import RootHeader from '../components/RootHeader/RootHeader';
import { GridLoader } from 'react-spinners';
import FullSizeLoader from '../components/FullSizeLoader/FullSizeLoader';
import Mypage from '../pages/Mypage/Mypage';
import PageContainer from '../components/PageContainer/PageContainer';


// useQuery => GET 요청시에 사용
// 첫번째 매개변수 => 배열 ["key값", dependency] // key값 = 다른곳에서 전역상태를 찾을 때 사용
// 두번째 매개변수 => 요청메소드(async, await)
/* 세번째 매개변수 => 옵션
    {
        retry:0, 
        refetchOnWindowFocus: false,
        onSuccess: 함수,
        onError: 함수,
        enabled: true or false
    }
*/

function AuthRoute() {

    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest, 
    {
        retry: 0, // retry: 재시도 횟수
        refetchOnWindowFocus: false, 
        onSuccess: response => { // 포커스를 벗어나면 요청을 보냄
            console.log("onSuccess")
            console.log(response)
        },
        onError: error => {
            console.log("오류");
            console.log(error);
        }
    });

    return (
        <>
            <RootSideMenuLeft />
            <RootHeader />
            <PageContainer>
                {
                    principalQuery.isLoading 
                    ?  <FullSizeLoader size={20}/>
                    : <Routes>
                        <Route path='/auth/*' element={ <AuthPage /> } />
                        <Route path="/" element={ < HomePage />} />
                        <Route path="/account/mypage" element={ < Mypage />} />
                    </Routes>
                }
            </PageContainer>
        </>
    );
}

export default AuthRoute;