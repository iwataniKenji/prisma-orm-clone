import { Box, Button, Card, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

export function ContentSection() {
  return (
    <Box sx={{ display: "flex", pt: 13, pb: 10 }}>
      <Box sx={{ width: "50%" }}>
        <Typography fontSize={60} mb={5}>
          Next-generation Node.js and TypeScript ORM
        </Typography>
        <Typography fontSize={24} mb={4}>
          Prisma unlocks a new level of <strong>developer experience </strong>
          when working with databases thanks to its intuitive data model,
          automated migrations, type-safety & auto-completion.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained">Quickstart</Button>
          <Button variant="outlined" endIcon={<CallMadeIcon />}>
            Playground
          </Button>
        </Box>
      </Box>
      <Card sx={{ width: "50%" }}>
        <Typography>Video here</Typography>
      </Card>
    </Box>
  );
}
