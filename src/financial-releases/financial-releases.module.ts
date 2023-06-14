import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialReleasesService } from './financial-releases.service';
import { FinancialReleasesController } from './financial-releases.controller';
import { FinancialReleases } from './financial-releases.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialReleases])],
  providers: [FinancialReleasesService],
  controllers: [FinancialReleasesController],
  exports: [FinancialReleasesService]
})
export class FinancialReleasesModule {}