import roles from "../config/roles";

function buildSystemRole(roleId) {
  const role = roles.find((r) => r.id === roleId);

  if (!role) {
    return "You are a helpful AI assistant.";
  }

  return role.systemRole;
}

export default buildSystemRole;
