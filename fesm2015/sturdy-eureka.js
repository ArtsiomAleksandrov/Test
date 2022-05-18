import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

class SturdyEurekaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAssetsTest() {
        this.httpClient.get('assets/sample.txt', { responseType: 'text' })
            .subscribe(data => console.log(data));
    }
}
SturdyEurekaService.ɵfac = function SturdyEurekaService_Factory(t) { return new (t || SturdyEurekaService)(ɵɵinject(HttpClient)); };
SturdyEurekaService.ɵprov = ɵɵdefineInjectable({ token: SturdyEurekaService, factory: SturdyEurekaService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SturdyEurekaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

class SturdyEurekaComponent {
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
SturdyEurekaComponent.ɵfac = function SturdyEurekaComponent_Factory(t) { return new (t || SturdyEurekaComponent)(ɵɵdirectiveInject(HttpClient)); };
SturdyEurekaComponent.ɵcmp = ɵɵdefineComponent({ type: SturdyEurekaComponent, selectors: [["lib-sturdy-eureka"]], decls: 2, vars: 0, template: function SturdyEurekaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " sturdy-eureka works! adwdawdawdawdadw ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SturdyEurekaComponent, [{
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
    }], function () { return [{ type: HttpClient }]; }, null); })();

class SturdyEurekaModule {
}
SturdyEurekaModule.ɵfac = function SturdyEurekaModule_Factory(t) { return new (t || SturdyEurekaModule)(); };
SturdyEurekaModule.ɵmod = ɵɵdefineNgModule({ type: SturdyEurekaModule });
SturdyEurekaModule.ɵinj = ɵɵdefineInjector({ imports: [[
            CommonModule,
            HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SturdyEurekaModule, { declarations: [SturdyEurekaComponent], imports: [CommonModule,
        HttpClientModule], exports: [SturdyEurekaComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SturdyEurekaModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SturdyEurekaComponent
                ],
                imports: [
                    CommonModule,
                    HttpClientModule
                ],
                exports: [
                    SturdyEurekaComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of sturdy-eureka
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SturdyEurekaComponent, SturdyEurekaModule, SturdyEurekaService };
//# sourceMappingURL=sturdy-eureka.js.map
