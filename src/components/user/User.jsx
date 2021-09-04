import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../redux/action/modalAction'
import { useHistory } from 'react-router-dom';
import { signOutUserFromFirebase } from '../../firebase/firebaseUtil';
import { GrPower, GrUser, GrUserSettings, GrPlayFill, GrFavorite, GrUserNew } from "react-icons/gr";

const User = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch()
    const history = useHistory()

    const { authenticated, currentUser } = useSelector(state => state.auth)


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSignIn = () => {
        setAnchorEl(null);
        dispatch(openModal({ modalType: 'signIn' }))
    }

    const handleSignUp = () => {
        setAnchorEl(null);
        dispatch(openModal({ modalType: 'signUp' }))
    }

    const handleProfile = () => {
        setAnchorEl(null);
        history.push('/profile/details')
    }
    const handleFavourites = () => {
        setAnchorEl(null);
        history.push('/profile/favourites?type=fav')
    }
    const handleWatchlist = () => {
        setAnchorEl(null);
        history.push('/profile/watchlist?type=wat')
    }

    const handleSignOut = async () => {
        await signOutUserFromFirebase()
        setAnchorEl(null);
        history.push('/')
    }

    const handleSettings = () => {
        setAnchorEl(null);
        history.push('/profile/settings')
    }
    return (
        <div>
            <Avatar onClick={handleClick} alt="" src={currentUser?.photoURL || '/images/image-palceholder.png'} />

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {authenticated ? (
                    <div>
                        <MenuItem onClick={handleProfile}> <GrUser />Profile</MenuItem>
                        <MenuItem onClick={handleFavourites}> <GrFavorite /> Favourites</MenuItem>
                        <MenuItem onClick={handleWatchlist}> <GrPlayFill /> Watchlist</MenuItem>
                        <MenuItem onClick={handleSettings}> <GrUserSettings /> Settings</MenuItem>
                        <MenuItem onClick={handleSignOut}> <GrPower /> Sign Out</MenuItem>
                    </div>) : (<div>
                        <MenuItem onClick={handleSignIn}> <GrPower /> Sign In</MenuItem>
                        <MenuItem onClick={handleSignUp}> <GrUserNew /> Register</MenuItem>
                    </div>
                )}
            </Menu>
        </div>
    )
}

export default User
