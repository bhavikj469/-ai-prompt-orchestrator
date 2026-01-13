import platforms from "../config/platforms";
import dependencyLevels from "../config/dependencyLevels";

function buildConstraints(platformId, dependencyLevelId) {
  const platform = platforms.find((p) => p.id === platformId);
  const dependency = dependencyLevels.find((d) => d.id === dependencyLevelId);

  let constraints = [];

  if (platform) {
    constraints.push(platform.constraint);
  }

  if (dependency) {
    constraints.push(dependency.instruction);
  }

  return constraints.join(" ");
}

export default buildConstraints;
