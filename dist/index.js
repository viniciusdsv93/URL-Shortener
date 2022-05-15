"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
const URLcontroller_1 = require("./controller/URLcontroller");
const express_1 = __importDefault(require("express"));
const api = (0, express_1.default)();
const urlController = new URLcontroller_1.URLController();
api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);
const port = 3001;
api.listen(port, () => {
	console.log("Servidor ouvindo na porta: ", port);
});
//# sourceMappingURL=index.js.map
