import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {
  @Get()
  check(): string {
    return 'Payments Webhook is up and running!';
  }
}
