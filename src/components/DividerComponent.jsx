import { Divider } from "@mui/material";

function DividerComponent() {
  return (
    <div>
      <Divider
        sx={{
          marginTop: "0px",
          marginBottom: "40px",
          backgroundColor: "gray",
        }}
        orientation="horzontal"
        variant="middle"
        flexItem
      />
    </div>
  );
}
export default DividerComponent;
