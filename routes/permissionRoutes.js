const express = require("express");
const router = express.Router();
const {
  createPermission,
  getPermissions,
  getPermissionById,
  updatePermission,
  deletePermission,
} = require("../controllers/permissionController");

//creating permission
router.post("/", createPermission);

//getting all permissions
router.get("/", getPermissions);

//getting certain permission
router.get("/:id", getPermissionById);

//changing certain permission
router.put("/:id", updatePermission);

//deleting certain permission
router.delete("/:id", deletePermission);

module.exports = router;
