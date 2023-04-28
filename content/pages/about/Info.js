/** @jsx jsx */
import { Text, Box } from "@theme-ui/components";
import { jsx } from "theme-ui";
import Image from "gatsby-image";
import useAvatar from "../../../src/hooks/use-avatar";
export default () => {
  const avatar = useAvatar();
  return (
    <div
      sx={{
        display: "grid",
        // default to a stacked layout on small screens
        gridTemplateColumns: ["auto", "0.6fr 1fr"]
      }}
    >
      <Image
        fixed={avatar.childImageSharp.fixed}
        sx={{
          m: "auto", // shorthand for all margins. Just center it.
          border: "3px dotted",
          borderColor: "primary",
          borderRadius: "100%"
        }}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <Box sx={{ mx: "auto", px: 3, py: [5, 1, 1] }}>
        <Text sx={{ fontFamily: "body", fontSize: [1, 2, 3] }}>
          I studied CS and Math at McGill University and worked for Microsoft
          for two years. I quit my job in April 2023, and now I'm working
          full-time on developing a cool iOS app with my friends.
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
