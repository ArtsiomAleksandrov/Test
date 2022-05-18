(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('sturdy-eureka', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['sturdy-eureka'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var SturdyEurekaService = /** @class */ (function () {
        function SturdyEurekaService() {
        }
        return SturdyEurekaService;
    }());
    SturdyEurekaService.ɵfac = function SturdyEurekaService_Factory(t) { return new (t || SturdyEurekaService)(); };
    SturdyEurekaService.ɵprov = i0.ɵɵdefineInjectable({ token: SturdyEurekaService, factory: SturdyEurekaService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SturdyEurekaService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var SturdyEurekaComponent = /** @class */ (function () {
        function SturdyEurekaComponent() {
        }
        SturdyEurekaComponent.prototype.ngOnInit = function () {
        };
        return SturdyEurekaComponent;
    }());
    SturdyEurekaComponent.ɵfac = function SturdyEurekaComponent_Factory(t) { return new (t || SturdyEurekaComponent)(); };
    SturdyEurekaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SturdyEurekaComponent, selectors: [["lib-sturdy-eureka"]], decls: 2, vars: 0, template: function SturdyEurekaComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " sturdy-eureka works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SturdyEurekaComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-sturdy-eureka',
                        template: "\n    <p>\n      sturdy-eureka works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var SturdyEurekaModule = /** @class */ (function () {
        function SturdyEurekaModule() {
        }
        return SturdyEurekaModule;
    }());
    SturdyEurekaModule.ɵfac = function SturdyEurekaModule_Factory(t) { return new (t || SturdyEurekaModule)(); };
    SturdyEurekaModule.ɵmod = i0.ɵɵdefineNgModule({ type: SturdyEurekaModule });
    SturdyEurekaModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SturdyEurekaModule, { declarations: [SturdyEurekaComponent], exports: [SturdyEurekaComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SturdyEurekaModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SturdyEurekaComponent
                        ],
                        imports: [],
                        exports: [
                            SturdyEurekaComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of sturdy-eureka
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SturdyEurekaComponent = SturdyEurekaComponent;
    exports.SturdyEurekaModule = SturdyEurekaModule;
    exports.SturdyEurekaService = SturdyEurekaService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sturdy-eureka.umd.js.map
