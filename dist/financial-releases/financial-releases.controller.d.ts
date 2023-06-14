import { FinancialReleasesService } from './financial-releases.service';
import { FinancialReleases } from './financial-releases.entity';
export declare class FinancialReleasesController {
    private readonly FinancialReleasesService;
    constructor(FinancialReleasesService: FinancialReleasesService);
    create(FinancialReleases: FinancialReleases): Promise<FinancialReleases>;
    findOne(id: number): Promise<FinancialReleases>;
    update(id: number, FinancialReleases: FinancialReleases): Promise<FinancialReleases>;
    remove(id: number): Promise<void>;
}
