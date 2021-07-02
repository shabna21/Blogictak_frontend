(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\benedict\Desktop\TechBlog_Project\Front End\src\main.ts */"zUnb");


/***/ }),

/***/ "2JoX":
/*!**********************************************!*\
  !*** ./src/app/stlogin/stlogin.component.ts ***!
  \**********************************************/
/*! exports provided: StloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StloginComponent", function() { return StloginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/student.service */ "yDSY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function StloginComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter a valid Email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StloginComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StloginComponent_div_32_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stloginForm.controls.email.errors.pattern);
} }
class StloginComponent {
    constructor(fb, login, router) {
        this.fb = fb;
        this.login = login;
        this.router = router;
        this.student = {
            email: '',
            password: ''
        };
        this.stloginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() {
        localStorage.clear();
    }
    stlogin() {
        console.log(this.student);
        this.login.studentlog(this.student)
            .subscribe(res => {
            localStorage.setItem('token', res.token);
            localStorage.setItem('stdata', JSON.stringify(res.stdata));
            this.router.navigate(['/studenthome']);
        }, err => {
            console.log(err);
            document.getElementById('alert').innerHTML = "<div class=alert&#32;alert-danger role=alert>Enter a Valid Email or Password!</div>";
            this.stloginForm.reset();
        });
    }
}
StloginComponent.ɵfac = function StloginComponent_Factory(t) { return new (t || StloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
StloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StloginComponent, selectors: [["app-stlogin"]], decls: 53, vars: 5, consts: [[1, "wrapper", "row1"], ["id", "header", 1, "hoc", "clear"], ["id", "logo", 1, "fl_left"], ["routerLink", ""], ["id", "mainav", 1, "fl_right"], [1, "clear"], ["routerLink", "#", 1, "drop"], ["href", "#"], ["href", "/adminlogin"], [1, "wrapper", "row3"], [1, "hoc", "container", "clear"], [1, "login"], [2, "text-align", "center", "font-size", "x-large"], [3, "formGroup", "ngSubmit"], ["id", "alert", 2, "font-weight", "400"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "name", "email", "placeholder", "Enter email", "formControlName", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col danger", 4, "ngIf"], ["for", "exampleInputPassword1"], ["id", "show_hide_password", 1, "input-group", "mb-3"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Password", "name", "password", "formControlName", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-secondary"], ["aria-hidden", "true", 1, "fa", "fa-eye-slash"], ["type", "submit", "value", "LOGIN", 1, "btn", "btn-primary", 3, "disabled"], [1, "new"], ["href", "/studentregister"], [1, "wrapper", "row5", "foot"], ["id", "copyright", 1, "hoc", "clear"], [1, "fl_left"], [1, "fl_right"], [1, "fa", "fa-envelope-o"], [1, "col", "danger"], ["style", "font-weight: 400;", 4, "ngIf"], [2, "font-weight", "400"]], template: function StloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ICTAK Tech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Student/Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Student / Trainer Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function StloginComponent_Template_form_ngSubmit_26_listener() { return ctx.stlogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StloginComponent_Template_input_ngModelChange_31_listener($event) { return ctx.student.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, StloginComponent_div_32_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StloginComponent_Template_input_ngModelChange_38_listener($event) { return ctx.student.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Create New Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Copyright \u00A9 2021 - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " blogictak@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.stloginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.student.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stloginForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.student.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.stloginForm.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".login[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    background-color: #34495E;\r\n    padding: 5% 5% 5% 5%;\r\n    margin: 0% 30% 0% 30%;\r\n    color: white;\r\n    border-radius: 2em;\r\n}\r\n.new[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 6.4em;\r\n}\r\n.new[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    border: 2px solid #34495E;\r\n    padding: 1em;\r\n    border-radius: 1em;\r\n    background-color: #34495E;\r\n    color: white;\r\n}\r\n.new[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0bG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3Rsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVFO1xyXG4gICAgcGFkZGluZzogNSUgNSUgNSUgNSU7XHJcbiAgICBtYXJnaW46IDAlIDMwJSAwJSAzMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbn1cclxuLm5ld3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDYuNGVtO1xyXG59XHJcbi5uZXcgYXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0NDk1RTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NUU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm5ldyBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "3HwH":
/*!********************************************!*\
  !*** ./src/app/adhome/adhome.component.ts ***!
  \********************************************/
/*! exports provided: AdhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdhomeComponent", function() { return AdhomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/blog.service */ "GX0M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/student.service */ "yDSY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AdhomeComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdhomeComponent_div_29_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const data_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.update(data_r4._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdhomeComponent_div_29_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const data_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.delete(data_r4._id, data_r4.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Disapprove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "About: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Content: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("writer: ", data_r4.writer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.content);
} }
function AdhomeComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter a valid Email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdhomeComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdhomeComponent_div_48_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.adregisterForm.controls.email.errors.pattern);
} }
function AdhomeComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " password: minimum length 8. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdhomeComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdhomeComponent_div_57_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.adregisterForm.controls.password.errors.minlength);
} }
function AdhomeComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "About: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Content: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("writer: ", data_r10.writer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r10.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r10.content);
} }
class AdhomeComponent {
    constructor(blogdata, router, fb, register) {
        this.blogdata = blogdata;
        this.router = router;
        this.fb = fb;
        this.register = register;
        this.admin = {
            _id: '',
            name: '',
            email: '',
            password: ''
        };
        this.addadmin = {
            name: '',
            email: '',
            password: ''
        };
        this.allblogs = [{
                _id: '',
                title: '',
                writer: '',
                about: '',
                content: '',
                writerid: ''
            }];
        this.approvedblogs = [{
                _id: '',
                title: '',
                writer: '',
                about: '',
                content: '',
                writerid: ''
            }];
        this.adregisterForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.admin = JSON.parse(localStorage.getItem('addata'));
        this.blogdata.allblogs().subscribe((data) => {
            this.allblogs = JSON.parse(JSON.stringify(data));
        });
        this.blogdata.blogs().subscribe((data) => {
            this.approvedblogs = JSON.parse(JSON.stringify(data));
        });
        document.getElementById('approve').removeAttribute("hidden");
        document.getElementById('adminregister').setAttribute("hidden", "");
        document.getElementById('blogs').setAttribute("hidden", "");
    }
    update(id) {
        console.log(id);
        this.blogdata.updateblog(id).subscribe((res) => {
            console.log(res);
        });
        window.location.reload();
    }
    adregister() {
        this.register.adminreg(this.addadmin).subscribe(res => {
            console.log(res);
        }, err => {
            if (err.status == 401) {
                document.getElementById('alert').innerHTML = "<div class=alert&#32;alert-danger role=alert>Already SignUp with this Email Id.<br>Use another Email Id.</div>";
                this.adregisterForm.reset();
            }
            else {
                document.getElementById('alert').innerHTML = "<div class=alert&#32;alert-success role=alert>Admin Added</div>";
                setTimeout(function () { document.getElementById('alert').innerHTML = ''; }, 2000);
                this.adregisterForm.reset();
            }
        });
    }
    approve() {
        document.getElementById('approve').removeAttribute("hidden");
        document.getElementById('adminregister').setAttribute("hidden", "");
        document.getElementById('blogs').setAttribute("hidden", "");
    }
    addnewadmin() {
        document.getElementById('adminregister').removeAttribute("hidden");
        document.getElementById('approve').setAttribute("hidden", "");
        document.getElementById('blogs').setAttribute("hidden", "");
    }
    allblog() {
        document.getElementById('blogs').removeAttribute("hidden");
        document.getElementById('approve').setAttribute("hidden", "");
        document.getElementById('adminregister').setAttribute("hidden", "");
    }
    delete(id, tit) {
        var r = confirm("Are your sure you want to disapprove -" + tit);
        if (r == true) {
            this.blogdata.deleteblog(id).subscribe((res) => {
                console.log(res);
            });
            window.location.reload();
        }
    }
}
AdhomeComponent.ɵfac = function AdhomeComponent_Factory(t) { return new (t || AdhomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"])); };
AdhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdhomeComponent, selectors: [["app-adhome"]], decls: 75, vars: 10, consts: [[1, "wrapper", "row1"], ["id", "header", 1, "hoc", "clear"], ["id", "logo", 1, "fl_left"], ["routerLink", ""], ["id", "mainav", 1, "fl_right"], [1, "clear"], [1, "fas", "fa-user-alt", 2, "font-size", "large"], [3, "click"], ["href", "/adminlogin"], ["id", "approve", 1, "wrapper-sthome", "mainbox"], [1, "hoc", "container", "clear"], [2, "text-align", "center"], [2, "background", "#34495E", "margin-top", "-1.5em", "color", "white", "padding", ".5em", "font-family", "'Courier New', Courier, monospace", "font-weight", "bold", "font-size", "xx-large"], [2, "background", "white"], ["style", "font-size: 20px; padding: 1% 10% 1% 10%; text-align: justify; border-top: 2px solid black;", 4, "ngFor", "ngForOf"], ["id", "adminregister", 1, "wrapper-sthome", "mainbox"], [2, "text-align", "center", "background", "#34495E", "margin-top", "-1.5em", "color", "white", "padding", ".5em", "font-family", "'Courier New', Courier, monospace", "font-weight", "bold", "font-size", "xx-large"], [1, "login"], [3, "formGroup", "ngSubmit"], ["id", "alert", 2, "font-weight", "400"], [1, "form-group"], ["for", "exampleInputName1"], ["type", "text", "name", "name", "id", "exampleInputName1", "placeholder", "Enter name", "formControlName", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", "name", "email", "formControlName", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col danger", 4, "ngIf"], ["for", "exampleInputPassword1"], ["id", "show_hide_password", 1, "input-group", "mb-3"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Password", "name", "password", "formControlName", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-secondary"], ["aria-hidden", "true", 1, "fa", "fa-eye-slash"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["id", "blogs", 1, "wrapper-sthome", "mainbox"], [1, "wrapper", "row5", "foot"], ["id", "copyright", 1, "hoc", "clear"], [1, "fl_left"], [1, "fl_right"], [1, "fa", "fa-envelope-o"], [2, "font-size", "20px", "padding", "1% 10% 1% 10%", "text-align", "justify", "border-top", "2px solid black"], [2, "position", "absolute", "right", "0", "margin-right", "18.5em"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [2, "position", "absolute", "right", "0", "margin-right", "13em"], ["type", "submit", 1, "btn", "btn-danger", 3, "click"], [2, "font-size", "small"], [1, "col", "danger"], ["style", "font-weight: 400;", 4, "ngIf"], [2, "font-weight", "400"]], template: function AdhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ICTAK Tech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdhomeComponent_Template_a_click_12_listener() { return ctx.approve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Approve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdhomeComponent_Template_a_click_15_listener() { return ctx.allblog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdhomeComponent_Template_a_click_18_listener() { return ctx.addnewadmin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Add Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AdhomeComponent_div_29_Template, 27, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Add Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdhomeComponent_Template_form_ngSubmit_37_listener() { return ctx.adregister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdhomeComponent_Template_input_ngModelChange_42_listener($event) { return ctx.addadmin.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdhomeComponent_Template_input_ngModelChange_47_listener($event) { return ctx.addadmin.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AdhomeComponent_div_48_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdhomeComponent_Template_input_ngModelChange_54_listener($event) { return ctx.addadmin.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, AdhomeComponent_div_57_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "All Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, AdhomeComponent_div_67_Template, 21, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Copyright \u00A9 2021 - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " blogictak@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.admin.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allblogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.adregisterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addadmin.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addadmin.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.adregisterForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addadmin.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.adregisterForm.controls.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.adregisterForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.approvedblogs);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".login[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    background-color: #34495E;\r\n    padding: 5% 5% 5% 5%;\r\n    margin: 5% 30% 0% 30%;\r\n    color: white;\r\n    border-radius: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFkaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVFO1xyXG4gICAgcGFkZGluZzogNSUgNSUgNSUgNSU7XHJcbiAgICBtYXJnaW46IDUlIDMwJSAwJSAzMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ "4tdJ":
/*!****************************************************!*\
  !*** ./src/app/myblogpage/myblogpage.component.ts ***!
  \****************************************************/
/*! exports provided: MyblogpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyblogpageComponent", function() { return MyblogpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class MyblogpageComponent {
    constructor() {
        this.student = {
            _id: '',
            name: '',
            email: '',
            password: ''
        };
        this.singleblog = {
            _id: '',
            title: '',
            writer: '',
            about: '',
            content: '',
            writerid: '',
            approve: ''
        };
    }
    ngOnInit() {
        this.student = JSON.parse(localStorage.getItem('stdata'));
        this.singleblog = JSON.parse(localStorage.getItem('singleblogdata'));
    }
}
MyblogpageComponent.ɵfac = function MyblogpageComponent_Factory(t) { return new (t || MyblogpageComponent)(); };
MyblogpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyblogpageComponent, selectors: [["app-myblogpage"]], decls: 32, vars: 4, consts: [[1, "wrapper", "row1"], ["id", "header", 1, "hoc", "clear"], ["id", "logo", 1, "fl_left"], ["routerLink", ""], ["id", "mainav", 1, "fl_right"], [1, "clear"], [1, "fas", "fa-user-alt", 2, "font-size", "large"], ["routerLink", "/myblogs/student._id"], [1, "wrapper", "row3"], [1, "hoc", "container", "clear"], [2, "text-align", "center"], [2, "background", "#34495E", "margin-top", "-1.5em", "color", "white", "padding", ".5em", "font-family", "'Courier New', Courier, monospace", "font-weight", "bold", "font-size", "xx-large"], [2, "background", "#34495E", "color", "wheat", "padding-bottom", "1em", "font-size", "20px"], [2, "background", "white"], [2, "font-size", "20px", "padding", "3% 10% 3% 10%", "text-align", "justify"], [2, "padding-left", "10%"], [1, "wrapper", "row5", "foot"], ["id", "copyright", 1, "hoc", "clear"], [1, "fl_left"], [1, "fl_right"], [1, "fa", "fa-envelope-o"]], template: function MyblogpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ICTAK Tech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "main", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Copyright \u00A9 2021 - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " blogictak@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.student.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.singleblog.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Written by ", ctx.singleblog.writer, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.singleblog.content);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteWJsb2dwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeComponent {
    constructor() { }
    ngOnInit() {
        localStorage.clear();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 38, vars: 0, consts: [[1, "wrapper", "row1", "nbar"], ["id", "header", 1, "hoc", "clear"], ["id", "logo", 1, "fl_left"], ["routerLink", ""], ["id", "mainav", 1, "fl_right"], [1, "clear"], ["routerLink", " "], ["routerLink", "#", 1, "drop"], ["href", "/studentlogin"], ["href", "/adminlogin"], [1, "img"], ["src", "/assets/images/image.jpg"], [1, "wrapper", "row3"], [1, "hoc", "container", "clear"], [1, "sectiontitle"], [1, "heading"], [1, "btmspace-50", "justified", 2, "text-align", "center"], [1, "wrapper", "row5"], ["id", "copyright", 1, "hoc", "clear"], [1, "fl_left"], [1, "fl_right"], [1, "fa", "fa-envelope-o"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ICTAK Tech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Student/Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "main", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ICTAK TECH BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Welcome to Ictak Tech Blog. This is an open forum for ICTAK students to share their ideas, poetry, stories, articles whatnot. Students can gather informations and can create their own blog. Students can post their views and thoughts and analyze themselves.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Copyright \u00A9 2021 - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " blogictak@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GX0M":
/*!*****************************************!*\
  !*** ./src/app/service/blog.service.ts ***!
  \*****************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class BlogService {
    constructor(http) {
        this.http = http;
        this.stblogUrl = "/api";
    }
    saveblog(blog) {
        return this.http.post(this.stblogUrl + "/saveblog", blog);
    }
    blogs() {
        return this.http.get(this.stblogUrl + "/blogs");
    }
    singleblog(id) {
        return this.http.get(this.stblogUrl + "/" + id);
    }
    myblog(id) {
        return this.http.get(this.stblogUrl + "/blog/" + id);
    }
    updateblog(id) {
        return this.http.get(this.stblogUrl + "/update/" + id);
    }
    allblogs() {
        return this.http.get(this.stblogUrl + "/all/blogs");
    }
    approveblog(id) {
        return this.http.get(this.stblogUrl + "/approveblog/" + id);
    }
    deleteblog(id) {
        return this.http.delete(this.stblogUrl + "/remove/" + id);
    }
    updateblogcontent(blogcontent) {
        return this.http.put(this.stblogUrl + "/updateblog/", blogcontent);
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "StNR":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/blog.service */ "GX0M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class UploadComponent {
    constructor(fb, blogdata, router) {
        this.fb = fb;
        this.blogdata = blogdata;
        this.router = router;
        this.student = {
            _id: '',
            name: '',
            email: '',
            password: ''
        };
        this.blog = {
            title: '',
            writer: '',
            about: '',
            content: '',
            writerid: '',
            approve: ''
        };
        this.blogForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            about: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
        this.student = JSON.parse(localStorage.getItem('stdata'));
    }
    blogsav(stid, stname) {
        this.blog.writerid = stid;
        this.blog.writer = stname;
        this.blog.approve = 'false';
        this.blogdata.saveblog(this.blog).subscribe(res => {
            console.log(res);
        }, err => {
            if (err.status == 200) {
                this.router.navigate(['/studenthome']);
            }
        });
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], decls: 44, vars: 6, consts: [[1, "wrapper", "row1"], ["id", "header", 1, "hoc", "clear"], ["id", "logo", 1, "fl_left"], ["routerLink", ""], ["id", "mainav", 1, "fl_right"], [1, "clear"], [1, "fas", "fa-user-alt", 2, "font-size", "large"], ["routerLink", "/studenthome"], [1, "wrapper", "row3"], [1, "hoc", "container", "clear"], [1, "upform"], [2, "text-align", "center", "font-size", "x-large"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "exampleFormControlInput1"], ["type", "text", "id", "exampleFormControlInput1", "name", "title", "placeholder", "Blog title", "formControlName", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleFormControlTextarea1"], ["id", "exampleFormControlTextarea1", "rows", "2", "placeholder", "Short description about your blog.", "name", "about", "formControlName", "about", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "exampleFormControlTextarea1", "rows", "5", "name", "content", "formControlName", "content", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "wrapper", "row5", "foot"], ["id", "copyright", 1, "hoc", "clear"], [1, "fl_left"], [1, "fl_right"], [1, "fa", "fa-envelope-o"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ICTAK Tech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "main", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Add New Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UploadComponent_Template_form_ngSubmit_19_listener() { return ctx.blogsav(ctx.student._id, ctx.student.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UploadComponent_Template_input_ngModelChange_23_listener($event) { return ctx.blog.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UploadComponent_Template_textarea_ngModelChange_28_listener($event) { return ctx.blog.about = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UploadComponent_Template_textarea_ngModelChange_33_listener($event) { return ctx.blog.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Copyright \u00A9 2021 - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " blogictak@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.student.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.blogForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blog.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blog.about);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blog.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.blogForm.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".upform[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    background-color: #34495E;\r\n    padding: 5% 5% 5% 5%;\r\n    margin: 0% 20% 0% 20%;\r\n    color: white;\r\n    border-radius: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZm9ybXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDk1RTtcclxuICAgIHBhZGRpbmc6IDUlIDUlIDUlIDUlO1xyXG4gICAgbWFyZ2luOiAwJSAyMCUgMCUgMjAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'blogictak';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "WbFe":
/*!****************************************************!*\
  !*** ./src/app/stregister/stregister.component.ts ***!
  \****************************************************/
/*! exports provided: StregisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StregisterComponent", function() { return StregisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/student.service */ "yDSY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function StregisterComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter a valid Email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StregisterComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StregisterComponent_div_37_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stregisterForm.controls.email.errors.pattern);
} }
function StregisterComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " password: minimum length 8. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StregisterComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StregisterComponent_div_46_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.stregisterForm.controls.password.errors.minlength);
} }
class StregisterComponent {
    constructor(fb, register, router) {
        this.fb = fb;
        this.register = register;
        this.router = router;
        this.student = {
            name: '',
            email: '',
            password: ''
        };
        this.stregisterForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
    stregister() {
        this.register.studentreg(this.student).subscribe(res => {
            console.log(res);
        }, err => {
            if (err.status == 401) {
                document.getElementById('alert').innerHTML = "<div class=alert&#32;alert-danger role=alert>Already SignUp with this Email Id.<br>Use another Email Id.</div>";
                this.stregisterForm.reset();
            }
            else {
                this.router.navigate(['/studentlogin']);
            }
        });
    }
}
StregisterComponent.ɵfac = function StregisterComponent_Factory(t) { return new (t || StregisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
StregisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StregisterComponent, selectors: [["app-stregister"]], decls: 57, vars: 7, consts: [[1, "wrapper", "row1"], ["id", "header", 1, "hoc", "clear"], ["id", "logo", 1, "fl_left"], ["routerLink", ""], ["id", "mainav", 1, "fl_right"], [1, "clear"], ["routerLink", "#", 1, "drop"], ["href", "/studentlogin"], ["href", "/adminlogin"], [1, "wrapper", "row3"], [1, "hoc", "container", "clear"], [1, "login"], [2, "text-align", "center", "font-size", "x-large"], [3, "formGroup", "ngSubmit"], ["id", "alert", 2, "font-weight", "400"], [1, "form-group"], ["for", "exampleInputName1"], ["type", "text", "name", "name", "id", "exampleInputName1", "placeholder", "Enter name", "formControlName", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", "name", "email", "formControlName", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col danger", 4, "ngIf"], ["for", "exampleInputPassword1"], ["id", "show_hide_password", 1, "input-group", "mb-3"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Password", "name", "password", "formControlName", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-secondary"], ["aria-hidden", "true", 1, "fa", "fa-eye-slash"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "wrapper", "row5", "foot"], ["id", "copyright", 1, "hoc", "clear"], [1, "fl_left"], [1, "fl_right"], [1, "fa", "fa-envelope-o"], [1, "col", "danger"], ["style", "font-weight: 400;", 4, "ngIf"], [2, "font-weight", "400"]], template: function StregisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ICTAK Tech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Student/Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Student / Trainer Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function StregisterComponent_Template_form_ngSubmit_26_listener() { return ctx.stregister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StregisterComponent_Template_input_ngModelChange_31_listener($event) { return ctx.student.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StregisterComponent_Template_input_ngModelChange_36_listener($event) { return ctx.student.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, StregisterComponent_div_37_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StregisterComponent_Template_input_ngModelChange_43_listener($event) { return ctx.student.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, StregisterComponent_div_46_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Copyright \u00A9 2021 - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " blogictak@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.stregisterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.student.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.student.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stregisterForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.student.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stregisterForm.controls.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.stregisterForm.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".login[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    background-color: #34495E;\r\n    padding: 5% 5% 5% 5%;\r\n    margin: 0% 30% 0% 30%;\r\n    color: white;\r\n    border-radius: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzdHJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NUU7XHJcbiAgICBwYWRkaW5nOiA1JSA1JSA1JSA1JTtcclxuICAgIG1hcmdpbjogMCUgMzAlIDAlIDMwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _stlogin_stlogin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stlogin/stlogin.component */ "2JoX");
/* harmony import */ var _stregister_stregister_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stregister/stregister.component */ "WbFe");
/* harmony import */ var _adlogin_adlogin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adlogin/adlogin.component */ "gTdQ");
/* harmony import */ var _sthome_sthome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sthome/sthome.component */ "iElD");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload/upload.component */ "StNR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _blogpage_blogpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blogpage/blogpage.component */ "sPCO");
/* harmony import */ var _myblogs_myblogs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./myblogs/myblogs.component */ "yELH");
/* harmony import */ var _adhome_adhome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adhome/adhome.component */ "3HwH");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update/update.component */ "xFNw");
/* harmony import */ var _myblogpage_myblogpage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./myblogpage/myblogpage.component */ "4tdJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _stlogin_stlogin_component__WEBPACK_IMPORTED_MODULE_4__["StloginComponent"],
        _stregister_stregister_component__WEBPACK_IMPORTED_MODULE_5__["StregisterComponent"],
        _adlogin_adlogin_component__WEBPACK_IMPORTED_MODULE_6__["AdloginComponent"],
        _sthome_sthome_component__WEBPACK_IMPORTED_MODULE_7__["SthomeComponent"],
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_8__["UploadComponent"],
        _blogpage_blogpage_component__WEBPACK_IMPORTED_MODULE_11__["BlogpageComponent"],
        _myblogs_myblogs_component__WEBPACK_IMPORTED_MODULE_12__["MyblogsComponent"],
        _adhome_adhome_component__WEBPACK_IMPORTED_MODULE_13__["AdhomeComponent"],
        _update_update_component__WEBPACK_IMPORTED_MODULE_14__["UpdateComponent"],
        _myblogpage_myblogpage_component__WEBPACK_IMPORTED_MODULE_15__["MyblogpageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();


/***/ }),

/***/ "gTdQ":
/*!**********************************************!*\
  !*** ./src/app/adlogin/adlogin.component.ts ***!
  \**********************************************/
/*! exports provided: AdloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdloginComponent", function() { return AdloginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/student.service */ "yDSY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AdloginComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter a valid Email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdloginComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdloginComponent_div_32_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.adloginForm.controls.email.errors.pattern);
} }
class AdloginComponent {
    constructor(fb, login, router) {
        this.fb = fb;
        this.login = login;
        this.router = router;
        this.admin = {
            email: '',
            password: ''
        };
        this.adloginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() {
        localStorage.clear();
    }
    adlogin() {
        console.log(this.admin);
        this.login.adminlog(this.admin)
            .subscribe(res => {
            localStorage.setItem('token', res.token);
            localStorage.setItem('addata', JSON.stringify(res.addata));
            this.router.navigate(['/adminhome']);
        }, err => {
            console.log(err);
            document.getElementById('alert').innerHTML = "<div class=alert&#32;alert-danger role=alert>Enter a Valid Email or Password!</div>";
            this.adloginForm.reset();
        });
    }
}
AdloginComponent.ɵfac = function AdloginComponent_Factory(t) { return new (t || AdloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdloginComponent, selectors: [["app-adlogin"]], decls: 50, vars: 5, consts: [[1, "wrapper", "row1"], ["id", "header", 1, "hoc", "clear"], ["id", "logo", 1, "fl_left"], ["routerLink", ""], ["id", "mainav", 1, "fl_right"], [1, "clear"], ["routerLink", "#", 1, "drop"], ["href", "/studentlogin"], ["href", "/adminlogin"], [1, "wrapper", "row3"], [1, "hoc", "container", "clear"], [1, "login"], [2, "text-align", "center", "font-size", "x-large"], [3, "formGroup", "ngSubmit"], ["id", "alert", 2, "font-weight", "400"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "name", "email", "placeholder", "Enter email", "formControlName", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col danger", 4, "ngIf"], ["for", "exampleInputPassword1"], ["id", "show_hide_password", 1, "input-group", "mb-3"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Password", "name", "password", "formControlName", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-secondary"], ["aria-hidden", "true", 1, "fa", "fa-eye-slash"], ["type", "submit", "value", "LOGIN", 1, "btn", "btn-primary", 3, "disabled"], [1, "wrapper", "row5"], ["id", "copyright", 1, "hoc", "clear"], [1, "fl_left"], [1, "fl_right"], [1, "fa", "fa-envelope-o"], [1, "col", "danger"], ["style", "font-weight: 400;", 4, "ngIf"], [2, "font-weight", "400"]], template: function AdloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ICTAK Tech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Student/Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Admin Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdloginComponent_Template_form_ngSubmit_26_listener() { return ctx.adlogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdloginComponent_Template_input_ngModelChange_31_listener($event) { return ctx.admin.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AdloginComponent_div_32_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdloginComponent_Template_input_ngModelChange_38_listener($event) { return ctx.admin.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Copyright \u00A9 2021 - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " blogictak@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.adloginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.admin.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.adloginForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.admin.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.adloginForm.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".login[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    background-color: #34495E;\r\n    padding: 5% 5% 5% 5%;\r\n    margin: 0% 30% 0% 30%;\r\n    color: white;\r\n    border-radius: 2em;\r\n    margin-bottom: 8.8em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoiYWRsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVFO1xyXG4gICAgcGFkZGluZzogNSUgNSUgNSUgNSU7XHJcbiAgICBtYXJnaW46IDAlIDMwJSAwJSAzMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4LjhlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "iElD":
/*!********************************************!*\
  !*** ./src/app/sthome/sthome.component.ts ***!
  \********************************************/
/*! exports provided: SthomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SthomeComponent", function() { return SthomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/blog.service */ "GX0M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SthomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "writer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SthomeComponent_div_22_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const data_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.searchblog(data_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "see more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.writer, "");
} }
class SthomeComponent {
    constructor(blogdata, router) {
        this.blogdata = blogdata;
        this.router = router;
        this.student = {
            _id: '',
            name: '',
            email: '',
            password: ''
        };
        this.blog = [{
                _id: '',
                title: '',
                writer: '',
                about: '',
                content: '',
                writerid: ''
            }];
    }
    ngOnInit() {
        this.student = JSON.parse(localStorage.getItem('stdata'));
        this.blogdata.blogs().subscribe((data) => {
            this.blog = JSON.parse(JSON.stringify(data));
        });
    }
    searchblog(blogid) {
        this.blogdata.singleblog(blogid).subscribe((data) => {
            localStorage.setItem('singleblogdata', JSON.stringify(data));
            this.router.navigate(['/blog/' + blogid]);
        });
    }
    myblog(writerid) {
        localStorage.setItem('writerid', JSON.stringify(writerid));
        this.router.navigate(['/myblogs/' + writerid]);
    }
}
SthomeComponent.ɵfac = function SthomeComponent_Factory(t) { return new (t || SthomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SthomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SthomeComponent, selectors: [["app-sthome"]], decls: 30, vars: 2, consts: [[1, "wrapper", "row1"], ["id", "header", 1, "hoc", "clear"], ["id", "logo", 1, "fl_left"], ["routerLink", ""], ["id", "mainav", 1, "fl_right"], [1, "clear"], [1, "fas", "fa-user-alt", 2, "font-size", "large"], [3, "click"], ["routerLink", "/upload"], ["href", "/studentlogin"], [1, "hoc", "containerx", "clear"], [1, "wrapper-sthome", "mainbox"], ["style", "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;", 4, "ngFor", "ngForOf"], [1, "wrapper", "row5", "foot"], ["id", "copyright", 1, "hoc", "clear"], [1, "fl_left"], [1, "fl_right"], [1, "fa", "fa-envelope-o"], [2, "font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"], [1, "card", "cardspace", 2, "width", "18rem"], [1, "card-body"], [1, "card-text", 2, "font-size", "120%"], [1, "btn", "btn-primary", 3, "click"]], template: function SthomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ICTAK Tech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SthomeComponent_Template_a_click_12_listener() { return ctx.myblog(ctx.student._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "My Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SthomeComponent_div_22_Template, 18, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Copyright \u00A9 2021 - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " blogictak@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.student.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blog);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGhvbWUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "sPCO":
/*!************************************************!*\
  !*** ./src/app/blogpage/blogpage.component.ts ***!
  \************************************************/
/*! exports provided: BlogpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpageComponent", function() { return BlogpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class BlogpageComponent {
    constructor() {
        this.student = {
            id: String,
            name: String,
            email: String,
            password: String
        };
        this.singleblog = {
            _id: '',
            title: '',
            writer: '',
            about: '',
            content: '',
            writerid: '',
            approve: ''
        };
    }
    ngOnInit() {
        this.student = JSON.parse(localStorage.getItem('stdata'));
        this.singleblog = JSON.parse(localStorage.getItem('singleblogdata'));
    }
}
BlogpageComponent.ɵfac = function BlogpageComponent_Factory(t) { return new (t || BlogpageComponent)(); };
BlogpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogpageComponent, selectors: [["app-blogpage"]], decls: 32, vars: 4, consts: [[1, "wrapper", "row1"], ["id", "header", 1, "hoc", "clear"], ["id", "logo", 1, "fl_left"], ["routerLink", ""], ["id", "mainav", 1, "fl_right"], [1, "clear"], [1, "fas", "fa-user-alt", 2, "font-size", "large"], ["routerLink", "/studenthome"], [1, "wrapper", "row3"], [1, "hoc", "container", "clear"], [2, "text-align", "center"], [2, "background", "#34495E", "margin-top", "-1.5em", "color", "white", "padding", ".5em", "font-family", "'Courier New', Courier, monospace", "font-weight", "bold", "font-size", "xx-large"], [2, "background", "#34495E", "color", "wheat", "padding-bottom", "1em", "font-size", "20px"], [2, "background", "white"], [2, "font-size", "20px", "padding", "3% 10% 3% 10%", "text-align", "justify"], [2, "padding-left", "10%"], [1, "wrapper", "row5", "foot"], ["id", "copyright", 1, "hoc", "clear"], [1, "fl_left"], [1, "fl_right"], [1, "fa", "fa-envelope-o"]], template: function BlogpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ICTAK Tech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "main", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Copyright \u00A9 2021 - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " blogictak@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.student.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.singleblog.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Written by ", ctx.singleblog.writer, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.singleblog.content);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9ncGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adhome_adhome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adhome/adhome.component */ "3HwH");
/* harmony import */ var _adlogin_adlogin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adlogin/adlogin.component */ "gTdQ");
/* harmony import */ var _blogpage_blogpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogpage/blogpage.component */ "sPCO");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _myblogpage_myblogpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myblogpage/myblogpage.component */ "4tdJ");
/* harmony import */ var _myblogs_myblogs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myblogs/myblogs.component */ "yELH");
/* harmony import */ var _sthome_sthome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sthome/sthome.component */ "iElD");
/* harmony import */ var _stlogin_stlogin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stlogin/stlogin.component */ "2JoX");
/* harmony import */ var _stregister_stregister_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stregister/stregister.component */ "WbFe");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update/update.component */ "xFNw");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload/upload.component */ "StNR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'studentlogin',
        component: _stlogin_stlogin_component__WEBPACK_IMPORTED_MODULE_8__["StloginComponent"]
    },
    {
        path: 'studentregister',
        component: _stregister_stregister_component__WEBPACK_IMPORTED_MODULE_9__["StregisterComponent"]
    },
    {
        path: 'adminlogin',
        component: _adlogin_adlogin_component__WEBPACK_IMPORTED_MODULE_2__["AdloginComponent"]
    },
    {
        path: 'studenthome',
        component: _sthome_sthome_component__WEBPACK_IMPORTED_MODULE_7__["SthomeComponent"]
    },
    {
        path: 'upload',
        component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_11__["UploadComponent"]
    },
    {
        path: 'blog/:id',
        component: _blogpage_blogpage_component__WEBPACK_IMPORTED_MODULE_3__["BlogpageComponent"]
    },
    {
        path: 'myblogs/:id',
        component: _myblogs_myblogs_component__WEBPACK_IMPORTED_MODULE_6__["MyblogsComponent"]
    },
    {
        path: 'adminhome',
        component: _adhome_adhome_component__WEBPACK_IMPORTED_MODULE_1__["AdhomeComponent"]
    },
    {
        path: 'update',
        component: _update_update_component__WEBPACK_IMPORTED_MODULE_10__["UpdateComponent"]
    },
    {
        path: 'myblogcontent/:id',
        component: _myblogpage_myblogpage_component__WEBPACK_IMPORTED_MODULE_5__["MyblogpageComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xFNw":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/blog.service */ "GX0M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class UpdateComponent {
    constructor(fb, blogdata, router) {
        this.fb = fb;
        this.blogdata = blogdata;
        this.router = router;
        this.student = {
            _id: '',
            name: '',
            email: '',
            password: ''
        };
        this.blog = {
            _id: '',
            title: '',
            writer: '',
            about: '',
            content: '',
            writerid: '',
            approve: ''
        };
        this.blogForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            about: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
        this.student = JSON.parse(localStorage.getItem('stdata'));
        this.blog = JSON.parse(localStorage.getItem('updateblogid'));
    }
    blogsav(stid, stname) {
        this.blog.writerid = stid;
        this.blog.writer = stname;
        this.blog.approve = 'false';
        console.log(this.blog);
        this.blogdata.updateblogcontent(this.blog).subscribe(res => {
            console.log(res);
        }, err => {
            if (err.status == 200) {
                this.router.navigate(['/myblogs/' + stid]);
            }
        });
    }
}
UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateComponent, selectors: [["app-update"]], decls: 44, vars: 6, consts: [[1, "wrapper", "row1"], ["id", "header", 1, "hoc", "clear"], ["id", "logo", 1, "fl_left"], ["routerLink", ""], ["id", "mainav", 1, "fl_right"], [1, "clear"], [1, "fas", "fa-user-alt", 2, "font-size", "large"], ["routerLink", "/myblogs/student._id"], [1, "wrapper", "row3"], [1, "hoc", "container", "clear"], [1, "upform"], [2, "text-align", "center", "font-size", "x-large"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "exampleFormControlInput1"], ["type", "text", "id", "exampleFormControlInput1", "name", "title", "placeholder", "Blog title", "formControlName", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleFormControlTextarea1"], ["id", "exampleFormControlTextarea1", "rows", "2", "placeholder", "Short description about your blog.", "name", "about", "formControlName", "about", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "exampleFormControlTextarea1", "rows", "5", "name", "content", "formControlName", "content", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "wrapper", "row5", "foot"], ["id", "copyright", 1, "hoc", "clear"], [1, "fl_left"], [1, "fl_right"], [1, "fa", "fa-envelope-o"]], template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ICTAK Tech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "main", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Add New Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UpdateComponent_Template_form_ngSubmit_19_listener() { return ctx.blogsav(ctx.student._id, ctx.student.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_23_listener($event) { return ctx.blog.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_textarea_ngModelChange_28_listener($event) { return ctx.blog.about = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_textarea_ngModelChange_33_listener($event) { return ctx.blog.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Copyright \u00A9 2021 - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " blogictak@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.student.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.blogForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blog.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blog.about);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blog.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.blogForm.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".upform[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    background-color: #34495E;\r\n    padding: 5% 5% 5% 5%;\r\n    margin: 0% 20% 0% 20%;\r\n    color: white;\r\n    border-radius: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZm9ybXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDk1RTtcclxuICAgIHBhZGRpbmc6IDUlIDUlIDUlIDUlO1xyXG4gICAgbWFyZ2luOiAwJSAyMCUgMCUgMjAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "yDSY":
/*!********************************************!*\
  !*** ./src/app/service/student.service.ts ***!
  \********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class StudentService {
    // "http://localhost:3000"
    constructor(http) {
        this.http = http;
        this.stUrl = "/api";
    }
    studentreg(student) {
        return this.http.post(this.stUrl + "/stregister", student);
    }
    studentlog(login) {
        return this.http.post(this.stUrl + "/stlogin", login);
    }
    adminreg(student) {
        return this.http.post(this.stUrl + "/adregister", student);
    }
    adminlog(login) {
        return this.http.post(this.stUrl + "/adlogin", login);
    }
}
StudentService.ɵfac = function StudentService_Factory(t) { return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentService, factory: StudentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "yELH":
/*!**********************************************!*\
  !*** ./src/app/myblogs/myblogs.component.ts ***!
  \**********************************************/
/*! exports provided: MyblogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyblogsComponent", function() { return MyblogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/blog.service */ "GX0M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MyblogsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "writer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyblogsComponent_div_21_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const dat_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.searchblog(dat_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "see more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyblogsComponent_div_21_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const dat_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.delete(dat_r2._id, dat_r2.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dat_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dat_r2.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dat_r2.writer, "");
} }
function MyblogsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "writer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyblogsComponent_div_25_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.searchblog(data_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "see more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyblogsComponent_div_25_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.updateblog(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyblogsComponent_div_25_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.delete(data_r6._id, data_r6.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r6.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r6.writer, "");
} }
class MyblogsComponent {
    constructor(blogdata, router) {
        this.blogdata = blogdata;
        this.router = router;
        this.student = {
            _id: '',
            name: '',
            email: '',
            password: ''
        };
        this.blog = [{
                writerid: '',
                _id: '',
                title: '',
                writer: '',
                about: '',
                content: ''
            }];
        this.approvedblog = [{
                writerid: '',
                _id: '',
                title: '',
                writer: '',
                about: '',
                content: ''
            }];
        this.writerid = '';
    }
    ngOnInit() {
        this.student = JSON.parse(localStorage.getItem('stdata'));
        this.writerid = JSON.parse(localStorage.getItem('writerid'));
        this.blogdata.approveblog(this.writerid).subscribe((data) => {
            this.approvedblog = JSON.parse(JSON.stringify(data));
        });
        this.blogdata.myblog(this.writerid).subscribe((data) => {
            this.blog = JSON.parse(JSON.stringify(data));
        });
    }
    searchblog(blogid) {
        this.blogdata.singleblog(blogid).subscribe((data) => {
            localStorage.setItem('singleblogdata', JSON.stringify(data));
            this.router.navigate(['/myblogcontent/' + blogid]);
        });
    }
    delete(id, tit) {
        var r = confirm("Are your sure you want to delete -" + tit);
        if (r == true) {
            this.blogdata.deleteblog(id).subscribe((res) => {
                this.router.navigate(['/myblogs/' + this.writerid]);
            });
            window.location.reload();
        }
    }
    updateblog(bdata) {
        localStorage.setItem('updateblogid', JSON.stringify(bdata));
        this.router.navigate(['/update']);
    }
}
MyblogsComponent.ɵfac = function MyblogsComponent_Factory(t) { return new (t || MyblogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MyblogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyblogsComponent, selectors: [["app-myblogs"]], decls: 33, vars: 3, consts: [[1, "wrapper", "row1"], ["id", "header", 1, "hoc", "clear"], ["id", "logo", 1, "fl_left"], ["routerLink", ""], ["id", "mainav", 1, "fl_right"], [1, "clear"], [1, "fas", "fa-user-alt", 2, "font-size", "large"], ["routerLink", "/upload"], ["routerLink", "/studenthome"], [1, "hoc", "containerx", "clear"], [2, "text-align", "center", "margin-top", "2em", "text-transform", "uppercase", "background", "#34495E", "padding", ".5em", "font-size", "large", "font-weight", "bold", "color", "white"], [1, "wrapper-sthome"], ["class", "mainbox", "style", "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;", 4, "ngFor", "ngForOf"], [1, "wrapper-sthome", "mainbox"], ["style", "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;", 4, "ngFor", "ngForOf"], [1, "wrapper", "row5", "foot"], ["id", "copyright", 1, "hoc", "clear"], [1, "fl_left"], [1, "fl_right"], [1, "fa", "fa-envelope-o"], [1, "mainbox", 2, "font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"], [1, "card", "cardspace", 2, "width", "18rem"], [1, "card-body"], [1, "card-text", 2, "font-size", "120%"], [1, "btn", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-danger", 2, "margin-left", "4em", 3, "click"], [2, "font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"], ["type", "submit", 1, "btn", "btn-success", 2, "margin", "1em 0em 0em 0em", 3, "click"], ["type", "submit", 1, "btn", "btn-danger", 2, "margin", "1em 0em 0em 1em", 3, "click"]], template: function MyblogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ICTAK Tech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "main", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "approved blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MyblogsComponent_div_21_Template, 20, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "disapproved blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MyblogsComponent_div_25_Template, 23, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Copyright \u00A9 2021 - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " blogictak@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.student.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.approvedblog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blog);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteWJsb2dzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map