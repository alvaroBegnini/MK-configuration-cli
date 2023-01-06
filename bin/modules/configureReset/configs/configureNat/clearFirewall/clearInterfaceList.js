"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function clearInterfaceList(client) {
    return __awaiter(this, void 0, void 0, function* () {
        const interfaceLists = yield client.menu("/interface list").getAll();
        const interfaceListMembers = yield client.menu("/interface list member").getAll();
        for (const interfaceList of interfaceLists) {
            try {
                const interfaceListModel = client.model(interfaceList);
                yield interfaceListModel.remove();
            }
            catch (e) { }
        }
        for (const interfaceListMember of interfaceListMembers) {
            try {
                const interfaceListMemberModel = client.model(interfaceListMember);
                yield interfaceListMemberModel.remove();
            }
            catch (e) { }
        }
    });
}
exports.default = clearInterfaceList;
