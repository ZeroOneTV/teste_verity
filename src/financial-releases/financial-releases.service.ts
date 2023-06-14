import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FinancialReleases } from './financial-releases.entity';

@Injectable()
export class FinancialReleasesService {
  constructor(
    @InjectRepository(FinancialReleases)
    private financialReleasesRepository: Repository<FinancialReleases>,
  ) {}

  async create(financialRelease: FinancialReleases): Promise<FinancialReleases> {
    return this.financialReleasesRepository.save(financialRelease);
  }

  async findOne(id: number): Promise<FinancialReleases> {
    return this.financialReleasesRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    financialRelease: FinancialReleases,
  ): Promise<FinancialReleases> {
    await this.financialReleasesRepository.update(id, financialRelease);
    return this.financialReleasesRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.financialReleasesRepository.delete(id);
  }

  async obterSomaValoresDoDia(data: Date): Promise<number> {
    const inicioDia = new Date(data);
    inicioDia.setHours(0, 0, 0, 0);

    const fimDia = new Date(data);
    fimDia.setHours(23, 59, 59, 999);

    const resultado = await this.financialReleasesRepository
      .createQueryBuilder('financial-releases')
      .select('SUM(CASE WHEN entryCash = TRUE THEN financial-releases.value  ELSE -financial-releases.value END)', 'soma')
      .where('financial-releases.created_at BETWEEN :inicioDia AND :fimDia', {
        inicioDia,
        fimDia,
      })
      .getRawOne();

    return resultado.soma || 0;
  }

}