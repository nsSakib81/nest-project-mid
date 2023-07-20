"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_dto_1 = require("./data/product.dto");
const registration_dto_1 = require("./registration.dto");
const login_dto_1 = require("./login_dto");
let ProductController = exports.ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getAllProducts() {
        return this.productService.findAllProducts();
    }
    updateProducts(product) {
        return this.productService.updateProductService(product);
    }
    deleteProducts(productId) {
        return this.productService.deleteProductService(productId);
    }
    addProducts(product) {
        return this.productService.addProductService(product);
    }
    async registrationuser(registration_dto) {
        return await this.productService.registrationuser(registration_dto);
    }
    login(loginDto) {
        return this.productService.login(loginDto);
    }
};
__decorate([
    (0, common_1.Get)("/findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Put)("/update"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.product]),
    __metadata("design:returntype", String)
], ProductController.prototype, "updateProducts", null);
__decorate([
    (0, common_1.Delete)("/delete/:productId"),
    __param(0, (0, common_1.Param)("productId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ProductController.prototype, "deleteProducts", null);
__decorate([
    (0, common_1.Post)("/add"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.product]),
    __metadata("design:returntype", String)
], ProductController.prototype, "addProducts", null);
__decorate([
    (0, common_1.Post)('/registration'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_dto_1.registration_Dto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "registrationuser", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.login_Dto]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "login", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)("productName"),
    __metadata("design:paramtypes", [product_service_1.productService])
], ProductController);
//# sourceMappingURL=product.controller.js.map