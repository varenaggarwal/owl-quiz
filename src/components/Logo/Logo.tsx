import "./logo.css";
import { useColorMode } from "@chakra-ui/color-mode";
import owlImg from "../../assets/owl.png";
import whiteOwlImg from "../../assets/white-owl.png";

export function Logo() {
  const { colorMode } = useColorMode();

  const getImage = () => (colorMode === "dark" ? whiteOwlImg : owlImg);

  return (
    <>
      <div className="logo-img-container">
        <img className="img-responsive" alt="Logo" src={getImage()} />
      </div>
    </>
  );
}
