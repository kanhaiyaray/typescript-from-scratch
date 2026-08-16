enum AccessRole {
  Viewer = "VIEWER",
  Editor = "EDITOR",
  Owner = "OWNER"
}

type AccessRoleUnion =
  | "VIEWER"
  | "EDITOR"
  | "OWNER";

const enumRole: AccessRole = AccessRole.Editor;
const unionRole: AccessRoleUnion = "OWNER";

console.log("Enum role:", enumRole);
console.log("Union role:", unionRole);

function checkPermission(role: AccessRoleUnion): void {
  if (role === "OWNER") {
    console.log("Full access granted.");
  } else if (role === "EDITOR") {
    console.log("Edit access granted.");
  } else {
    console.log("Read-only access granted.");
  }
}

checkPermission("VIEWER");
checkPermission("EDITOR");
checkPermission("OWNER");
