import { FinancialReleasesService } from 'src/financial-releases/financial-releases.service';
export declare class ConsolidatedDailyController {
    private financialReleasesService;
    constructor(financialReleasesService: FinancialReleasesService);
    getSumDayValues(data: string): Promise<number>;
}
