import ProgressBar from "./common/ProgressBar";

export default function Skills() {
  // Set the completed percentage as a string with a percentage sign (e.g., '80%')

  return (
    <div>
      <ProgressBar
        skill={"Development"}
        completedPercentage={"85%"}
        styles={{ backgroundColor: "blue", borderRadius: "4px" }}
      />

      <ProgressBar skill={"Design"} completedPercentage={"90%"} styles={{ backgroundColor: "orange", borderRadius: "4px" }}/>
      <ProgressBar skill={"Bug Fixing"} completedPercentage={"70%"} styles={{ backgroundColor: "red", borderRadius: "4px" }}/>
      <ProgressBar skill={"Theme Development"} completedPercentage={"75%"} />
    </div>
  );
}
