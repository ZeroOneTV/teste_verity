import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FinancialReleasesModule } from './financial-releases/financial-releases.module';
import { ConsolidatedDailyController } from './consolidated-daily/consolidated-daily.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FinancialReleasesModule
  ],
  controllers: [AppController,ConsolidatedDailyController],
  providers: [AppService],
})

export class AppModule {}