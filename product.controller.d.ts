import { productService } from "./product.service";
import { product } from "./data/product.dto";
import { registration_Dto } from "./registration.dto";
import { login_Dto } from "./login_dto";
export declare class ProductController {
    private productService;
    constructor(productService: productService);
    getAllProducts(): product[];
    updateProducts(product: product): string;
    deleteProducts(productId: string): string;
    addProducts(product: product): string;
    registrationuser(registration_dto: registration_Dto): Promise<any>;
    login(loginDto: login_Dto): any;
}
