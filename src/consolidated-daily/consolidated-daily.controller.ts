import { Body, Controller, Get, Param } from '@nestjs/common';
import { FinancialReleasesService } from 'src/financial-releases/financial-releases.service';


@Controller('consolidated-daily')
export class ConsolidatedDailyController {
  constructor(private financialReleasesService: FinancialReleasesService) {}

  @Get('soma-valores')
  async getSumDayValues(@Body() data: string): Promise<number> {
    const dateFormated = new Date(data);
    const somaValores = await this.financialReleasesService.obterSomaValoresDoDia(
      dateFormated,
    );

    return somaValores;
  }
}