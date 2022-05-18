import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SturdyEurekaComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAssetsTest() {
        this.httpClient.get('assets/sample.txt', { responseType: 'text' })
            .subscribe(data => console.log('ADWADAWDA', data));
    }
    ngOnInit() {
        this.getAssetsTest();
    }
}
SturdyEurekaComponent.ɵfac = function SturdyEurekaComponent_Factory(t) { return new (t || SturdyEurekaComponent)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
SturdyEurekaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SturdyEurekaComponent, selectors: [["lib-sturdy-eureka"]], decls: 2, vars: 0, template: function SturdyEurekaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " sturdy-eureka works! adwdawdawdawdadw ");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SturdyEurekaComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sturdy-eureka',
                template: `
    <p>
      sturdy-eureka works! adwdawdawdawdadw
    </p>
  `,
                styles: []
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1cmR5LWV1cmVrYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zdHVyZHktZXVyZWthL3NyYy9saWIvc3R1cmR5LWV1cmVrYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBWWxELE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7SUFFeEMsYUFBYTtRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUMsQ0FBQzthQUMzRCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OzBGQVhVLHFCQUFxQjswREFBckIscUJBQXFCO1FBUDlCLHlCQUFHO1FBQ0QsdURBQ0Y7UUFBQSxpQkFBSTs7dUZBS0sscUJBQXFCO2NBVmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxNQUFNLEVBQUUsRUFDUDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zdHVyZHktZXVyZWthJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHN0dXJkeS1ldXJla2Egd29ya3MhIGFkd2Rhd2Rhd2Rhd2RhZHdcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFN0dXJkeUV1cmVrYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cblxuICBwdWJsaWMgZ2V0QXNzZXRzVGVzdCgpOiB2b2lkIHtcbiAgICB0aGlzLmh0dHBDbGllbnQuZ2V0KCdhc3NldHMvc2FtcGxlLnR4dCcsIHtyZXNwb25zZVR5cGU6ICd0ZXh0J30pXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZygnQURXQURBV0RBJywgZGF0YSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5nZXRBc3NldHNUZXN0KCk7XG4gIH1cblxufVxuIl19