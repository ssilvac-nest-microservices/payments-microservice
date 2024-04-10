import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-session')
  createPaymentSession(@Body() paymentSessionDto: PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
  }

  @Get('success')
  success() {
    return 'payment successful';
  }

  @Get('cancelled')
  cancelPayment() {
    return 'cancel payment';
  }

  @Post('webhook')
  webhook(@Req() req, @Res() res) {
    return this.paymentsService.stripeWebhook(req, res);
  }
}
