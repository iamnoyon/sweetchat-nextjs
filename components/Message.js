import styles from "styled-components";

function Message({user, message}){
    return(
        <Constainer>
            <p>{message}</p>
        </Constainer>
    )
}
export default Message;

const Constainer = styled.div`
`;