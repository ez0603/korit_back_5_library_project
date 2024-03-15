import React from 'react';
import { Route, Routes } from 'react-router-dom';
/**@jsxImportSource @emotion/react */
import * as s from "./style";
import SiginupPage from '../SiginupPage/SiginupPage';
import SigninPage from '../SigninPage/SigninPage';

function AuthPage() {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path='/signin' element={ <SigninPage /> }/>
                <Route path='/signup' element={ <SiginupPage /> }/>
                <Route path='/signup/oauth'/>
            </Routes>
        </div>
    );
}

export default AuthPage;