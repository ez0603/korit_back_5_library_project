/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { GridLoader } from 'react-spinners';

function FullSizeLoader({ size }) {
    return (
        <div>
            <div css={s.layout}>
                <GridLoader color="#36d7b5" size={size}/> 
            </div>  
        </div>
    );
}

export default FullSizeLoader;