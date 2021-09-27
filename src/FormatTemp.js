import "./Weather.css";


export default function FormatTemp(props) {
  console.log(props.unit);
  let cel = "C";
  let fah = "F";
  if (props.unit === "imperial") {
    return (fah);
  } else {
    return (cel);
  }
}