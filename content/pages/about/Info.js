/** @jsx jsx */
import avatar from "./avatar.png";
import { Avatar, Text, Box } from "@theme-ui/components";
import { jsx } from "theme-ui";

export default () => {
  return (
    <div
      sx={{
        display: "grid",
        // default to a stacked layout on small screens
        gridTemplateColumns: ["auto", "0.6fr 1fr"]
      }}
    >
      {/* Avatar uses the values defined in theme.images.avatar */}
      <Avatar
        src={avatar}
        // center the image and keep the aspect ratio
        sx={{
          m: "auto", // shorthand for all margins. Just center it.
          minWidth: "50%",
          height: "auto",
          border: "3px dotted",
          borderColor: "primary"
        }}
      />
      <Box sx={{ mx: "auto", px: 3, py: [5, 1, 1] }}>
        <Text sx={{ fontFamily: "body", fontSize: [1, 2, 3] }}>
          I'm studying CS and Math at McGill University.
          <br />
          I've been programming for {new Date().getFullYear() - 2018} years,
          long enough to know my way around the keyboard, too short a time to be
          blasé about charms lying in lines of codes.
          <br />
          Welcome to the home to my floating thoughts.
        </Text>
      </Box>
    </div>
  );
};
