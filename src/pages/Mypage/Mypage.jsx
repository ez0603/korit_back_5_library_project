
/** @jsxImportSource @emotion/react */
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as s from "./style";
import { sendAuthMailRequest } from "../../apis/api/sendAuthMail";
import FullSizeLoader from "../../components/FullSizeLoader/FullSizeLoader";
import { GoCheckCircle } from "react-icons/go";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useNavigate } from "react-router-dom";

function MyPage() {
    useAuthCheck();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    
    const sendAuthMailMutation = useMutation({
        mutationKey: "sendAuthMailMutation",
        mutationFn: sendAuthMailRequest,
        retry: 0,
        onSuccess: (response) => {
            if(response.data) {
                alert("메일 전송을 완료하였습니다.");
            }else {
                alert("메일 전송에 실패하였습니다.");
            }
        }
    });

    const handleSendAuthMailClick = () => {
        sendAuthMailMutation.mutate();
    }

    return (
        <>
            {
                sendAuthMailMutation.isLoading 
                ? <FullSizeLoader />
                : <div css={s.layout}>
                    <div css={s.header}>
                        <div css={s.imgBox}>
                            <div css={s.profileImg}>
                                <img src="data:image/jpeg;base64,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" alt="" />
                            </div>
                        </div>
                        <div css={s.infoBox}>
                            <div css={s.infoText}>사용자이름: {principalData?.data.username}</div>
                            <div css={s.infoText}>이름: {principalData?.data.name}</div>
                            <div css={s.emailBox}>
                                <div css={s.infoText}>이메일: {principalData?.data.email}</div>
                                {
                                    principalData?.data.authorities.filter(auth => auth.authority === "ROLE_USER").length === 0 
                                    ?
                                    <button css={s.infoButton} onClick={handleSendAuthMailClick}>인증하기</button>
                                    :
                                    <div css={s.emailCheck}><GoCheckCircle /></div>
                                }
                            </div>
                            <div css={s.infobuttons}>
                                <button css={s.infoButton}>정보 수정</button>
                                <button css={s.infoButton} onClick={() => navigate("/account/edit/password")}>비밀번호 수정</button>
                            </div>
                        </div>
                    </div>
                    <div css={s.bottom}>

                    </div>
                </div>
            }
        </>
    );
}

export default MyPage;
