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
exports.FinancialReleasesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const financial_releases_entity_1 = require("./financial-releases.entity");
let FinancialReleasesService = exports.FinancialReleasesService = class FinancialReleasesService {
    constructor(financialReleasesRepository) {
        this.financialReleasesRepository = financialReleasesRepository;
    }
    async create(financialRelease) {
        return this.financialReleasesRepository.save(financialRelease);
    }
    async findOne(id) {
        return this.financialReleasesRepository.findOne({ where: { id } });
    }
    async update(id, financialRelease) {
        await this.financialReleasesRepository.update(id, financialRelease);
        return this.financialReleasesRepository.findOne({ where: { id } });
    }
    async remove(id) {
        await this.financialReleasesRepository.delete(id);
    }
    async obterSomaValoresDoDia(data) {
        const inicioDia = new Date(data);
        inicioDia.setHours(0, 0, 0, 0);
        const fimDia = new Date(data);
        fimDia.setHours(23, 59, 59, 999);
        const resultado = await this.financialReleasesRepository
            .createQueryBuilder('financial-releases')
            .select('SUM(financial-releases.value)', 'soma')
            .where('financial-releases.created_at BETWEEN :inicioDia AND :fimDia', {
            inicioDia,
            fimDia,
        })
            .getRawOne();
        return resultado.soma || 0;
    }
};
exports.FinancialReleasesService = FinancialReleasesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(financial_releases_entity_1.FinancialReleases)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FinancialReleasesService);
//# sourceMappingURL=financial-releases.service.js.map