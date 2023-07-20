import { product } from "./data/product.dto";
import { Repository } from 'typeorm';
import { UserEntity } from 'src/product/registration.entity';
import { registration_Dto } from './registration.dto';
import { login_Dto } from "./login_dto";
export declare class productService {
    private userRepo;
    products: product[];
    addProductService(product: product): string;
    updateProductService(product: product): string;
    deleteProductService(productId: string): string;
    findAllProducts(): product[];
    constructor(userRepo: Repository<UserEntity>);
    registrationuser(registration_dtoo: registration_Dto): Promise<any>;
    login(login_dto: login_Dto): Promise<string>;
}
