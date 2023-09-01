import "./ItemContainerHeading.css";

export default function ItemContainerHeading(props) {
  const heading = `Today is ${props.temp}° F / You may want to wear:`;
  console.log(heading);
  return (
    <div>
      <p className="item-container-heading">{heading}</p>
    </div>
  );
}
