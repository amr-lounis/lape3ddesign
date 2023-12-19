import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { MySignOut, useAuth } from "src/utils/hooks/useAuth";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

export default function MyProfileMenu() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  const [anchorEl, setAnchorEl] = useState<HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {isSignedIn ? (
        <Button onClick={handleClick}>
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{
              cursor: "pointer",
              height: 40,
              width: 40,
            }}
            src="img_avatar/m/1.png"
          />
        </Button>
      ) : (
        <Button
          onClick={() => {
            navigate("/sign_in");
          }}
        >
          <LoginIcon style={{ color: "#fff" }} />
        </Button>
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem
          onClick={() => {
            MySignOut();
            handleClose();
          }}
        >
          SignOut
        </MenuItem>
      </Menu>
    </div>
  );
}
