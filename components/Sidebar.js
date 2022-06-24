import { Avatar, Button, IconButton } from "@material-ui/core";
import styled from "styled-components";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
function Sidebar() {
    return (
        <Container>
            <Header>
                <UserAvatar />
                <IconContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconContainer>

            </Header>
            <Search>
                <SearchIcon />
                <SearchInput placeholder="Search in chats" />
            </Search>
            <SidebarButton>Start a new chat</SidebarButton>
        </Container>
    )
}

export default Sidebar;
const Container = styled.div``;
const Header = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0px;
z-index: 1;
background-color:#FFF;
border-bottom: 1px solid whitesmoke;
height:80px;
padding: 15px;;
`;
const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`;
const IconContainer = styled.div``;
const Search = styled.div`
display: flex;
align-items: center;
padding: 20px;
`;
const SearchInput = styled.input`
outline-width: 0;
border: none;
flex: 1;
`;
const SidebarButton = styled(Button)`
width:100%;

&&&{
    border-bottom: 1px solid whitesmoke ;   
    border-top: 1px solid whitesmoke ;

}
`;