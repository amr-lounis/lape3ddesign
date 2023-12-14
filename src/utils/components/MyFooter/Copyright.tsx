import { Link, Typography } from "@mui/material";

export default function Copyright({ urls }) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={`https://${urls.thisWebSite}.com`}>
        {urls.thisWebSite + " "}
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
