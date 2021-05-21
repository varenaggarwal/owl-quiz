import "./logo.css";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import owlImg from "../../assets/owl.png";
import whiteOwlImg from "../../assets/white-owl.png";

export function Logo() {
  const { colorMode } = useColorMode();

  const getImage = () => (colorMode === "dark" ? whiteOwlImg : owlImg);

  return (
    <>
      <div className="logo-img-container">
        <img className="img-responsive" src={getImage()} />
      </div>
    </>
  );
}
