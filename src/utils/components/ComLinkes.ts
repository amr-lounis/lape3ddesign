import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const MyNavLink = styled(NavLink)(() => ({
  fontSize: "1.5rem",
  padding: "8px",
  textDecoration: "none",
  color: "#BBB",
  "&.active": { color: "#FFF" },
  "&:hover": {
    color: "blue",
  },
}));

export const MyLinkRoute = styled(NavLink)(() => ({
  fontSize: "1rem",
  textDecoration: "none",
  color: "#555",
  "&.active": { color: "#FFF" },
  "&:hover": {
    color: "blue",
  },
}));
