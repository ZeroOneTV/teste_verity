import { Repository } from 'typeorm';
import { FinancialReleases } from './financial-releases.entity';
export declare class FinancialReleasesService {
    private financialReleasesRepository;
    constructor(financialReleasesRepository: Repository<FinancialReleases>);
    create(financialRelease: FinancialReleases): Promise<FinancialReleases>;
    findOne(id: number): Promise<FinancialReleases>;
    update(id: number, financialRelease: FinancialReleases): Promise<FinancialReleases>;
    remove(id: number): Promise<void>;
    obterSomaValoresDoDia(data: Date): Promise<number>;
}
