"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialReleasesController = void 0;
const common_1 = require("@nestjs/common");
const financial_releases_service_1 = require("./financial-releases.service");
const financial_releases_entity_1 = require("./financial-releases.entity");
let FinancialReleasesController = exports.FinancialReleasesController = class FinancialReleasesController {
    constructor(FinancialReleasesService) {
        this.FinancialReleasesService = FinancialReleasesService;
    }
    create(FinancialReleases) {
        return this.FinancialReleasesService.create(FinancialReleases);
    }
    findOne(id) {
        return this.FinancialReleasesService.findOne(id);
    }
    update(id, FinancialReleases) {
        return this.FinancialReleasesService.update(id, FinancialReleases);
    }
    remove(id) {
        return this.FinancialReleasesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [financial_releases_entity_1.FinancialReleases]),
    __metadata("design:returntype", Promise)
], FinancialReleasesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FinancialReleasesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, financial_releases_entity_1.FinancialReleases]),
    __metadata("design:returntype", Promise)
], FinancialReleasesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FinancialReleasesController.prototype, "remove", null);
exports.FinancialReleasesController = FinancialReleasesController = __decorate([
    (0, common_1.Controller)('financial-releases'),
    __metadata("design:paramtypes", [financial_releases_service_1.FinancialReleasesService])
], FinancialReleasesController);
//# sourceMappingURL=financial-releases.controller.js.map