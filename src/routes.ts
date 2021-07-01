import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateClassesController } from "./controllers/CreateClassesControllers";
import { CreateModulesController } from "./controllers/CreateModulesControllers";
import { CreateUserController } from "./controllers/CreateUsersControllers";
import { ListClassesControllers } from "./controllers/ListClassesControllers";
import { ListModulesControllers } from "./controllers/ListModulesControllers";
import { ListUsersController } from "./controllers/ListUsersControllers";
import { ensureAdmin } from "./middlewares/ensureAdmin"; 
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router()

// Users
const authenticateUserController = new AuthenticateUserController();
const listUsersControllers = new ListUsersController()
const createUserController = new CreateUserController();
router.get("/users", listUsersControllers.handle);

router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handle)

// Modules
const createModulesControllers = new CreateModulesController()
const listModulesControllers = new ListModulesControllers()
router.post("/modules", ensureAuthenticated, ensureAdmin, createModulesControllers.handle)
router.get("/modules", listModulesControllers.handle)

// Classes
const createClassesControllers = new CreateClassesController()
const listClassesControllers = new ListClassesControllers()
router.post("/classes", ensureAuthenticated, createClassesControllers.handle)
router.get("/classes", listClassesControllers.handle )

export {router}