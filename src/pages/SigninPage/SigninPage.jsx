import React from 'react';
import * as s from "./style";
import { useInput } from '../../hooks/useInput';
import AuthPageInput from '../../components/AuthPageInput/AuthPageInput';
import RightTopButton from '../../components/RightTopButton/RightTopButton';
import { Link } from 'react-router-dom';

function SigninPage() {
    const [ username, usernameChange ] = useInput();
    const [ password, passwordChange ] = useInput();

    return (
        <>
            <div css={s.header}>
                <h1>로그인</h1>
                <RightTopButton onClick={null}>로그인하기</RightTopButton>
            </div>
            <AuthPageInput type={"text"} name={"username"} placeholder={"사용자이름"} value={username} onChange={usernameChange} />
            <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} />
            <Link to={"/auth/signup"}>회원가입</Link>
            <div>
                <Link>카카오로그인</Link>
                <Link>구글로그인</Link>
                <Link>네이버로그인</Link>
            </div>
        </>
    );
}

export default SigninPage;