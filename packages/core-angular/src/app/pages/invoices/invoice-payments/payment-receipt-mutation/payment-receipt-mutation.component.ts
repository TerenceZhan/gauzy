import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { PaymentService } from './../../../../@core/services/payment.service';
import { TranslationBaseComponent } from './../../../../@shared/language-base/translation-base.component';
import { IInvoice, IPayment } from '@gauzy/contracts';

@Component({
	selector: 'ga-payment-receipt-mutation',
	templateUrl: './payment-receipt-mutation.component.html'
})
export class InvoicePaymentReceiptMutatonComponent extends TranslationBaseComponent {
	constructor(
		readonly translateService: TranslateService,
		private paymentService: PaymentService,
		protected dialogRef: NbDialogRef<InvoicePaymentReceiptMutatonComponent>
	) {
		super(translateService);
	}
	invoice: IInvoice;
	payment: IPayment;

	async send() {
		await this.paymentService.sendReceipt(this.payment, this.invoice);
	}

	cancel() {
		this.dialogRef.close();
	}
}
