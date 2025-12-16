import Navigation from "../Navigation";

export default function NavigationExample() {
  return <Navigation activeSection="about" onNavClick={(s) => console.log("Nav:", s)} />;
}
