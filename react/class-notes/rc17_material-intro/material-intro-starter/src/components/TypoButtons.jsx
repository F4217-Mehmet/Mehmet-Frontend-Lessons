import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          mt={4}
          color="secondary"
        >
          H1 ELEMENTI MI OLDUN SEN?
        </Typography>
        <Typography
          variant="body1"
          align="justify"
          mt={4}
          color="error"
          sx={{ background: "aqua" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga aliquid
          vitae ipsa saepe modi illo voluptatibus atque corrupti reiciendis
          debitis!
        </Typography>

        <Typography
          variant="button"
          sx={{ display: "inline-block", mt: "4rem" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga aliquid
          vitae ipsa saepe modi illo voluptatibus atque corrupti reiciendis
          debitis!
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            margin: "0",
          }}
        >
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
