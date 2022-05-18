import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class SturdyEurekaService {
    constructor() { }
}
SturdyEurekaService.ɵfac = function SturdyEurekaService_Factory(t) { return new (t || SturdyEurekaService)(); };
SturdyEurekaService.ɵprov = ɵɵdefineInjectable({ token: SturdyEurekaService, factory: SturdyEurekaService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SturdyEurekaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SturdyEurekaComponent {
    constructor() { }
    ngOnInit() {
    }
}
SturdyEurekaComponent.ɵfac = function SturdyEurekaComponent_Factory(t) { return new (t || SturdyEurekaComponent)(); };
SturdyEurekaComponent.ɵcmp = ɵɵdefineComponent({ type: SturdyEurekaComponent, selectors: [["lib-sturdy-eureka"]], decls: 2, vars: 0, template: function SturdyEurekaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " sturdy-eureka works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SturdyEurekaComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sturdy-eureka',
                template: `
    <p>
      sturdy-eureka works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class SturdyEurekaModule {
}
SturdyEurekaModule.ɵfac = function SturdyEurekaModule_Factory(t) { return new (t || SturdyEurekaModule)(); };
SturdyEurekaModule.ɵmod = ɵɵdefineNgModule({ type: SturdyEurekaModule });
SturdyEurekaModule.ɵinj = ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SturdyEurekaModule, { declarations: [SturdyEurekaComponent], exports: [SturdyEurekaComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SturdyEurekaModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SturdyEurekaComponent
                ],
                imports: [],
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
