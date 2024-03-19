/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi"
import { menuState } from "../../atoms/menuAtom";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useEffect } from "react";

function RootSideMenuLeft() {
    const [ show, setShow ] = useRecoilState(menuState);
    const [ ProfileState, setProfileState ] = useState();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");

    useEffect(() => {
        setProfileState(() => principalQueryState.status === "success");
    }, [principalQueryState.status])

    const handleCloseClick = () => {
        setShow(() => false);
    }

    const handleLoginClick = () => {
        
    }

    return (
        <div css={s.layout(show)}>
            <div css={s.header}>
                <button css={s.menuButton} onClick={handleCloseClick}>
                    <HiMenu/>
                </button>
            </div>

            <div css={s.profile}>
                {
                    !ProfileState
                    ?
                    <div css={s.loginProfile}>
                        <Link to={"/auth/signin"}>
                            <button css={s.loginButton} onClick={handleLoginClick}>로그인</button>
                        </Link>
                    </div>
                    : 
                    <div css={s.userLayout}>
                        <div css={s.userProfile}></div>
                        <div>
                            <div>USERID : </div>
                            <div>USERNAME : </div>
                        </div>
                    </div>
                    
                }

            </div>

            <div css={s.menuList}>
                <Link css={s.menuLink}>
                    도서 검색
                </Link>
            </div>
        </div>
    );
}

export default RootSideMenuLeft;