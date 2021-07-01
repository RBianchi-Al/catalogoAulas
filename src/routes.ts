import { Router } from "express";
import { AlterClassesController } from "./controllers/AlterClassesControllers";
import { AlterModulesController } from "./controllers/AlterModulesControllers";
import { AlterUserController } from "./controllers/AlterUsersControllers";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateClassesController } from "./controllers/CreateClassesControllers";
import { CreateModulesController } from "./controllers/CreateModulesControllers";
import { CreateUserController } from "./controllers/CreateUsersControllers";
import { DeleteClassesControllers } from "./controllers/DeleteClassesControllers";
import { DeleteModulesControllers } from "./controllers/DeleteModulesControllers";
import { DeleteUsersControllers } from "./controllers/DeleteUsersControllers";
import { ListClassesControllers } from "./controllers/ListClassesControllers";
import { ListModulesControllers } from "./controllers/ListModulesControllers";
import { ListUsersController } from "./controllers/ListUsersControllers";
import { ensureAdmin } from "./middlewares/ensureAdmin"; 
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router()

// Users
const authenticateUserController = new AuthenticateUserController();
const listUsersControllers = new ListUsersController();
const createUserController = new CreateUserController();
const deleteUserController = new DeleteUsersControllers();
const alterUsersControllers = new AlterUserController();

router.get("/users", listUsersControllers.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.delete("/users/:id", deleteUserController.deleteUser);
router.put("/users/:id", alterUsersControllers.handle);

// Modules
const createModulesControllers = new CreateModulesController();
const listModulesControllers = new ListModulesControllers();
const deleteModulesControllers = new DeleteModulesControllers();
const alterModulesControllers = new AlterModulesController();

router.post("/modules", createModulesControllers.handle);
router.get("/modules", listModulesControllers.handle);
router.delete("/modules/:id", deleteModulesControllers.handle);
router.put("/modules/:id", alterModulesControllers.handle);

// Classes
const createClassesControllers = new CreateClassesController();
const listClassesControllers = new ListClassesControllers();
const deleteClassesControllers = new DeleteClassesControllers();
const alterClassesControllers = new AlterClassesController();

router.post("/classes", ensureAuthenticated, createClassesControllers.handle);
router.get("/classes", listClassesControllers.handle );
router.delete("/classes/:id", deleteClassesControllers.handle);
router.put("/classes/:id", alterClassesControllers.handle); 


export {router}