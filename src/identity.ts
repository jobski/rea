/**
 * Canonical public identity shared by packaging, setup, MCP, and skill install.
 * Centralization prevents persistent client registrations from drifting from
 * the npm package or executable exposed in package.json.
 */
/**
 * Launcher spec written into client registrations. The npm alias form cannot be
 * satisfied by a local `package.json` of the same name and version, which a bare
 * pinned spec can: npm then skips the install and the `rea` bin is never present.
 */
const LAUNCH_PACKAGE_SPECIFIER = `${PACKAGE_METADATA.name}@npm:${PACKAGE_METADATA.name}@${PACKAGE_METADATA.version}`;

/**
 * Canonical public identity shared by packaging, setup, MCP, and skill install.
 * Centralization prevents persistent client registrations from drifting from
 * the npm package or executable exposed in package.json.
 */
export const PRODUCT_IDENTITY = {
  displayName: "REA",
  packageName: PACKAGE_METADATA.name,
  packageSpecifier: `${PACKAGE_METADATA.name}@latest`,
  registrationPackageSpecifier: `${PACKAGE_METADATA.name}@${PACKAGE_METADATA.version}`,
  registrationLaunchSpecifier: LAUNCH_PACKAGE_SPECIFIER,
  packageVersion: PACKAGE_METADATA.version,
  cliBinary: "rea",
  mcpCommand: `npx -y ${LAUNCH_PACKAGE_SPECIFIER} mcp`,
  mcpServerKey: "rea",
  skillName: "reverse-engineer-anything",
  skillVersion: PACKAGE_METADATA.skillVersion,
  configFileName: "rea.json",
} as const;

/** Exact SDK package identities, distinct from negotiated protocol version. */
export const SDK_IDENTITY = {
  server: PACKAGE_METADATA.serverSdkVersion,
  client_test: PACKAGE_METADATA.clientSdkVersion,
  core: PACKAGE_METADATA.coreSdkVersion,
} as const;
import { PACKAGE_METADATA } from "./generatedPackageMetadata.js";
