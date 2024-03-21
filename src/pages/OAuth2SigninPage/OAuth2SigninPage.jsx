import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function OAuth2SigninPage() {
    const [ serchParams ] = useSearchParams();
    const accessToken = serchParams.get("accessToken");

    useEffect(() => {
        localStorage.setItem("AccessToken", accessToken);
        window.location.replace("/");
    }, [])
    
    return (
        <div>
            
        </div>
    );
}

export default OAuth2SigninPage;