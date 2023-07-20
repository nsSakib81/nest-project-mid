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
exports.productService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const registration_entity_1 = require("./registration.entity");
let productService = exports.productService = class productService {
    addProductService(product) {
        product.productId = (0, uuid_1.v4)();
        this.products.push(product);
        return "Your product is added successfully";
    }
    updateProductService(product) {
        let index = this.products.findIndex((currentProduct) => {
            return currentProduct.productId == product.productId;
        });
        this.products[index] = product;
        return "product updated successfully";
    }
    deleteProductService(productId) {
        this.products = this.products.filter((product) => {
            return product.productId != productId;
        });
        return "product deleted";
    }
    findAllProducts() {
        return this.products;
    }
    constructor(userRepo) {
        this.userRepo = userRepo;
        this.products = [];
    }
    async registrationuser(registration_dtoo) {
        const User = await this.userRepo.findOne({ where: { name: registration_dtoo.name } });
        if (User) {
            return 'User exists!';
        }
        else {
            return this.userRepo.save(registration_dtoo);
        }
    }
    async login(login_dto) {
        const user = await this.userRepo.findOne({ where: { name: login_dto.name } });
        if (!user) {
            return 'Login unsuccessful: User not found';
        }
        if (user.password !== login_dto.password) {
            return 'Login unsuccessful: Incorrect password';
        }
        return 'Login successful';
    }
};
exports.productService = productService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registration_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], productService);
//# sourceMappingURL=product.service.js.map