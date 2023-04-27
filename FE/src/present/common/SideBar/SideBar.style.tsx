import styled from "@emotion/styled";
import { theme } from "@constant/theme";
import { ReactComponent as profileIcon } from "@assets/sidebar/profile.svg";
import { ReactComponent as videoIcon } from "@assets/sidebar/video.svg";
import { ReactComponent as imageIcon } from "@assets/sidebar/image.svg";
import { ReactComponent as mapIcon } from "@assets/sidebar/map.svg";

type OpenProps = {
  isOpen: boolean;
};

type SelectProps = {
  selected: boolean;
  isOpen: boolean;
};

export const Wrapper = styled("div")<OpenProps>(
  {
    background: `${theme.colors.greyscale.dark1}`,
    color: `${theme.colors.greyscale.light2}`,
    height: "100vh",
    position: "absolute",
    left: "0px",
    top: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    transition: `${theme.trans}`,
  },
  (props) => ({
    width: `${props.isOpen ? "400px" : "100px"}`,
    borderRadius: `${props.isOpen ? "0px 50px 50px 0px" : "0px"}`,
  })
);

export const OpenButton = styled("div")<OpenProps>(
  {
    background: `${theme.colors.greyscale.point}`,
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    cursor: "pointer",
    position: "absolute",
    top: "100px",
    right: "-16px",
    transition: `${theme.trans}`,
  },
  (props) => ({})
);

export const ProfileBox = styled("div")({
  width: "100%",
  height: "150px",
  display: "flex",
  marginLeft: "50px",
  alignItems: "center",
});

export const StyledProfileIcon = styled(profileIcon)({
  width: "50px",
  minWidth: "50px",
  height: "50px",
  marginRight: "30px",
  fill: `${theme.colors.greyscale.light3}`,
  transition: `${theme.trans}`,
});

export const ProfileText1 = styled("h1")<OpenProps>(
  {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "100%",
    whiteSpace: "nowrap",
    marginRight: "5px",
    color: `${theme.colors.greyscale.light3}`,
    transition: `${theme.trans}`,
  },
  (props) => ({
    opacity: `${props.isOpen ? "1" : "0"}`,
  })
);

export const ProfileText2 = styled("h1")<OpenProps>(
  {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "100%",
    whiteSpace: "nowrap",
    color: `${theme.colors.greyscale.dark2}`,
    transition: "all 0.3s ease",
  },
  (props) => ({
    opacity: `${props.isOpen ? "1" : "0"}`,
  })
);

export const Body = styled("div")({
  width: "100%",
  height: "50%",
});

export const BodyContent = styled("div")<SelectProps>(
  {
    width: "87.5%",
    height: "70px",
    display: "flex",
    marginLeft: "33px",
    alignItems: "center",
    cursor: "pointer",
  },
  (props) => ({
    color: `${
      props.selected
        ? theme.colors.greyscale.light3
        : theme.colors.greyscale.dark2
    }`,
    backgroundColor: `${
      props.selected ? theme.colors.greyscale.dark2 : "none"
    }`,
  })
);

export const StyledImageIcon = styled(imageIcon)<SelectProps>(
  {
    width: "33px",
    height: "33px",
    minWidth: "33px",
    marginRight: "33px",
    transition: `${theme.trans}`,
  },
  (props) => ({
    fill: `${
      props.selected
        ? theme.colors.greyscale.light3
        : theme.colors.greyscale.dark2
    }`,
  })
);
export const StyledVideoIcon = styled(videoIcon)<SelectProps>(
  {
    width: "33px",
    height: "33px",
    minWidth: "33px",
    marginRight: "33px",
    transition: `${theme.trans}`,
  },
  (props) => ({
    fill: `${
      props.selected
        ? theme.colors.greyscale.light3
        : theme.colors.greyscale.dark2
    }`,
  })
);
export const StyledMapIcon = styled(mapIcon)<SelectProps>(
  {
    width: "33px",
    height: "33px",
    minWidth: "33px",
    marginRight: "33px",
    transition: `${theme.trans}`,
  },
  (props) => ({
    fill: `${
      props.selected
        ? theme.colors.greyscale.light3
        : theme.colors.greyscale.dark2
    }`,
  })
);

export const SideBarText = styled("h1")<OpenProps>(
  {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "100%",
    whiteSpace: "nowrap",
    color: `${theme.colors.greyscale.light3}`,
    transition: `${theme.trans}`,
  },
  (props) => ({
    opacity: `${props.isOpen ? "1" : "0"}`,
  })
);

export const Drone = styled("div")({
  width: "87.5%",
  height: "70px",
});

export const ShowImage = styled("div")({
  width: "87.5%",
  height: "70px",
});

export const FlightInfo = styled("div")({
  width: "87.5%",
  height: "70px",
});