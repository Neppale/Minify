import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/services/prisma.service';
import { CheckAvailableShortenedUrlPrisma } from './repository/check-available-shortened-url.prisma';
import { CreateShortenedUrlPrisma } from './repository/create-shortened-url.prisma';
import { CreateShortenedUrlService } from './services/create-shortened-url.service';
import { UrlController } from './url.controller';
import { GetUrlByShortCodeService } from './services/get-url-by-short-code.service';
import { GetUrlByShortCodePrisma } from './repository/get-url-by-short-code.prisma';
import { GetUrlStatisticsService } from './services/get-url-statistics.service';

@Module({
  imports: [],
  controllers: [UrlController],
  providers: [
    PrismaService,
    CreateShortenedUrlService,
    CheckAvailableShortenedUrlPrisma,
    CreateShortenedUrlPrisma,
    GetUrlByShortCodePrisma,
    GetUrlByShortCodeService,
    GetUrlStatisticsService,
  ],
})
export class UrlModule {}
