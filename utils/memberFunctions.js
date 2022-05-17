const { Permissions } = require("discord.js");
const { checkBotRole } = require("./botFunctions");

function giveRole(member, memberRole) {
  if (checkBotRole(member.guild, Permissions.FLAGS.MANAGE_ROLES)) {
    console.log(`GIVE "${memberRole.name}" ROLE -> "${member.displayName}".`);
    member.roles.add(memberRole).catch(console.error);
  } else {
    console.log(`THE BOT DOES NOT HAVE PERMISSIONS TO "MANAGE ROLES".`);
  }
}

module.exports = { giveRole };