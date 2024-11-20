<?php

namespace App\Enums;

enum PaymentType: string
{
  case MONEY = 'money';
  case PIX = 'pix';
}
