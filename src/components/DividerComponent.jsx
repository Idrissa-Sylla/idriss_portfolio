import { Divider } from "@mui/material";

function DividerComponent() {
  return (
    <div>
      <Divider
        sx={{ marginTop: "20px", marginBottom: "20px" }}
        orientation="horzontal"
        variant="middle"
        flexItem
      />
    </div>
  );
}
export default DividerComponent;
