import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToastrService {
    constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
     }

     showSuccess(text: string) {
       this.toastr.success(text, 'Success!');
     }

     showError(text: string) {
       this.toastr.error(text, 'Oops!');
     }

     showWarning(text: string) {
       this.toastr.warning(text, 'Alert!');
     }

     showInfo(text: string) {
       this.toastr.info(text);
     }
}
