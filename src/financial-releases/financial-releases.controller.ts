import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { FinancialReleasesService } from './financial-releases.service';
import { FinancialReleases } from './financial-releases.entity';

@Controller('financial-releases')
export class FinancialReleasesController {
  constructor(private readonly FinancialReleasesService: FinancialReleasesService) {}

  @Post('createNew')
  create(@Body() FinancialReleases: FinancialReleases): Promise<FinancialReleases> {
    return this.FinancialReleasesService.create(FinancialReleases);
  }

  @Get('find/:id')
  findOne(@Param('id') id: number): Promise<FinancialReleases> {
    return this.FinancialReleasesService.findOne(id);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: number,
    @Body() FinancialReleases: FinancialReleases,
  ): Promise<FinancialReleases> {
    return this.FinancialReleasesService.update(id, FinancialReleases);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.FinancialReleasesService.remove(id);
  }
}
