import { Typography } from "@mui/material";

function SectionTitle(text) {
  return (
    <div>
      <Typography
        className="services_text"
        variant="h4"
        sx={{ marginBottom: "30px" }}
      >
        {text.title}
      </Typography>
    </div>
  );
}
export default SectionTitle;
