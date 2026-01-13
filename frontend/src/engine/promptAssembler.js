import buildSystemRole from "./buildSystemRole";
import buildObjective from "./buildObjective";
import buildConstraints from "./buildConstraints";
import buildOutputFormat from "./buildOutputFormat";

function promptAssembler({
  roleId,
  taskId,
  dependencyLevelId,
  platformId
}) {
  const systemRole = buildSystemRole(roleId);
  const objective = buildObjective(taskId);
  const constraints = buildConstraints(platformId, dependencyLevelId);
  const outputFormat = buildOutputFormat(dependencyLevelId);

  const prompt = `
SYSTEM ROLE:
${systemRole}

OBJECTIVE:
${objective}

CONSTRAINTS:
${constraints}

OUTPUT FORMAT:
${outputFormat}
`;

  return prompt.trim();
}

export default promptAssembler;
